import React from "react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section
      className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 flex flex-col md:flex-row items-center justify-center px-6 py-20 gap-10 text-center md:text-left"
      id="home"
    >
      <div
        className="w-44 h-44 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-blue-600 shadow-2xl transform hover:scale-105 transition duration-300"
        data-aos="zoom-in"
      >
        <img
          src="/profile.jpg"
          alt="Simhadri Profile"
          className="w-full h-full object-cover"
        />
      </div>

      <div data-aos="fade-up">
        <h1 className="text-4xl md:text-6xl font-extrabold text-blue-600 mb-4 leading-tight">
          Simhadri Yerralaleppagari
        </h1>

        <TypeAnimation
          sequence={[
            "Junior Full Stack Developer",
            2000,
            "Frontend Learner",
            2000,
            "PHP & MySQL Enthusiast",
            2000,
          ]}
          wrapper="span"
          speed={50}
          className="block text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-4"
          repeat={Infinity}
        />

        <p className="max-w-lg text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          Passionate about transforming ideas into responsive web experiences through full stack development.
          <br />
          I love coding, learning new technologies, and solving real-world problems with innovative solutions.
        </p>

        <p className="mt-4 italic text-sm text-gray-500 dark:text-gray-400">
          Code. Create. Learn. Repeat.
        </p>

        <div className="mt-6">
          <a
            href="/Simhadri_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md shadow-lg transition duration-300"
          >
            View Resume
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12H9m6 4H9m6-8H9m12 8V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2h9l5-5z"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
