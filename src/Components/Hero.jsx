import React from 'react';
import { FaMoon, FaSun } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { useTheme } from '../Utils/ThemeContext'; // Adjust path as needed

const Hero = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className={`min-h-screen font-mono ${
      isDark ? 'bg-black text-white' : 'bg-white text-black'}`}
    >
      {/* Navbar */}
      <nav>
        <div className={`flex justify-between items-center px-10 py-6 max-w-[70vw] mx-auto ${
          isDark ? 'bg-[#0f0f0f]' : 'bg-gray-100'}`}
        >
          <NavLink to="/">
            <h1 className={`font-semibold text-lg ${
              isDark ? 'text-white' : 'text-black'}`}
            >
              <span className="text-[#00FF84]">Parthiban</span>.DEV
            </h1>
          </NavLink>
          <ul className={`hidden md:flex space-x-8 text-sm ${
            isDark ? 'text-white' : 'text-black'}`}
          >
            <li>ABOUT ME</li>
            <li>TECK STACK</li>
            <li>EXPERIENCE</li>
            <li>PROJECTS</li>
            <li>RESUME</li>
          </ul>

          {/* Theme toggle button */}
          <button
            onClick={toggleTheme}
            className={`border px-4 py-1 rounded text-xs transition ${
              isDark
                ? 'border-white hover:bg-white hover:text-black'
                : 'border-black hover:bg-black hover:text-white'}`}
            aria-label="Toggle dark/light theme"
          >
            {isDark ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={`text-center py-20 px-5 bg-heroGlow bg-no-repeat ${
        isDark ? '' : 'bg-heroGlow-light'}`}
      >
        <h2 className={`text-3xl md:text-6xl font-bold leading-tight ${
          isDark ? 'text-white' : 'text-black'}`}
        >
          Passionate&nbsp;
          <span className="text-[#00FF84]">Full‑Stack Developer</span><br className="hidden md:block" />
          <span className={isDark ? 'text-gray-300 text-5xl' : 'text-gray-700 text-5xl'}>
            Crafting Scalable Microservices
          </span>
        </h2>

        <p className={`text-lg mt-4 max-w-2xl mx-auto ${
          isDark ? 'text-gray-400' : 'text-gray-800'}`}
        >
          I'm Parthiban — a MERN Stack + Backend developer with a strong foundation in microservices, PostgreSQL,
          and modern backend architecture. Currently working at XYZ as a backend engineer, building production-grade APIs and scalable systems.
        </p>

        <div className="flex justify-center gap-6 mt-10">
          <NavLink
            to="/projects"
            className="bg-[#00FF84] text-black font-medium px-5 py-2 text-sm rounded shadow hover:bg-[#00e674] transition"
          >
            💻 VIEW PROJECTS
          </NavLink>
          <NavLink
            to="/contact"
            className={`${isDark ?'border border-white px-5 py-2 text-sm rounded hover:bg-white hover:text-black transition': "bg-white text-black font-medium px-5 py-2 text-sm rounded shadow hover:text-white transition border border-black hover:bg-black" }`}
          >
            ✉️ CONTACT ME
          </NavLink>
        </div>
      </section>

      {/* Code Editor Mockup */}
      <section className="relative px-4 py-10 md:py-10">
        <div className={`max-w-3xl mx-auto rounded-lg overflow-hidden shadow-lg border px-4 py-6 font-mono text-sm ${
          isDark ? 'bg-[#1b1b1b] border-gray-700 text-green-300' : 'bg-gray-100 border-gray-300 text-green-900'}`}
        >
          <div className={`flex items-center space-x-2 px-4 py-2 border-b ${
            isDark ? 'bg-[#111] border-gray-700' : 'bg-gray-200 border-gray-300'}`}
          >
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className={`ml-4 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              TheProgrammer
            </span>
          </div>
          <pre className="p-6 whitespace-pre-wrap">
{`💫 About Me:
👋 Hi, I’m @Parthiban68

👀 Passionate about Full Stack Development with a focus on MERN stack
🌱 Currently diving into Java to broaden my coding horizons
💞️ Open to collaborating on exciting web projects and tech challenges
📫 Reach out to me via parthibanm1268@gmail.com
😄 Pronouns: He/Him
⚡ Fun fact: I love solving coding puzzles and often use them as a break from coding!`}
          </pre>
        </div>
      </section>
    </div>
  );
};

export default Hero;
