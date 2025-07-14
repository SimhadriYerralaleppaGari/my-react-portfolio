import React from "react";
import projectsData from "../data/projectsData";

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen px-6 py-16 bg-gray-50 dark:bg-gray-900 text-center">
      <h2 className="text-3xl font-bold mb-10 text-blue-600">My Projects</h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition transform hover:-translate-y-1"
          >
            <h3 className="text-xl font-semibold text-blue-500 mb-2">{project.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4 justify-center">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-blue-100 dark:bg-blue-700/30 text-blue-700 dark:text-blue-200 text-xs px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex justify-center gap-4 mt-4">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm transition"
              >
                Live Demo
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white px-4 py-2 rounded-md text-sm transition"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
