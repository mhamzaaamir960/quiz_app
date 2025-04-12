import React from "react";

function Welcome({ counter , setCounter}) {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-y-5">
      {" "}
      <h1 className="text-4xl sm:text-6xl font-bold text-[#e74c3c]">
        🚀 Welcome to the Static Site Challenge!
      </h1>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-medium md:font-semibold text-[#3498db] animate-pulse">
        Test your protocol knowledge in this short, interactive quiz.
      </h2>
      <p className="max-w-[700px] text-center text-base sm:text-lg leading-relaxed text-[#ecf0f1]">
        Dive into this mini TryHackMe-style quiz where your mission is to
        identify different networking protocols. Answer all questions correctly…
        or start over.
      </p>
      <button
        onClick={() => setCounter(counter+1)}
        className="text-lg font-bold text-white bg-[#2ecc71] hover:bg-[#27ae60] rounded-lg p-2 cursor-pointer mt-5"
      >
        Start Challenge
      </button>
    </div>
  );
}

export default Welcome;
