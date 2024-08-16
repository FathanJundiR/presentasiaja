import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Toastify from "toastify-js";
import burger from "../assets/burger.gif";

export default function GamePage({ socket }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [data, setData] = useState({});
  const [stateRoomCode, setStateRoomCode] = useState("");
  const [stateQuestions, setStateQuestions] = useState([]);
  const [stateCurrentQuestion, setStateCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [stateDisplay1, setStateDisplay1] = useState("block");
  const [stateDisplay2, setStateDisplay2] = useState("block");
  const [stateDisplay3, setStateDisplay3] = useState("block");
  const [stateDisplay4, setStateDisplay4] = useState("block");
  const [stateDisplay5, setStateDisplay5] = useState("block");
  const [stateDisplay6, setStateDisplay6] = useState("block");
  const [stateDisplay7, setStateDisplay7] = useState("block");
  const [stateDisplay8, setStateDisplay8] = useState("block");
  const [stateDisplay9, setStateDisplay9] = useState("block");

  function checkAnswer(answer) {
    const isEquivalent = !answer.localeCompare(
      stateQuestions[stateCurrentQuestion].correctAnswer,
      undefined,
      { sensitivity: "accent" }
    );

    if (isEquivalent) {
      const payload = {
        username: localStorage.username,
        roomCode: stateRoomCode,
        currentQuestion: stateCurrentQuestion,
      };

      socket.emit("game:answerCorrect", payload);
      socket.on(
        "game:nextQuestion",
        ({ currentQuestion, correctUser }, display) => {
          setStateCurrentQuestion(currentQuestion);
          setStateDisplay1("block");
          setStateDisplay2("block");
          setStateDisplay3("block");
          setStateDisplay4("block");
          setStateDisplay5("block");
          setStateDisplay6("block");
          setStateDisplay7("block");
          setStateDisplay8("block");
          setStateDisplay9("block");
        }
      );
    } else {
      Toastify({
        text: "Wrong answer, try again",
        duration: 2000,
        newWindow: true,
        close: true,
        gravity: "bottom",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "#EF4C54",
          color: "#17202A",
          boxShadow: "0 5px 10px black",
          fontWeight: "bold",
        },
      }).showToast();
    }
  }

  useEffect(() => {
    socket.connect();

    if (location.state.roomMaster) {
      //kalo roomMaster
      socket.emit(
        "game:initiate",
        location.state.questionSet,
        localStorage.username
      );
      socket.on("game:successJoin", (payload) => {
        if (payload) {
          const { roomCode, questions, currentQuestion } = payload;
          setStateRoomCode(roomCode);
          setStateQuestions(questions);
          setStateCurrentQuestion(currentQuestion);
        }
      });
    } else {
      socket.emit("game:join", location.state.roomCode, localStorage.username);
      socket.on("game:successJoin", (payload) => {
        if (payload) {
          const { roomCode, questions, currentQuestion } = payload;
          setStateRoomCode(roomCode);
          setStateQuestions(questions);
          setStateCurrentQuestion(currentQuestion);
        }
      });
    }

    socket.on(
      "game:nextQuestion",
      ({ currentQuestion, correctUser }, display, isEnd, leaderboard) => {
        if (isEnd) {
          setStateCurrentQuestion(currentQuestion);
          if (correctUser === localStorage.username) {
            alert("Jawabanmu benar, Permainan Berakhir");
          } else {
            alert(
              `${correctUser} telah menjawab dengan benar, Permainan Berakhir`
            );
          }
          navigate("/", { state: { leaderboard } });
        } else {
          setStateCurrentQuestion(currentQuestion);
          setStateDisplay1("block");
          setStateDisplay2("block");
          setStateDisplay3("block");
          setStateDisplay4("block");
          setStateDisplay5("block");
          setStateDisplay6("block");
          setStateDisplay7("block");
          setStateDisplay8("block");
          setStateDisplay9("block");
          if (correctUser === localStorage.username) {
            alert("Jawabanmu benar");
          } else {
            alert(`${correctUser} telah menjawab dengan benar`);
          }
        }
      }
    );
    return () => {
      socket.off();
      socket.disconnect();
    };
  }, []);

  return (
    <>
      <div className="w-full h-screen bg-[url('https://images.alphacoders.com/134/1343188.png')] bg-cover flex justify-center fixed">
        <div className="w-full h-screen flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="w-4/5 h-4/5 bg-slate-700 backdrop-blur-sm bg-opacity-70 border mt-5 border-2 border-slate-200 rounded-3xl flex justify-center">
            <div className="w-[70%] h-full ">
              <div className="w-full h-[10%] flex justify-center text-slate-200 text-2xl">
                {" "}
                Room Id : {stateRoomCode}
              </div>
              <div className="w-full h-[10%] flex justify-center text-slate-200 text-2xl">
                {" "}
                Clue : {stateQuestions[stateCurrentQuestion]?.clue}
              </div>
              <div className="w-full h-[70%] relative bg-slate-500 overflow-hidden">
                <img
                  className="absolute inset-0 w-full h-full object-contain z-10"
                  src={stateQuestions[stateCurrentQuestion]?.imgUrl}
                  alt="Burger"
                />
                <div className="absolute inset-0 w-full h-full bg-slate-200 bg-opacity-20 z-20 grid grid-cols-3 grid-rows-3 gap-0 ">
                  <div className="border border-black">
                    <div
                      className={`bg-slate-300 w-full h-full ${stateDisplay1}`}
                      onClick={(e) => setStateDisplay1("hidden")}
                    >
                      {" "}
                    </div>
                  </div>
                  <div className="border border-black">
                    <div
                      className={`bg-slate-300 w-full h-full ${stateDisplay2}`}
                      onClick={(e) => setStateDisplay2("hidden")}
                    >
                      {" "}
                    </div>
                  </div>
                  <div className="border border-black">
                    <div
                      className={`bg-slate-300 w-full h-full ${stateDisplay3}`}
                      onClick={(e) => setStateDisplay3("hidden")}
                    >
                      {" "}
                    </div>
                  </div>
                  <div className="border border-black">
                    <div
                      className={`bg-slate-300 w-full h-full ${stateDisplay4}`}
                      onClick={(e) => setStateDisplay4("hidden")}
                    >
                      {" "}
                    </div>
                  </div>
                  <div className="border border-black">
                    <div
                      className={`bg-slate-300 w-full h-full ${stateDisplay5}`}
                      onClick={(e) => setStateDisplay5("hidden")}
                    >
                      {" "}
                    </div>
                  </div>
                  <div className="border border-black">
                    <div
                      className={`bg-slate-300 w-full h-full ${stateDisplay6}`}
                      onClick={(e) => setStateDisplay6("hidden")}
                    >
                      {" "}
                    </div>
                  </div>
                  <div className="border border-black">
                    <div
                      className={`bg-slate-300 w-full h-full ${stateDisplay7}`}
                      onClick={(e) => setStateDisplay7("hidden")}
                    >
                      {" "}
                    </div>
                  </div>
                  <div className="border border-black">
                    <div
                      className={`bg-slate-300 w-full h-full ${stateDisplay8}`}
                      onClick={(e) => setStateDisplay8("hidden")}
                    >
                      {" "}
                    </div>
                  </div>
                  <div className="border border-black">
                    <div
                      className={`bg-slate-300 w-full h-full ${stateDisplay9}`}
                      onClick={(e) => setStateDisplay9("hidden")}
                    >
                      {" "}
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full h-[10%] flex justify-center px-4 py-3">
                <input
                  type="email"
                  className="border-l border-t border-b border-gray-200 rounded-l-md w-[80%] text-base md:text-lg px-3 py-2"
                  placeholder="Enter Your Answer Here"
                  onChange={(e) => setUserAnswer(e.target.value)}
                />
                <button
                  className="bg-orange-500 hover:bg-orange-600 hover:border-orange-600 text-white font-bold capitalize px-3 py-2 text-base md:text-lg rounded-r-md border-t border-r border-b border-orange-500"
                  onClick={(e) => {
                    e.preventDefault();
                    checkAnswer(userAnswer);
                  }}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
