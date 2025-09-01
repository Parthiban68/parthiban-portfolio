import React, { useState } from 'react';
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useTheme } from '../Utils/ThemeContext';
import { Link } from 'react-scroll';
import toast from 'react-hot-toast';

const Hero = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle mobile menu open/close
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const downloadResume = () => {
    const downloadPromise = new Promise((resolve) => {
      setTimeout(() => {
        const link = document.createElement('a');
        link.href = '/resume.pdf';
        link.download = 'Parthiban_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        resolve();
      }, 3000);
    });

    toast.promise(
      downloadPromise,
      {
        loading: (
          <span className="flex items-center gap-2">
            Downloading...
          </span>
        ),
        success: 'Download successful!',
        error: 'Download failed. Please try again.',
      },
      {
        position: 'top-center',
      }
    );
  };

  return (
    <div className={` font-mono ${isDark ? 'bg-black text-white' : 'bg-white text-black'}`}>
      {/* Navbar */}
      <nav className={`fixed w-full z-20 top-0 ${isDark ? '' : 'bg-white'}`}>
        <div className={`flex justify-between items-center px-6 sm:px-10 py-[1.55rem] sm:max-w-[80vw] mx-auto ${isDark ? 'bg-gray-900' : 'bg-gray-200'} rounded-b-md`}
        >
          <NavLink to="/">
            <h1 className={`font-semibold text-lg sm:text-xl ${isDark ? 'text-white' : 'text-black'}`}>
              <span className="text-[#00FF84]">Parthiban</span>.DEV
            </h1>
          </NavLink>

          {/* Desktop Nav Links */}
          <ul className={`hidden md:flex space-x-8 text-sm sm:text-base ${isDark ? 'text-white' : 'text-black'}`}>
            <Link to="tech" smooth={true} duration={800} offset={-50} className="cursor-pointer">
              TECH STACK
            </Link>
            <Link to="experience" smooth={true} duration={800} offset={-50} className="cursor-pointer">
              EXPERIENCE
            </Link>
            <Link to="projects" smooth={true} duration={800} offset={-50} className="cursor-pointer">
              PROJECTS
            </Link>
            <Link to="contactus" smooth={true} duration={800} offset={-50} className="cursor-pointer">
              CONTACT US
            </Link>
            <div>
              <button onClick={downloadResume} className="btn-primary">
                RESUME
              </button>
            </div>
          </ul>

          {/* Theme toggle & mobile menu button container */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className={`border px-3 py-1 rounded text-xs transition ${isDark
                ? 'border-white hover:bg-white hover:text-black'
                : 'border-black hover:bg-black hover:text-white'}`}
              aria-label="Toggle dark/light theme"
            >
              {isDark ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>

            {/* Mobile menu toggle button */}
            <button
              onClick={toggleMenu}
              className={`md:hidden focus:outline-none ${isDark ? 'text-white' : 'text-black'}`}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div className={`${isDark ? 'bg-[#0f0f0f]' : 'bg-gray-100'} md:hidden px-6 py-4 max-w-[90vw] mx-auto rounded-b-md shadow-lg`}>
            <ul className={`flex flex-col space-y-4 text-base ${isDark ? 'text-white' : 'text-black'}`}>
              <Link to="tech" smooth={true} duration={800} offset={-50} className="cursor-pointer" onClick={() => setMenuOpen(false)}>
                TECH STACK
              </Link>
              <Link to="experience" smooth={true} duration={800} offset={-50} className="cursor-pointer" onClick={() => setMenuOpen(false)}>
                EXPERIENCE
              </Link>
              <Link to="projects" smooth={true} duration={800} offset={-50} className="cursor-pointer" onClick={() => setMenuOpen(false)}>
                PROJECTS
              </Link>
              <Link to="contactus" smooth={true} duration={800} offset={-50} className="cursor-pointer" onClick={() => setMenuOpen(false)}>
                CONTACT US
              </Link>
              <div>
                <button onClick={() => {
                  setMenuOpen(false);
                  downloadResume();
                }}
                  className="btn-primary">
                  RESUME
                </button>
              </div>
            </ul>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className='min-h-screen mt-6 sm:mt-20'>
        <section className={`text-center py-20 px-5 sm:px-10 bg-heroGlow bg-no-repeat ${isDark ? '' : 'bg-heroGlow-light'}`}
        >
          <h2 className={`text-2xl sm:text-4xl md:text-6xl font-bold leading-tight ${isDark ? 'text-white' : 'text-black'}`}
          >
            Innovative&nbsp;
            <span className="text-[#00FF84]">Full-Stack Developer</span><br className="hidden md:block" />
            <span className={isDark ? 'text-gray-300 text-4xl sm:text-5xl' : 'text-gray-700 text-4xl sm:text-5xl'}>
              Building Scalable APIs & Platforms
            </span>
          </h2>

          <p className={`text-base sm:text-lg mt-4 max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-800'}`}
          >
            Hi, I'm Parthiban — a Full Stack Developer with 8 months of experience in Node.js, Express, PostgreSQL,
            and React.js. I specialize in crafting secure, scalable microservices and intuitive UIs, with proven
            success in optimizing performance and delivering seamless user experiences.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-10 max-w-md mx-auto sm:max-w-none">
            <Link to="projects" smooth={true} duration={800} offset={-50} className="cursor-pointer bg-[#00FF84] text-black font-medium px-5 py-2 text-sm rounded shadow hover:bg-[#00e674] transition text-center">
              💻 VIEW PROJECTS
            </Link>
            <Link to="contactus" smooth={true} duration={800} offset={-50} className={`${isDark
              ? 'border border-white px-5 py-2 text-sm rounded hover:bg-white hover:text-black transition text-center'
              : 'bg-white text-black font-medium px-5 py-2 text-sm rounded shadow hover:text-white transition border border-black hover:bg-black'
              } cursor-pointer`}
            >
              ✉️ CONTACT ME
            </Link>
          </div>
        </section>


        {/* Code Editor Mockup */}
        <section className="relative px-4 py-10 md:py-10">
          <div className={`max-w-3xl mx-auto rounded-lg overflow-hidden shadow-lg border px-4 py-6 font-mono text-sm ${isDark ? 'bg-[#1b1b1b] border-gray-700 text-green-300' : 'bg-gray-100 border-gray-300 text-green-900'}`}
          >
            <div className={`flex items-center space-x-2 px-4 py-2 border-b ${isDark ? 'bg-[#111] border-gray-700' : 'bg-gray-200 border-gray-300'}`}
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
    </div>
  );
};

export default Hero;
