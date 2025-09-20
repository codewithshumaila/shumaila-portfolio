import React from "react";

function Projects() {
  const projectData = [
    {
      title: "Calculator",
      description: "A simple and responsive calculator built with HTML, CSS, and JavaScript.",
      link: "https://calculator-theta-dusky.vercel.app/", 
      image: "./src/assets/Calculator.png"
    },
    {
      title: "Chari Team Website Assignment",
      description: "A team project website built as an assignment to demonstrate collaborative web development.",
      link: "#",
      image: "https://images.unsplash.com/photo-1554306274-f23873d9a26c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvamVjdHMlMjBkZXZlbG9wZXJ8ZW58MHx8MHx8fDA%3D"
    },
    {
      title: "Book Library Store Assignment",
      description: "An assignment project to create an online book library store using React and JavaScript.",
      link: "#",
      image: "https://images.unsplash.com/photo-1554306274-f23873d9a26c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvamVjdHMlMjBkZXZlbG9wZXJ8ZW58MHx8MHx8fDA%3D"
    }
  ];

  return (
    <section
      id="projects"
      className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white body-font py-24"
    >
      <div className="container mx-auto px-5">
        <h2 className="text-5xl font-extrabold text-indigo-400 text-center mb-16">
          My Projects
        </h2>
        <div className="flex flex-wrap -m-4 justify-center">
          {projectData.map((project, index) => (
            <div key={index} className="p-4 md:w-1/3 flex flex-col items-center">
              <div className="w-full rounded-lg overflow-hidden shadow-lg bg-gray-800">
                <img
                  className="w-full h-48 object-cover"
                  src={project.image}
                  alt={project.title}
                />
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold mb-2 text-indigo-400">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 hover:bg-indigo-600 rounded-lg shadow-md"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
