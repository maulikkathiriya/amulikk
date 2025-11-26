
import { useState } from "react";

function Hero(){
    return(
         <section className="h-screen flex flex-col justify-center items-center text-center px-6 bg-gray-900">
      <h1 className="text-5xl font-bold mb-4">
        Hi, I'm <span className="text-blue-400">maulik kathiriya</span>
      </h1>
      <p className="text-lg text-gray-300 max-w-xl">
        I am a frontend developer specializing in Html5,Css,JavaScrpt React and TailwindCSS.
      </p>
      <a
        href="#projects"
        className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-md transition"
      >
        View My Work
      </a>
    </section>
    )
}

export default Hero;