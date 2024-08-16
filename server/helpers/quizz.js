//==== PERTANYAAN ====//
const questionSet = {
  teacherGame: [
    {
      clue: "Sekian lecture pada pagi ini ?",
      imgUrl:
        "http://res.cloudinary.com/dcisb7ayn/image/upload/v1723692128/ooxht9bcmc3jpdmbqx10.jpg",
      correctAnswer: "jc",
    },
    {
      clue: "Pipi merah mudah kulit putih pandai menggombal ?",
      imgUrl:
        "http://res.cloudinary.com/dcisb7ayn/image/upload/v1723692190/tbvdpmou6blqzgemkxjw.jpg",
      correctAnswer: "ardy",
    },
    {
      clue: "Markicob...Boom ?",
      imgUrl:
        "http://res.cloudinary.com/dcisb7ayn/image/upload/v1723692649/udkglfu36q1mbcbjysma.jpg",
      correctAnswer: "rudy",
    },
  ],
  StudentGame: [
    {
      clue: " Suka tidur dimana saja ?",
      imgUrl:
        "http://res.cloudinary.com/dcisb7ayn/image/upload/v1723692768/ouzxphnvzumlqg8qbsf1.jpg",
      correctAnswer: "yoel",
    },
    {
      clue: "Cowok gemoy yang udah jadi alumni ?",
      imgUrl:
        "http://res.cloudinary.com/dcisb7ayn/image/upload/v1723692795/spilut96r7bh9ieqs3lu.jpg",
      correctAnswer: "yoel",
    },
    {
      clue: "Gampang ngantuk karena faktor U ?",
      imgUrl:
        "http://res.cloudinary.com/dcisb7ayn/image/upload/v1723692839/wthh9tchsjidyulf9vry.jpg",
      correctAnswer: "fathan",
    },
    {
      clue: "Kepala tidak berambut v2 batch 17 ?",
      imgUrl:
        "http://res.cloudinary.com/dcisb7ayn/image/upload/v1723692867/etu9thhe68qxaoyvakl7.jpg",
      correctAnswer: "farhan",
    },
  ],
};
//==== PERTANYAAN ====//

const getQuestionSet = (choosen) => {
  return questionSet[choosen];
};

const enterGame = (choosen, username, id) => {
  const questions = getQuestionSet(choosen);

  if (id) {
    const roomCode = id.slice(0, 5);
    return {
      roomCode,
      username,
      questions,
    };
  } else {
    return {
      username,
      questions,
    };
  }
};

module.exports = { enterGame, getQuestionSet };
