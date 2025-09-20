import React from "react";

function Herocomponent() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center text-white overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover filter blur-sm brightness-50"
      />
      <div className="relative z-10 text-center px-4">
        <h1 className="text-6xl font-extrabold text-indigo-600 mb-4">
          Hi, I’m Shumaila Riaz
        </h1>
        <p className="text-3xl text-gray-300 mb-8 px-4">
          Aspiring Web Developer | Turning ideas into interactive designs
        </p>
        <a href="#about">
          <button className="text-white bg-indigo-500 hover:bg-indigo-600 px-6 py-2 rounded-lg shadow-md text-lg transition duration-300">
            Learn More
          </button>
        </a>
      </div>
    </section>
  );
}

export default Herocomponent;
