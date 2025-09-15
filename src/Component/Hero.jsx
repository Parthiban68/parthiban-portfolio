import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { HiOutlineSun } from "react-icons/hi";
import { HiOutlineMoon } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { useTheme } from '../Utils/ThemeContext';
import { Link, Element } from 'react-scroll';
import toast from 'react-hot-toast';
import { FaReact, FaDatabase } from 'react-icons/fa';
import { FaLaptopCode, FaMobileAlt } from 'react-icons/fa';
import MeImg from "../assets/avatar.png";
import { motion } from 'framer-motion';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../components/ui/alert-dialog"

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
    <div className={`  ${isDark ? 'bg-black text-white' : 'bg-white text-black'}`}>
      {/* Navbar */}
      <nav className={`fixed w-full z-20 top-0 ${isDark ? '' : 'bg-white'}`}>
        <div className={`flex justify-between items-center px-6 sm:px-10 py-[1.55rem] sm:max-w-[80vw] mx-auto ${isDark ? 'bg-gradient-to-br from-black via-gray-800 to-black' : 'bg-gray-200'} rounded-b-md`}
        >
          <NavLink to="/">
            <h1 className={`font-semibold text-lg sm:text-xl font-mono ${isDark ? 'text-white' : 'text-black'}`}>
              <span className="text-[#00FF84]">Parthiban</span>.Dev
            </h1>
          </NavLink>

          {/* Desktop Nav Links */}
          <ul className={`hidden md:flex space-x-8 text-sm sm:text-base font-mono ${isDark ? 'text-white' : 'text-black'}`}>
            <Link to="about" smooth={true} duration={800} offset={-50} className="cursor-pointer">
              ABOUT ME
            </Link>
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
              <AlertDialog>
                <AlertDialogTrigger className="btn-primary">RESUME</AlertDialogTrigger>
                <AlertDialogContent className='bg-gradient-to-br from-black via-gray-800 to-black'>
                  <AlertDialogHeader>
                    <AlertDialogTitle className='text-xl font-bold'> Download Resume</AlertDialogTitle>
                    <AlertDialogDescription className='text-white/80 text-md'>
                      You are about to download <span className="text-white font-semibold">Parthiban Resume.pdf</span>.
                      This file will be saved to your device for offline access.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel className='bg-gray-950 hover:bg-white'>Cancel</AlertDialogCancel>
                    <AlertDialogAction className='text-white bg-black hover:text-black hover:bg-white border border-gray-200' onClick={() => downloadResume()}>Download</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
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
              {isDark ? <HiOutlineSun size={20} /> : <HiOutlineMoon size={20} />}
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
          <div className={`${isDark ? 'bg-[#0f0f0f]' : 'bg-gray-100'} md:hidden px-6 py-4 max-w-[90vw] mx-auto rounded-b-md shadow-lg font-mono`}>
            <ul className={`flex flex-col space-y-4 text-base ${isDark ? 'text-white' : 'text-black'}`}>
              <Link to="about" smooth={true} duration={800} offset={-50} className="cursor-pointer" onClick={() => setMenuOpen(false)}>
                ABOUT ME
              </Link>
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
      <div className='min-h-screen mt-10 sm:mt-20' >
        <section style={{ fontFamily: 'monospace' }} className={`text-center font-mono py-20 px-5 sm:px-10 bg-heroGlow bg-no-repeat ${isDark ? '' : 'bg-heroGlow-light'}`}
        >
          <h2 className={`text-3xl sm:text-4xl md:text-6xl font-bold leading-tight ${isDark ? 'text-white' : 'text-black'}`}
          >
            Innovative&nbsp;<br className="md:hidden" />
            <span className="text-[#00FF84]">Full-Stack Developer</span><br className="md:block" />
            <span className={isDark ? 'text-gray-300 text-2xl sm:text-5xl' : 'text-gray-700 text-4xl sm:text-5xl'}>
              Building Scalable APIs & Platforms
            </span>
          </h2>

          <p className={`text-lg sm:text-lg mt-4 max-w-2xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-800'}`}
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


        {/* <section className="relative px-4 py-10 md:py-10">
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
        </section> */}
        <Element name="about">
          <AboutMe />
        </Element>
      </div>
    </div>
  );
};


// const skills = [
//   { name: "FullStack Developer", icon: FaReact, color: "#61DAFB" },
//   { name: "FrontEnd Developer", icon: FaNodeJs, color: "#63CC66" },
//   { name: "Backend Developer", icon: SiPostgresql, color: "#336791" },
//   { name: "Mobile Developer", icon: SiJavascript, color: "#F7DF1E" },
// ];

// const AboutMe = () => {
//   const { theme } = useTheme();
//   const isDark = theme === "dark";

//   return (
//     <section className={`relative py-16 px-2 sm:px-4 md:px-4 max-w-6xl mx-auto text-center ${isDark ? 'bg-black' : 'bg-white'}`}>
//       <div className="absolute inset-x-0 top-0 flex justify-center z-0">
//         <div className="h-2 w-40 bg-gradient-to-r from-[#00FF84]/70 via-green-400/10 to-transparent blur-md rounded-b-lg animate-pulse" />
//       </div>

