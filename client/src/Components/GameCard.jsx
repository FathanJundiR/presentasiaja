import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import teacher from "../assets/vivid-classes-at-the-university.gif";
import students from "../assets/Untitled design.png";
import car from "../assets/memphis-delivery-service-with-vehicle-and-bags.gif";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";

export default function CardGAME({ chooseQuestion }) {
  const navigate = useNavigate();
  const [teacherGame, setTeacherGame] = useState(false);
  const [StudentGame, setStudentGame] = useState(false);
  const [CarGame, setCarGame] = useState(false);
  const [code, setCode] = useState("");

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="w-[90%] ml-[4vw] h-[70vh] flex rounded-lg rounded-3xl bg-[url('https://i.pinimg.com/originals/cd/30/1d/cd301d14b22a349fbe17f8a830587c4d.jpg')] bg-fill  bg-cover relative">
            <div
              className="w-full h-full bg-black
             bg-opacity-50 relative z-10 shadow-2xl border border-slate-800 rounded-lg backdrop-blur-sm"
            >
              <div className="w-1/2 h-full flex justify-center items-center pt-10">
                <div className="w-3/4 h-3/4 p-4 md:p-8 rounded-lg">
                  <span className="text-6xl text-white" id="recomended">
                    Instructure Mode
                  </span>
                  <p className="mt-10 text-white">
                    In the "Instructure" mode, the guessing game takes on a fun
                    twist by featuring photos of instructors as the primary
                    challenge. The goal of this mode is to guess who is hidden
                    within the partially obscured images of various instructors
                  </p>
                  <div className="w-full mt-6 md:py-3 md:text-lg md:text-xl">
                    <button
                      className="border border-slate-200 rounded-lg py-2 px-1 md:py-3 md:px-6 text-lg md:text-x text-slate-300"
                      onClick={() => {
                        setTeacherGame(true);
                      }}
                    >
                      Play Now
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-1/2 h-full pl-11 absolute top-0 right-0 z-20 pt-[10vh]">
                <img className="FotoSatu" src={teacher} alt="Instructor" />
              </div>
            </div>
            {teacherGame && (
              <div className=" fixed inset-0 backdrop-blur-sm flex z-30 flex items-center justify-center">
                <div className="w-[40vw] h-[30vh] border border-slate-300 bg-slate-700 bg-opacity-80 rounded-lg">
                  <div
                    className="w-full h-1/5 flex justify-end px-4 py-5 text-white cursor-pointer"
                    onClick={() => {
                      setTeacherGame(false);
                    }}
                  >
                    X
                  </div>
                  <div className="w-full h-4/5 flex flex-col justify-center items-center pb-6 gap-7">
                    <form className="flex flex-col md:flex-row items-center gap-4">
                      <input
                        type="text"
                        placeholder="Enter room code"
                        className="border border-slate-200 rounded-lg py-2 px-4 md:py-3 md:px-6 text-lg md:text-xl text-slate-700 placeholder-slate-400 focus:outline-none focus:border-sky-500"
                        onChange={(e) => setCode(e.target.value)}
                      />
                      <button
                        type="submit"
                        className="border border-slate-200 rounded-lg py-2 px-4 md:py-3 md:px-6 text-lg md:text-xl text-slate-300 bg-slate-800 hover:bg-slate-700 transition-colors duration-300"
                        onClick={(e) => {
                          e.preventDefault();
                          console.log(code);
                          if (code) {
                            navigate("/gamePage", {
                              state: { roomCode: code, roomMaster: false },
                            });
                          } else {
                            //ganti
                            alert("GAK BOLEH KOSONG YA BIJI");
                          }
                        }}
                      >
                        Join Room
                      </button>
                    </form>

                    <div className="flex gap-7 mt-6">
                      <button
                        className="border border-slate-200 rounded-lg py-2 px-4 md:py-3 md:px-6 text-lg md:text-xl mt-4 md:mt-0 text-slate-300 bg-slate-800 hover:bg-slate-700 transition-colors duration-300"
                        value="teacherGame"
                        onClick={(e) => {
                          chooseQuestion(e);
                        }}
                      >
                        Create Room
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[90%] h-[70vh] ml-[4vw] flex rounded-lg border border-2 border-slate-800 shadow rounded-3xl bg-[url('https://i.pinimg.com/originals/cd/30/1d/cd301d14b22a349fbe17f8a830587c4d.jpg')] bg-fill relative">
            <div className="w-full h-full bg-black bg-opacity-50 relative z-10 backdrop-blur-sm">
              <div className="w-1/2 h-full flex justify-center items-center">
                <div className="w-3/4 h-3/4 p-4 md:p-8 rounded-lg">
                  <span className="text-6xl text-white" id="recomended">
                    Students Mode
                  </span>
                  <p className="mt-10 text-white">
                    In the "Students" mode, the guessing game takes on a fun
                    twist by featuring photos of instructors as the primary
                    challenge. The goal of this mode is to guess who is hidden
                    within the partially obscured images of various instructors
                  </p>
                  <div className="w-full mt-6 md:py-3 md:text-lg md:text-xl">
                    <button
                      className="border border-slate-200 rounded-lg py-2 px-1 md:py-3 md:px-6 text-lg md:text-x text-slate-300"
                      onClick={() => {
                        setStudentGame(true);
                      }}
                    >
                      Play Now
                    </button>
                  </div>
                </div>
              </div>

              <div className="w-1/2 h-full pl-10 absolute top-0 right-0 z-20 pt-9">
                <img
                  className="FotoSatu h-3/4 w-3/4 object-contain pt-[10vh]"
                  src={students}
                  alt="students_picture"
                />
              </div>
            </div>
            {StudentGame && (
              <div className=" fixed inset-0 backdrop-blur-sm flex z-30 flex items-center justify-center">
                <div className="w-[40vw] h-[30vh] border border-slate-300 bg-slate-700 bg-opacity-80 rounded-lg">
                  <div
                    className="w-full h-1/5 flex justify-end px-4 py-5 text-white cursor-pointer"
                    onClick={() => {
                      setStudentGame(false);
                    }}
                  >
                    X
                  </div>
                  <div className="w-full h-4/5 flex flex-col justify-center items-center pb-6 gap-7">
                    <form className="flex flex-col md:flex-row items-center gap-4">
                      <input
                        type="text"
                        placeholder="Enter room code"
                        className="border border-slate-200 rounded-lg py-2 px-4 md:py-3 md:px-6 text-lg md:text-xl text-slate-700 placeholder-slate-400 focus:outline-none focus:border-sky-500"
                        onChange={(e) => setCode(e.target.value)}
                      />
                      <button
                        type="submit"
                        className="border border-slate-200 rounded-lg py-2 px-4 md:py-3 md:px-6 text-lg md:text-xl text-slate-300 bg-slate-800 hover:bg-slate-700 transition-colors duration-300"
                        onClick={(e) => {
                          e.preventDefault();
                          console.log(code);
                          if (code) {
                            navigate("/gamePage", {
                              state: { roomCode: code, roomMaster: false },
                            });
                          } else {
                            //ganti
                            alert("GAK BOLEH KOSONG YA BIJI");
                          }
                        }}
                      >
                        Join Room
                      </button>
                    </form>

                    <div className="flex gap-7 mt-6">
                      <button
                        className="border border-slate-200 rounded-lg py-2 px-4 md:py-3 md:px-6 text-lg md:text-xl mt-4 md:mt-0 text-slate-300 bg-slate-800 hover:bg-slate-700 transition-colors duration-300"
                        value="StudentGame"
                        onClick={(e) => {
                          chooseQuestion(e);
                        }}
                      >
                        Create Room
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[90%] h-[70vh] ml-[4vw]  flex flex-col md:flex-row rounded-lg  shadow rounded-3xl bg-[url('https://png.pngtree.com/background/20230412/original/pngtree-car-repair-place-picture-image_2401494.jpg')] bg-cover relative">
            <div className="w-full h-full bg-slate-900 bg-opacity-60 flex flex-col justify-center md:relative md:z-10 backdrop-blur-sm">
              <div className="w-full h-auto md:w-1/2 flex flex-col md:flex-row md:justify-center md:items-center p-4 md:p-8">
                <div className="w-full md:w-3/4 h-auto md:h-3/4 flex flex-col justify-center md:justify-start">
                  <span
                    className="text-4xl md:text-6xl text-white font-bold"
                    id="recomended"
                  >
                    Cars Mode
                  </span>
                  <p className="mt-4 md:mt-10 text-white text-base md:text-lg">
                    In the "Cars" mode, the guessing game takes on a fun twist
                    by featuring photos of cars model as the primary challenge.
                    The goal of this mode is to guess what car is hidden within
                    the partially obscured images of various instructors
                  </p>
                  <div className="w-full mt-4 md:mt-6 md:py-3 text-base md:text-lg">
                    <button
                      className="border border-slate-200 rounded-lg py-2 px-4 md:py-3 md:px-6 text-base md:text-lg text-slate-300"
                      onClick={() => {
                        setCarGame(true);
                      }}
                    >
                      Play Now
                    </button>
                  </div>
                </div>
              </div>

              <div className="w-full h-auto md:w-1/2 flex justify-center md:pl-10 md:pt-9 absolute top-0 right-0 z-20">
                <img
                  className="max-w-full h-auto mt-[10vh]"
                  src={car}
                  alt="car_picture"
                />
              </div>
            </div>
            {CarGame && (
              <div className=" fixed inset-0 backdrop-blur-sm flex z-30 flex items-center justify-center">
                <div className="w-[40vw] h-[30vh] border border-slate-300 bg-slate-700 bg-opacity-80 rounded-lg">
                  <div
                    className="w-full h-1/5 flex justify-end px-4 py-5 text-white cursor-pointer"
                    onClick={() => {
                      setCarGame(false);
                    }}
                  >
                    X
                  </div>
                  <div className="w-full h-4/5 flex flex-col justify-center items-center pb-6 gap-7">
                    <form className="flex flex-col md:flex-row items-center gap-4">
                      <input
                        type="text"
                        placeholder="Enter room code"
                        className="border border-slate-200 rounded-lg py-2 px-4 md:py-3 md:px-6 text-lg md:text-xl text-slate-700 placeholder-slate-400 focus:outline-none focus:border-sky-500"
                        onChange={(e) => setCode(e.target.value)}
                      />
                      <button
                        type="submit"
                        className="border border-slate-200 rounded-lg py-2 px-4 md:py-3 md:px-6 text-lg md:text-xl text-slate-300 bg-slate-800 hover:bg-slate-700 transition-colors duration-300"
                        onClick={(e) => {
                          e.preventDefault();
                          console.log(code);
                          if (code) {
                            navigate("/gamePage", {
                              state: { roomCode: code, roomMaster: false },
                            });
                          } else {
                            //ganti
                            alert("GAK BOLEH KOSONG YA BIJI");
                          }
                        }}
                      >
                        Join Room
                      </button>
                    </form>

                    <div className="flex gap-7 mt-6">
                      <button className="border border-slate-200 rounded-lg py-2 px-4 md:py-3 md:px-6 text-lg md:text-xl mt-4 md:mt-0 text-slate-300 bg-slate-800 hover:bg-slate-700 transition-colors duration-300">
                        Create Room
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
