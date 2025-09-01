import React from 'react';
import { FaGithub, FaLinkedin, FaXTwitter, FaLayerGroup } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa";
import { HiOutlineSun } from "react-icons/hi";
import { HiOutlineMoon } from "react-icons/hi";
import avatar from "../assets/avatar.png";
import { NavLink } from "react-router-dom";
import PageTransition from "../Components/PageTransition";
import { useTheme } from '../Utils/ThemeContext';


const OpeningPage = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <PageTransition>
      <div className={`min-h-screen w-full flex flex-col font-sans bg-no-repeat ${isDark ? 'bg-black text-white bg-heroGlow' : 'bg-white text-black'}`}>
        {/* grid overlay */}
        <div className={`pointer-events-none fixed inset-0 -z-10 bg-grid ${isDark ? 'bg-[length:32px_32px]' : 'bg-[length:40px_40px]'} md:bg-[length:40px_40px]`} />

        {/* ---------- NAV ---------- */}
        <header className={`flex items-center justify-between px-4 sm:px-6 lg:px-32 py-3 border-b ${isDark ? 'border-white/10' : 'border-black/10'}`}>
          <h1 className="flex items-center gap-2 font-semibold text-base sm:text-lg">
            <FaLaptopCode className={`${isDark ? 'text-white' : 'text-black'}`} /> Parthiban.
          </h1>
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-md border hover:bg-opacity-10 ${isDark ? 'hover:bg-white/10 border-white' : 'hover:bg-black/10 border-black'}`}
          >
            {isDark ? <HiOutlineSun size={20} /> : <HiOutlineMoon size={20} />}
          </button>
        </header>

        {/* ---------- HERO ---------- */}
        <section id="home" className="flex-grow flex items-center justify-center">
          <div className="mx-auto flex max-w-7xl flex-col lg:flex-row items-center gap-10 sm:gap-12 px-4 sm:px-6 lg:px-8 ">
            {/* avatar */}
            <div className={`relative group w-72 sm:w-80 md:w-80 h-96 rounded-xl shadow-xl border backdrop-blur-md overflow-hidden
              transform hover:-translate-y-2 transition-all duration-500
              ${isDark ? 'bg-white/5 border-white/10' : 'bg-white/70 border-black/10'}`}
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-400 via-emerald-500 to-lime-400 opacity-30 blur-xl group-hover:opacity-60 transition"></div>
              <img src={avatar} alt="Parthiban avatar" className="relative z-10 w-full h-full object-contain bg-gradient-to-br from-gray-50/20 to-gray-200/10" />
            </div>
            {/* copy */}
            <div className={`text-center lg:text-left max-w-2xl ${isDark ? '' : 'text-black'}`}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                Hi, I'm{" "}
                <span className={`text-transparent bg-clip-text bg-gradient-to-r ${isDark ? 'from-accent via-lime-400 to-green-300' : 'from-green-700 via-green-900 to-green-700'}`}>
                  Parthiban
                </span>
                <br />
                <span className={`bg-clip-text text-transparent bg-gradient-to-r ${isDark ? 'from-green-200 via-emerald-400 to-green-200' : 'from-green-800 via-green-900 to-green-800'}`}>
                  Full Stack Developer
                </span>
              </h2>

              <p className={`mt-4 sm:mt-6 text-base sm:text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                I design and build clean, responsive, and engaging web applications.<br />
                Whether you’re launching a business platform or a personal project, I blend advanced <span className="font-semibold">React & MERN skills</span> with a passion for pixel-perfect UI.<br />
                Let’s create experiences that feel effortless, connected, and brilliantly modern.
              </p>

              {/* buttons */}
              <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <NavLink
                  to="/home"
                  className={`group flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-md border hover:bg-opacity-10 transition transform active:scale-95 hover:-translate-y-1 ${isDark ? 'border-white/20 hover:bg-white/10' : 'border-black/20 hover:bg-black/10'}`}
                >
                  <FaLayerGroup className="transition group-hover:-rotate-12" />
                  Unfold My Journey
                </NavLink>
              </div>

              {/* socials */}
              <div className={`mt-8 mb-10 sm:mb-0 sm:mt-10 flex items-center justify-center lg:justify-start gap-6 text-xl sm:text-2xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                <a href="https://github.com/Parthiban68" target="_blank" rel="noreferrer" className={`hover:${isDark ? 'text-white' : 'text-black'}`}>
                  <FaGithub />
                </a>
                <a href="https://linkedin.com/in/m-parthiban" target="_blank" rel="noreferrer" className={`hover:${isDark ? 'text-white' : 'text-black'}`}>
                  <FaLinkedin />
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noreferrer" className={`hover:${isDark ? 'text-white' : 'text-black'}`}>
                  <FaXTwitter />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default OpeningPage;
