if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./routers");
const { createServer } = require("node:http");
const { Server } = require("socket.io");
// const router = require("./routes");
const { enterGame, getQuestionSet } = require("./helpers/quizz");

const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
  },
});

let roomPool = {};

let testingRoomPool = [{}];

app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(router);

io.on("connection", (socket) => {
  socket.on("game:initiate", (choosen, username) => {
    const gameData = enterGame(choosen, username, socket.id);

    const newRoomPoolObj = {
      roomCode: gameData.roomCode,
      roomMaster: username,
      questionSet: choosen,
      questionsLegth: gameData.questions.length,
      questions: gameData.questions,
      currentQuestion: 0,
      correctUser: [],
    };

    const payload = {
      roomCode: gameData.roomCode,
      questions: gameData.questions,
      currentQuestion: 0,
    };

    testingRoomPool.push(newRoomPoolObj);
    roomPool[gameData.roomCode] = choosen;
    socket.join(gameData.roomCode);
    socket.emit("game:successJoin", payload);
  });

  socket.on("game:join", (roomCode, username) => {
    choosen = roomPool[roomCode];
    const gameData = enterGame(choosen, username);

    socket.join(roomCode);
    const selectedRoom = testingRoomPool.find((obj) => {
      return obj.roomCode === roomCode;
    });

    //ganti
    if (!selectedRoom) {
      //THROW GA BISA MASUK
    }

    const payload = {
      roomCode: selectedRoom.roomCode,
      questions: selectedRoom.questions,
      currentQuestion: selectedRoom.currentQuestion,
    };
    socket.emit("game:successJoin", payload);
  });

  socket.on("game:answerCorrect", (data) => {
    const indexSelectedRoom = testingRoomPool.findIndex((obj) => {
      return obj.roomCode === data.roomCode;
    });

    testingRoomPool[indexSelectedRoom].correctUser.push(data.username);
    testingRoomPool[indexSelectedRoom].currentQuestion += 1;
    const payload = {
      currentQuestion: testingRoomPool[indexSelectedRoom].currentQuestion,
      correctUser:
        testingRoomPool[indexSelectedRoom].correctUser[data.currentQuestion],
    };
    const selectedRoomCode = testingRoomPool[indexSelectedRoom].roomCode;

    if (
      data.currentQuestion ===
      testingRoomPool[indexSelectedRoom].questionsLegth - 1
    ) {
      const leaderboard = testingRoomPool[indexSelectedRoom].correctUser.reduce(
        function (value, value2) {
          return value[value2] ? ++value[value2] : (value[value2] = 1), value;
        },
        {}
      );

      io.to(selectedRoomCode).emit(
        "game:nextQuestion",
        payload,
        "block",
        {
          isEnd: true,
        },
        leaderboard
      );
    } else {
      io.to(selectedRoomCode).emit("game:nextQuestion", payload, "block");
    }
  });
});

module.exports = server;
