import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPhp,
  FaDatabase,
  FaJava,
  FaPython,
  FaAddressCard,
  FaLifeRing,
  FaToolbox,
  FaTable,
  FaGit,
  FaGitAlt,
  FaTools,
} from "react-icons/fa";
import { Fa0 } from "react-icons/fa6";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "PHP", icon: <FaPhp className="text-purple-600" /> },
  { name: "SQL", icon: <FaDatabase className="text-teal-500" /> },
  { name: "Java", icon: <FaJava className="text-red-500" /> },
  { name: "Python", icon: <FaPython className="text-blue-400" /> },
  {name: "Service Desk", icon:<FaTools className="text-green-500" />},
];

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen px-6 py-16 bg-gradient-to-b from-white to-gray-100 dark:from-gray-950 dark:to-gray-900 text-center"
    >
      <h2 className="text-4xl font-bold mb-8 text-blue-600">About Me</h2>

      {/* Bio Section */}
      <div
        className="max-w-4xl mx-auto text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-12 space-y-4"
        data-aos="fade-up"
      >
        <p>
          I'm <span className="text-blue-600 font-semibold">Simhadri Yerralaleppagari</span>, an MCA graduate from <span className="font-semibold">JNTU Anantapur</span> and a passionate <span className="text-blue-600 font-semibold">junior full stack developer</span>.
        </p>
        <p>
          I’m enthusiastic about crafting real-world solutions using frontend and backend technologies. I enjoy working with web stacks and exploring new tools that enhance user experience.
        </p>
        <p>
          I have a strong interest in <span className="text-yellow-600 font-semibold">Java</span> and <span className="text-purple-600 font-semibold">Object-Oriented Programming</span>. Solving problems is something I love doing to sharpen my skills and grow as a developer.
        </p>
        <p>
          Apart from coding, I enjoy <span className="text-green-600 font-semibold">going on long drives</span> and <span className="text-pink-500 font-semibold">watching movies</span> — both of which refresh and inspire me.
        </p>
      </div>

      {/* Skills Grid */}
      <h3 className="text-2xl font-semibold text-blue-500 mb-6">Tech Stack</h3>
      <div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
        data-aos="fade-up"
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow hover:shadow-xl transition transform hover:scale-105"
          >
            <div className="text-4xl mb-2">{skill.icon}</div>
            <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
