import React from 'react';

function Interests() {
  return (
    <section id="interests" className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white body-font py-24">
      <div className="container mx-auto px-5">
        <h2 className="text-5xl font-extrabold text-indigo-400 mb-12 text-center">
          My Interests
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="w-40 h-40 bg-gray-800 rounded-xl shadow-lg flex flex-col items-center justify-center hover:scale-105 transform transition duration-300">
            <img 
              src="https://img.icons8.com/ios-filled/60/ffffff/musical-notes.png" 
              alt="Music" 
              className="mb-2"
            />
            <h3 className="text-xl font-semibold">Music</h3>
          </div>
          <div className="w-40 h-40 bg-gray-800 rounded-xl shadow-lg flex flex-col items-center justify-center hover:scale-105 transform transition duration-300">
            <img 
              src="https://img.icons8.com/ios-filled/60/ffffff/reading.png" 
              alt="Reading" 
              className="mb-2"
            />
            <h3 className="text-xl font-semibold">Reading</h3>
          </div>
        <div className="w-40 h-40 bg-gray-800 rounded-xl shadow-lg flex flex-col items-center justify-center hover:scale-105 transform transition duration-300">
  <img 
    src="https://img.icons8.com/ios-filled/60/ffffff/pen.png" 
    alt="Poetry" 
    className="mb-2"
  />
  <h3 className="text-xl font-semibold">Poetry</h3>
</div>
        </div>
      </div>
    </section>
  )
}

export default Interests;
