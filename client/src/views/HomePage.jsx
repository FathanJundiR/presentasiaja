import CardGAME from "../Components/GameCard";
import { useEffect, useState } from "react";
import introduction from "../assets/burger.gif";
import { Typewriter } from "react-simple-typewriter";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  const [intro, setIntro] = useState(true);
  const [isFirstTypingComplete, setIsFirstTypingComplete] = useState(false);
  const [secondTyping, setSecondTyping] = useState(false);
  const [thirdTyping, setThirdTyping] = useState(false);

  useEffect(() => {
    if (!isFirstTypingComplete) {
      // Duration calculation: (text length / type speed) * 1000 + additional delay
      const typingDuration = 4500; // Example: (text length / type speed) + delay
      const timer = setTimeout(() => {
        setIsFirstTypingComplete(true);
      }, typingDuration);

      return () => clearTimeout(timer);
    }
  }, [isFirstTypingComplete]);

  useEffect(() => {
    if (!secondTyping) {
      // Duration calculation: (text length / type speed) * 1000 + additional delay
      const typingDuration = 7300; // Example: (text length / type speed) + delay
      const timer = setTimeout(() => {
        setSecondTyping(true);
      }, typingDuration);

      return () => clearTimeout(timer);
    }
  }, [secondTyping]);

  useEffect(() => {
    if (!thirdTyping) {
      // Duration calculation: (text length / type speed) * 1000 + additional delay
      const typingDuration = 17000; // Example: (text length / type speed) + delay
      const timer = setTimeout(() => {
        setThirdTyping(true);
      }, typingDuration);
      return () => clearTimeout(timer);
    }
  }, [thirdTyping]);

  function chooseQuestion(e) {
    e.preventDefault();
    const choosen = e.target.value;
    navigate("/gamePage", {
      state: { questionSet: choosen, roomMaster: true },
    });
  }

  return (
    <>
      <div className="h-screen w-full fixed z-1 bg-[url('https://a-static.besthdwallpaper.com/balcony-lofi-wallpaper-1600x600-106546_84.jpg')] bg-cover">
        <div className="w-full h-full bg-black bg-opacity-50 backdrop-saturate-200 flex justify-center flex-col md:flex-row pt-10">
          <div className="w-[80%] h-[50%] relative z-10  mt-[10vh]">
            <CardGAME chooseQuestion={chooseQuestion} />
          </div>
          {intro && (
            <div className="hehe fixed inset-0 bg-slate-black bg-opacity-70 backdrop-blur-md flex z-20 flex items-center justify-center">
              <button
                className="text-black"
                onClick={() => {
                  setIntro(false);
                }}
              >
                {" "}
                X{" "}
              </button>
              <div className="w-[60vw] h-[80vh] flex">
                <div className="w-[30%] h-full flex items-end">
                  <img
                    className="h-[40%] w-full object-fill"
                    src={introduction}
                  />
                </div>
                <div className="hoho w-[70%] h-full flex justify-center pt-5">
                  <div className="w-[90%] h-[60%] border border-2 rounded-lg border-slate-400 px-3 py-6 bg-slate-200 bg-opacity-80">
                    <p className="text-slate-700 pt-3">
                      <Typewriter
                        words={[
                          `Hello, new adventurer! Welcome to [Game Name]! I'm here to help you get started on your journey. To begin, check the instructions on your screen. There will be 3 options for you to play !`,
                        ]}
                        cursorColor="white"
                        typeSpeed={20}
                        delaySpeed={1000}
                      />
                    </p>

                    <p className=" pt-3 text-slate-700">
                      {isFirstTypingComplete && (
                        <Typewriter
                          words={[
                            "TTg or Tebak Tebak gambar is a develop by Fathan Rina and Dylan",
                          ]}
                          cursorColor="white"
                          typeSpeed={30}
                          delaySpeed={2000}
                        />
                      )}
                    </p>
                    <p className=" pt-3 text-slate-700">
                      {secondTyping && (
                        <Typewriter
                          words={[
                            "Tebak Tebak Gambar, your goal is to guess who or what is hidden in the partially obscured image. Each level presents you with a picture where only a part of it is visible. Use your observation skills to identify the hidden subject based on the clues provided and the visible portions of the image",
                          ]}
                          cursorColor="white"
                          typeSpeed={30}
                          delaySpeed={2000}
                        />
                      )}
                    </p>
                    <p className=" pt-3 text-slate-700">
                      {thirdTyping && (
                        <Typewriter
                          words={[
                            "First , choose which mode u want to play with , there are Instructure mode , Students mode , and Car mode , just simply click the button and enjoy the game !!!!",
                          ]}
                          cursorColor="white"
                          typeSpeed={30}
                          delaySpeed={2000}
                        />
                      )}
                    </p>
                    <div className="w-full flex justify-end h-[15%]">
                      <button
                        className="w-[30%] h-[90%] border border-3 border-slate-700 rounded-2xl mt-1 text-slate-800"
                        onClick={() => {
                          setIntro(false);
                        }}
                      >
                        Start Playing
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
