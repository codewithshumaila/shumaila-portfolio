import React from 'react'

function About() {
  return (
    <section
      id="about"
      className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white body-font py-24"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-45">
        <div className="md:w-1/3 flex flex-col items-center md:items-start mb-12 md:mb-0">
          <img
            className="w-64 h-64 rounded-full shadow-lg border-4 border-indigo-400 mb-4"
            alt="Shumaila Riaz"
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2ViJTIwZGV2ZWxvcGVyfGVufDB8fDB8fHww"
          />
          <a
            href="./src/assests/Shumaila Riaz CV.pdf"
            download
            className="mt-4 inline-flex text-white bg-indigo-500 border-0 py-2 ml-7 px-6 focus:outline-none hover:bg-indigo-600 rounded-lg text-lg shadow-md transition duration-300"
          >
            Download Resume
          </a>
        </div>
        <div className="md:w-2/3 md:pl-12 text-center md:text-left">
          <h2 className="text-5xl font-extrabold text-indigo-400 mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-300 mb-6 leading-relaxed">
            Hello! I’m <span className="font-semibold text-indigo-400">Shumaila Riaz</span>, an aspiring Web Developer transitioning from Zoology. I enjoy creating modern, responsive, and interactive websites that leave a lasting impression.
          </p>
          <p className="text-gray-300 mb-6">
            I’m continuously learning and improving my skills in HTML, CSS, JavaScript, React, and Tailwind CSS. My goal is to transform ideas into beautiful digital experiences.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-200">
            <p><span className="font-semibold text-indigo-400">Name:</span> Shumaila Riaz</p>
            <p><span className="font-semibold text-indigo-400">Date of Birth:</span> 21 December 1999</p>
            <p><span className="font-semibold text-indigo-400">Nationality:</span> Pakistani</p>
            <p><span className="font-semibold text-indigo-400">Location:</span> Lahore, Pakistan</p>
            <p><span className="font-semibold text-indigo-400">Email:</span> shumailariaz215@gmail.com</p>
            <p><span className="font-semibold text-indigo-400">Phone:</span> +92-301-4555946</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
