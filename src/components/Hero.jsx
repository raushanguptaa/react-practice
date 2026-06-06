import React from "react";

const Hero = () => {
  return (
    <section className="bg-zinc-950 text-white min-h-screen pt-24">
      <div className="px-4 md:px-6 lg:px-8">
        <p className="text-red-500 text-lg mb-3">Hello, I'm</p>
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Nico Robin</h1>
        <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">Future AI/ML Developer</h2>
        <p className="text-gray-300 max-w-xl mb-8">
          I am learning React, Java, Python, and Machine Learning. I am build
          simple and clean projects to improve my development skill.
        </p>

        <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold">View Projects</button>

        <span className="pl-10"> <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold">Hire Me</button></span>
      </div>
    </section>
  );
};

export default Hero;
