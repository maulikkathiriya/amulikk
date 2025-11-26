 import { useState } from "react";
 
 function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      desc: "A personal portfolio website built with Html and Css.",
    },
    {
      title: "E-commerce Store",
      desc: "React-based online store with cart and product filters.",
    },
    {
      title: "Blog Platform",
      desc: "Full-stack blog platform with React frontend and Node.js backend.",
    },
  ];

  return (
    <section id="projects" className="px-8 py-20 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow hover:scale-105 transform transition"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-400">{project.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