//       <div className={`flex flex-col md:flex-row items-center gap-8 p-10 rounded-3xl shadow-lg border ${isDark ? 'bg-gradient-to-br from-black via-gray-800 to-black  border-gray-400' : 'bg-gray-100'}`}>
//         <div className={`relative group w-72 sm:w-80 md:w-80 h-96 rounded-xl shadow-xl border backdrop-blur-md overflow-hidden
//                     transform hover:-translate-y-2 transition-all duration-500
//                     ${isDark ? 'bg-white/5 border-white/10' : 'bg-white/70 border-black/10'}`}
//         >
//           <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-400 via-emerald-500 to-lime-400 opacity-30 blur-xl group-hover:opacity-60 transition"></div>
//           <img src={MeImg} alt="Parthiban avatar" className="relative z-10 w-full h-full object-contain bg-gradient-to-br from-gray-50/20 to-gray-200/10" />
//         </div>
//         <div className="flex flex-col items-start w-full text-left">
//           <h2 className={`font-bold text-3xl sm:text-4xl mb-2 ${isDark ? 'text-white' : 'text-black'}`}>About Me</h2>
//           <p className={`text-base sm:text-lg max-w-lg ${isDark ? 'text-gray-300' : 'text-gray-700'} mb-5`}>
//             Hi! <span role="img" aria-label="wave">👋</span> I’m Parthiban, a <b>passionate full-stack developer</b> who loves turning ideas into scalable digital solutions—fast and beautifully.<br />
//             Outside of code, you’ll find me learning new tools, collaborating on projects, or enjoying a good <strong>problem-solving</strong> challenge. My mission? Keep building, keep growing, and help teams ship products users cherish.
//           </p>
//           <ul className="flex flex-wrap gap-4 justify-start mt-2">
//             {skills.map(({ name, icon: Icon, color }) => (
//               <li key={name} className="flex items-center gap-2 bg-gray-200 dark:bg-gray-800 px-3 py-1 rounded-lg shadow text-sm font-medium">
//                 <Icon size={20} style={{ color }} /> <span>{name}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </section>

//   );
// };
// import React from 'react';

const skills = [
  { name: "Full-Stack Developer", icon: FaLaptopCode, color: "#61DAFB" },
  { name: "Front-End Developer", icon: FaReact, color: "#61DAFB" },
  { name: "Back-End Developer", icon: FaDatabase, color: "#336791" },
  { name: "Mobile Developer", icon: FaMobileAlt, color: "#F7DF1E" },
];

const AboutMe = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section className={`relative py-16 px-2 sm:px-4 md:px-4 max-w-6xl mx-auto text-center mt-0 sm:mt-16 ${isDark ? 'bg-black' : 'bg-white'}`}>
      <div className="absolute inset-x-0 top-0 flex justify-center z-0">
        <div className="h-2 w-40 bg-gradient-to-r from-[#00FF84]/70 via-green-400/10 to-transparent blur-md rounded-b-lg animate-pulse" />
      </div>
      <motion.div
        className="max-w-7xl mx-auto text-center mb-16 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <h2 className={`text-5xl font-extrabold mb-4 tracking-wider uppercase drop-shadow-lg ${isDark ? 'text-white' : 'text-black'}`}>
          ABOUT ME
        </h2>
        <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          I love transforming ideas into impactful digital solutions — blending clean code, modern design, and scalable architecture to craft applications that truly make a difference.
        </p>

      </motion.div>
      <div className={`flex flex-col md:flex-row items-center gap-8 p-10 rounded-3xl shadow-lg border ${isDark ? 'bg-gradient-to-br from-black via-gray-800 to-black border-gray-400' : 'bg-gray-100 border-gray-300'}`}>
        <div className={`relative group w-72 sm:w-80 md:w-96 h-96 rounded-xl shadow-xl border backdrop-blur-md overflow-hidden
                        transform hover:-translate-y-2 transition-all duration-500
                        ${isDark ? 'bg-white/5 border-white/10' : 'bg-white/70 border-black/10'}`}>
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-400 via-emerald-500 to-lime-400 opacity-30 blur-xl group-hover:opacity-60 transition"></div>
          <img
            src={MeImg}
            alt="Parthiban avatar"
            className="relative z-10 w-full h-full object-contain bg-gradient-to-br from-gray-50/20 to-gray-200/10"
          />
        </div>
        <div className="flex flex-col items-start w-full text-left">
          {/* <h2 className={`font-bold text-3xl sm:text-4xl mb-2 ${isDark ? 'text-white' : 'text-black'}`}>About Me</h2> */}
          <p className={`text-base sm:text-lg max-w-3xl ${isDark ? 'text-gray-300' : 'text-gray-700'} mb-5 leading-relaxed`}>
            Hi! I’m Parthiban, a passionate Full-Stack Developer with professional experience in building scalable, secure, and production-grade applications. I specialize in crafting performant APIs, responsive frontends, and real-time integrations that deliver seamless digital experiences.

            <br /><br />

            At Nubiznez Private Limited, I contributed to TBS_WEB and TBS_CRM, where I improved overall system performance by 40% through backend optimizations, reduced database latency by 25% with efficient query design, and enabled 70% faster customer updates by integrating PDF ticketing with real-time notifications via WhatsApp, email, and Firebase. I also enhanced user experience and cut page load times by 30% with modern frontend development using React.js and Tailwind CSS.

            <br /><br />

            Beyond coding, I value collaboration, continuous learning, and creative problem-solving. My mission is to deliver high-quality software that empowers users while continuously growing as a developer by embracing new technologies and tackling challenging projects.
          </p>
          {/* Skill Badges */}
          <ul className="flex flex-wrap gap-4 justify-start mt-2">
            {skills.map(({ name, icon: Icon, color }) => (
              <li key={name} className={`flex items-center gap-2 ${isDark ? 'bg-gray-800' : 'bg-gray-200'} px-3 py-1 rounded-lg shadow text-sm font-medium`}>
                <Icon size={20} style={{ color }} aria-hidden="true" /> <span>{name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};


export default Hero;