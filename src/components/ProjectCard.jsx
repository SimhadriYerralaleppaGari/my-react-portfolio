import React from "react";

const ProjectCard = ({ title, description, link, tech }) => {
  return (
    <div className="border rounded-xl p-5 shadow-md bg-white dark:bg-gray-800 transition">
      <h3 className="text-xl font-semibold text-blue-600 mb-2">{title}</h3>
      <p className="text-sm mb-3">{description}</p>
      <div className="flex flex-wrap gap-2 mb-3">
        {tech.map((item, index) => (
          <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
            {item}
          </span>
        ))}
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-sm text-blue-500 hover:underline"
      >
        View Project →
      </a>
    </div>
  );
};

export default ProjectCard;
