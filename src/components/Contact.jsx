import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen px-6 py-16 bg-gray-100 dark:bg-gray-900 text-center">
      <h2 className="text-3xl font-bold mb-8 text-blue-600">Get in Touch</h2>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md text-left">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Contact Information</h3>
          <div className="flex items-center gap-4 mb-3 text-gray-700 dark:text-gray-300">
            <FaEnvelope className="text-blue-500" />
            <span>simhadriyerralaleppagari@gmail.com</span>
          </div>
          <div className="flex items-center gap-4 mb-3 text-gray-700 dark:text-gray-300">
            <FaLinkedin className="text-blue-500" />
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              LinkedIn Profile
            </a>
          </div>
          <div className="flex items-center gap-4 mb-3 text-gray-700 dark:text-gray-300">
            <FaGithub className="text-gray-800 dark:text-white" />
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              GitHub Profile
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form
          action="https://formspree.io/f/your-id-here"  // replace with your Formspree or Netlify form URL
          method="POST"
          className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md"
        >
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Send a Message</h3>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full mb-4 p-3 rounded bg-gray-100 dark:bg-gray-700 dark:text-white outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full mb-4 p-3 rounded bg-gray-100 dark:bg-gray-700 dark:text-white outline-none"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            required
            className="w-full mb-4 p-3 rounded bg-gray-100 dark:bg-gray-700 dark:text-white outline-none"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
