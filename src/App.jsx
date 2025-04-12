import { useState } from "react";
import "./App.css";
import Welcome from "./components/Welcome";
import computer from "./assets/computer.svg";
import { quizData } from "./data";



function App() {
  const [counter, setCounter] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState({
    answer: "",
    id: null,
  });

  const handleAnswerClick = (answer, id) => {
    setSelectedAnswer({ answer, id });
    quizData.map(
      (data) =>
        data.correctAnswer !== answer &&
        data.id === id &&
        (setCounter(-1), setSelectedAnswer({ answer: "", id: null }))
    );
  };

  const handleNextClick = () => {
    setCounter(counter + 1);
  };

  return (
    <main className="w-full min-h-screen bg-[#212C42] flex flex-col justify-center items-center gap-y-5">
      {counter === 0 && <Welcome counter={counter} setCounter={setCounter} />}

      {counter === -1 && (
        <div className="flex flex-col justify-center items-center gap-y-5 ">
          <p className="text-3xl font-semibold text-white">❌ Mission Failed</p>
          <p className="text-xl font-medium text-slate-200">
            You are Failed in this quiz. Try Again
          </p>
          <button
            onClick={() => setCounter(1)}
            className="w-[150px] bg-red-400 hover:bg-red-500 text-white text-base font-semibold  py-2 rounded-lg transition cursor-pointer"
          >
            Retake
          </button>
        </div>
      )}

      {counter === quizData.length + 1 && (
        <div className="flex flex-col justify-center items-center gap-y-5">
          <p className="text-3xl text-green-500 font-semibold">
            🎉 Mission Accomplished!
          </p>
          <p className="text-xl text-white font-medium animate-pulse">
            {" "}
            🖥️ THM {"{computer_is_happy}"}
          </p>
        </div>
      )}

      {counter > 0 && counter <= quizData.length && (
        <>
          <div className="text-[#1153E4] font-bold text-3xl capitalize drop-shadow-2xl ">
            🤖🔧 Help the Computer
          </div>
          <div className="max-w-2xl w-full mx-auto max-h-[850px] flex flex-col justify-center items-center gap-y-8 bg-[#2c3e50] rounded-xl shadow-lg shadow-[#A3EA2A] p-8">
            <p className="w-full text-left font-bold text-base text-[#A3EA2A]">
              Question {counter} of {quizData.length}
            </p>
            {quizData.length > 0 &&
              quizData.map((data, index) => {
                data.answers.sort();
                return (
                  counter === index + 1 && (
                    <div
                      key={index}
                      className="flex flex-col justify-center items-center gap-y-8"
                    >
                      <h2 className="text-center text-2xl text-[#ecf0f1] font-semibold mb-4">
                        {data.question}
                      </h2>

                      <img
                        src={computer}
                        alt="computer image"
                        className="h-[300px] w-full object-fill"
                      />

                      <div className="w-full  flex justify-between items-center">
                        {data.answers.map((answer, i) => (
                          <p
                            key={i}
                            onClick={() => handleAnswerClick(answer, data.id)}
                            className={`
                              ${
                                answer === selectedAnswer.answer &&
                                data.id === selectedAnswer.id
                                  ? data.correctAnswer === selectedAnswer.answer
                                    ? "bg-green-500"
                                    : "bg-red-500"
                                  : "bg-[#34495e] hover:bg-[#3498db]"
                              }
                              w-[120px] h-[100px] flex justify-center items-center   text-lg text-[#ecf0f1] hover:text-white hover:scale-105 cursor-pointer rounded-md  transition-all duration-300 ease-in-out`}
                          >
                            {answer}
                          </p>
                        ))}
                      </div>
                    </div>
                  )
                );
              })}

            {counter === quizData.length ? (
              <button
                onClick={() => setCounter(counter + 1)}
                className="w-full bg-[#A3EA2A] hover:opacity-90 text-white text-base font-semibold  py-2 rounded-lg transition cursor-pointer"
              >
                Result
              </button>
            ) : (
              <button
                disabled={counter === quizData.length}
                onClick={handleNextClick}
                className="w-full bg-[#A3EA2A] hover:opacity-90 text-white text-base font-semibold  py-2 rounded-lg transition cursor-pointer"
              >
                Next
              </button>
            )}
          </div>
        </>
      )}
    </main>
  );
}

export default App;
