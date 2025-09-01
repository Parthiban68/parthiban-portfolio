// import React from 'react';
// import { FaGithub } from 'react-icons/fa';
// import { motion } from 'framer-motion';
// import { useTheme } from '../Utils/ThemeContext'; // Adjust path

// const projects = [
//   {
//     title: 'Portfolio Website',
//     description: 'Responsive portfolio built with React, Tailwind CSS, and Framer Motion for animations.',
//     imageUrl: 'https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=800&q=80',
//     gitLink: 'https://github.com/yourusername/portfolio',
//   },
//   {
//     title: 'E-Commerce Store',
//     description: 'Full-stack MERN e-commerce website supporting payment integration and user accounts.',
//     imageUrl: 'https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=800&q=80',
//     gitLink: 'https://github.com/yourusername/ecommerce-store',
//   },
//   {
//     title: 'Chat Application',
//     description: 'Real-time chat application leveraging Socket.IO and React Context API.',
//     imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
//     gitLink: 'https://github.com/yourusername/chat-app',
//   },
//   {
//     title: 'Blog Platform',
//     description: 'CMS-style blogging platform with markdown support and rich text editing.',
//     imageUrl: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=800&q=80',
//     gitLink: 'https://github.com/yourusername/blog-platform',
//   },
// ];

// const containerVariants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.25,
//       delayChildren: 0.3,
//     }
//   },
// };

// const cardVariants = {
//   hidden: { opacity: 0, y: 60 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { type: 'spring', stiffness: 180, damping: 25 },
//   },
// };

// const ProjectsPage = () => {
//   const { theme } = useTheme();
//   const isDark = theme === 'dark';

//   return (
//     <section className={`${isDark ? 'bg-black' : 'bg-white'} sm:max-h-screen min-h-csreen py-20 px-6 transition-colors duration-700`}>
//       {/* Heading */}
//       <div className="max-w-7xl mx-auto text-center mb-16 px-4 sm:px-6 lg:px-8">
//         <motion.h1
//           initial={{ opacity: 0, y: -40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, ease: 'easeOut' }}
//           className={`text-5xl sm:text-5xl md:text-5xl font-extrabold tracking-wide ${
//             isDark ? 'text-white' : 'text-black'
//           }`}
//         >
//           Projects
//         </motion.h1>
//         <p className={`mt-4 text-lg max-w-3xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
//           Some of my recent work showcasing skills and creativity.
//         </p>
//       </div>

//       {/* Projects Grid */}
//       <motion.div
//         className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.3 }}
//         variants={containerVariants}
//       >
//         {projects.map(({ title, description, imageUrl, gitLink }, idx) => (
//           <motion.article
//             key={idx}
//             variants={cardVariants}
//             className={`relative bg-gradient-to-b from-gray-900 via-gray-800 to-black rounded-3xl cursor-pointer shadow-black/50 shadow-lg transition-all duration-500 transform perspective-1000
//               hover:rotate-y-3 hover:scale-105
//               border border-transparent hover:border-green-400`}
//             tabIndex={0}
//             aria-label={`Project titled ${title}`}
//           >
//             {/* Image Container */}
//             <div className="overflow-hidden rounded-t-3xl w-full h-48">
//               <img
//                 src={imageUrl}
//                 alt={title}
//                 loading="lazy"
//                 className="object-cover w-full h-full transition-transform duration-500 brightness-90 hover:brightness-110"
//               />
//             </div>

//             {/* Content */}
//             <div className="p-6 flex flex-col h-[180px] justify-between">
//               <h2 className="text-white font-bold text-xl truncate">{title}</h2>
//               <p className="text-gray-300 text-sm mt-2 truncate">{description}</p>

//               <a
//                 href={gitLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-2 text-green-400 hover:text-green-500 font-semibold mt-4 no-underline self-start"
//                 aria-label={`View GitHub repository for ${title}`}
//               >
//                 <FaGithub size={20} /> View Code
//               </a>
//             </div>

//             {/* Accent Line */}
//             {/* <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 via-lime-400 to-green-300 rounded-b-3xl pointer-events-none" /> */}
//           </motion.article>
//         ))}
//       </motion.div>
//     </section>
//   );
// };

// export default ProjectsPage;

// import React from 'react';
// import { FaGithub } from 'react-icons/fa';
// import { motion } from 'framer-motion';
// import { useTheme } from '../Utils/ThemeContext';

// const projects = [
//   {
//     title: 'Portfolio Website',
//     description: 'Responsive portfolio built with React, Tailwind CSS, and Framer Motion for animations.',
//     imageUrl: 'https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=800&q=80',
//     gitLink: 'https://github.com/yourusername/portfolio',
//   },
//   {
//     title: 'E-Commerce Store',
//     description: 'Full-stack MERN e-commerce website supporting payment integration and user accounts.',
//     imageUrl: 'https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=800&q=80',
//     gitLink: 'https://github.com/yourusername/ecommerce-store',
//   },
//   {
//     title: 'Chat Application',
//     description: 'Real-time chat application leveraging Socket.IO and React Context API.',
//     imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
//     gitLink: 'https://github.com/yourusername/chat-app',
//   },
//   {
//     title: 'Blog Platform',
//     description: 'CMS-style blogging platform with markdown support and rich text editing.',
//     imageUrl: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=800&q=80',
//     gitLink: 'https://github.com/yourusername/blog-platform',
//   },
// ];

// const containerVariants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.25,
//       delayChildren: 0.3,
//     },
//   },
// };

// const cardVariants = {
//   hidden: { opacity: 0, y: 60 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { type: 'spring', stiffness: 180, damping: 25 },
//   },
// };

// const ProjectsPage = () => {
//   const { theme } = useTheme();
//   const isDark = theme === 'dark';

//   const gridClasses = [
//     'col-span-2 row-span-4',              // div1
//     'col-span-3 row-span-4 col-start-3',  // div6
//     'col-span-3 row-span-4 col-start-1 row-start-5', // corrected div7 placement
//     'col-span-2 row-span-4 col-start-4 row-start-5', // div8
//   ];

//   return (
//     <section className={`${isDark ? 'bg-black' : 'bg-white'} min-h-screen py-20 px-6 transition-colors duration-700`}>
//       {/* Heading */}
//       <div className="max-w-7xl mx-auto text-center mb-16 px-4 sm:px-6 lg:px-8">
//         <motion.h1
//           initial={{ opacity: 0, y: -40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, ease: 'easeOut' }}
//           className={`text-5xl font-extrabold tracking-wide ${isDark ? 'text-white' : 'text-black'}`}
//         >
//           Projects
//         </motion.h1>
//         <p className={`mt-4 text-lg max-w-3xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
//           Some of my recent work showcasing skills and creativity.
//         </p>
//       </div>

//       {/* Project Grid */}
//       <motion.div
//         className="grid grid-cols-5 grid-rows-8 gap-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.3 }}
//         variants={containerVariants}
//       >
//         {projects.map((project, idx) => (
//           <motion.article
//             key={idx}
//             variants={cardVariants}
//             className={`${gridClasses[idx]} relative rounded-2xl cursor-pointer shadow-black/50 shadow-lg transition-transform duration-400 transform perspective-1000
//               border-2 brightness-75 hover:brightness-110
//               ${isDark ? 'border-gray-700 bg-gray-900' : 'border-gray-300 bg-gray-50'}
//               hover:-translate-y-2 hover:border-gray-300 
//             p-6 flex flex-col justify-between`}
//             tabIndex={0}
//             aria-label={`Project titled ${project.title}`}
//           >
//             {/* Image */}
//             <div className="overflow-hidden w-full h-48">
//               <img
//                 src={project.imageUrl}
//                 alt={project.title}
//                 loading="lazy"
//                 className="object-cover w-full h-full transition-transform duration-500  "
//               />
//             </div>

//             {/* Content */}
//             <h2 className={`${isDark ? 'text-white' : 'text-black'} font-bold text-xl truncate mt-6`}>
//               {project.title}
//             </h2>
//             <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} text-sm mt-2 truncate`}>
//               {project.description}
//             </p>

//             <a
//               href={project.gitLink}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-2 text-green-400 hover:text-green-500 font-semibold mt-4 no-underline self-start"
//               aria-label={`View GitHub repository for ${project.title}`}
//             >
//               <FaGithub size={20} /> View Code
//             </a>
//           </motion.article>
//         ))}
//       </motion.div>
//     </section>
//   );
// };

// export default ProjectsPage;

// import React from 'react';
// import { FaGithub } from 'react-icons/fa';
// import { motion } from 'framer-motion';
// import { useTheme } from '../Utils/ThemeContext';
// import { Element } from 'react-scroll';
// import TBS_WEB from "../assets/TBS_WEB.png";
// import TBS_CRM from "../assets/TBS_CRM.png";

// const projects = [
//   {
//     title: 'TheBusstand.com',
//     description: 'thebusstand.com is a scalable online bus ticket booking platform designed to simplify intercity travel. It enables users to search, compare, and book bus tickets with real-time seat availability, digital ticket generation, and instant notifications.',
//     imageUrl: TBS_WEB,
//     gitLink: 'thebusstand.com',
//   },
//   {
//     title: 'TheBusstand.com CRM',
//     description: 'crm.thebusstand.com is a comprehensive CRM system built to streamline bus operator, client, and partner management. It enables operators to manage buses, routes, employees, offers, and cancellations efficiently while maintaining real-time synchronization with the main ticketing platform.',
//     imageUrl: TBS_CRM,
//     gitLink: 'crm.thebusstand.com',
//   },
//   // {
//   //   title: 'Chat Application',
//   //   description: 'Real-time chat application leveraging Socket.IO and React Context API.',
//   //   imageUrl: 'https://plus.unsplash.com/premium_photo-1751547854487-96c1ece782b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D',
//   //   gitLink: 'https://github.com/yourusername/chat-app',
//   // },
//   // {
//   //   title: 'Blog Platform',
//   //   description: 'CMS-style blogging platform with markdown support and rich text editing.',
//   //   imageUrl: 'https://plus.unsplash.com/premium_photo-1751547854487-96c1ece782b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D',
//   //   gitLink: 'https://github.com/yourusername/blog-platform',
//   // },
// ];

// // ...imports and projects array remain unchanged...

// const containerVariants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.25,
//       delayChildren: 0.3,
//     },
//   },
// };

// const cardVariants = {
//   hidden: { opacity: 0, y: 60 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { type: 'spring', stiffness: 180, damping: 25 },
//   },
// };

// const ProjectsPage = () => {
//   const { theme } = useTheme();
//   const isDark = theme === 'dark';

//   const gridClasses = [
//     'lg:col-span-2 lg:row-span-4',
//     'lg:col-span-3 lg:row-span-4 lg:col-start-3',
//     'lg:col-span-3 lg:row-span-4 lg:row-start-5',
//     'lg:col-span-2 lg:row-span-4 lg:row-start-5 lg:col-start-4',
//   ];

//   return (
//     <Element name="projects">
//       <section className={`${isDark ? 'bg-black' : 'bg-white'} min-h-screen py-20 px-4 sm:px-6 lg:px-20 transition-colors duration-700`}>
//         {/* Heading */}
//         <div className="max-w-7xl mx-auto text-center">
//           <motion.h1
//             className={`text-5xl font-extrabold mb-6 ${isDark ? 'text-white' : 'text-black'}`}
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//           >
//             Projects
//           </motion.h1>
//           <p className={`text-lg max-w-3xl mx-auto mb-16 ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
//             Some of my recent projects showcasing skills and creativity.
//           </p>
//         </div>

//         {/* Grid with responsive columns and rows */}
//         <motion.div
//           className="grid grid-cols-1 lg:grid-cols-5 lg:grid-rows-8 gap-6 max-w-7xl mx-auto"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//           variants={containerVariants}
//         >
//           {projects.map((project, idx) => (
//             <motion.article
//               key={idx}
//               className={`${gridClasses[idx]} relative rounded-3xl border-2 ${isDark ? 'border-gray-800 hover:border-gray-900 bg-gradient-to-br from-gray-900 via-gray-800 to-black brightness-90 hover:brightness-105 ' : 'border-gray-100 hover:border-gray-100 bg-gray-200 brightness-75 hover:brightness-110'
//                 } cursor-pointer shadow-md 
//               transition-all duration-300 transform hover:-translate-y-2 hover:border-gray-400 flex flex-col brightness-90 hover:brightness-125`}
//               variants={cardVariants}
//               tabIndex={0}
//               aria-label={`Project titled ${project.title}`}
//             >
//               <div className="overflow-hidden rounded-t-3xl w-full h-48">
//                 <img
//                   src={project.imageUrl}
//                   alt={project.title}
//                   className="object-cover w-full h-full rounded-t-3xl transition-transform duration-300 hover:scale-105"
//                   loading="lazy"
//                 />
//               </div>
//               <div className="p-6 flex flex-col flex-grow">
//                 <h2 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-black'}`}>{project.title}</h2>
//                 <p className={`text-sm flex-grow ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{project.description}</p>
//                 <a
//                   href={project.gitLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="mt-4 inline-flex items-center text-white font-semibold hover:text-gray-400"
//                   aria-label={`View GitHub repository for ${project.title}`}
//                 >
//                   <FaGithub className="mr-2" size={20} /> View Code
//                 </a>
//               </div>
//             </motion.article>
//           ))}
//         </motion.div>
//       </section>
//     </Element>
//   );
// };

// export default ProjectsPage;
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useTheme } from '../Utils/ThemeContext';
import { Element } from 'react-scroll';
import TBS_WEB from "../assets/TBS_WEB.png";
import TBS_CRM from "../assets/TBS_CRM.png";

const projects = [
  {
    title: 'TheBusstand.com',
    description: 'thebusstand.com is a scalable online bus ticket booking platform designed to simplify intercity travel. It enables users to search, compare, and book bus tickets with real-time seat availability, digital ticket generation, and instant notifications.',
    imageUrl: TBS_WEB,
    gitLink: 'https://thebusstand.com',
  },
  {
    title: 'TheBusstand.com CRM',
    description: 'crm.thebusstand.com is a comprehensive CRM system built to streamline bus operator, client, and partner management. It enables operators to manage buses, routes, employees, offers, and cancellations efficiently while maintaining real-time synchronization with the main ticketing platform.',
    imageUrl: TBS_CRM,
    gitLink: 'https://crm.thebusstand.com',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 240, damping: 26 },
  }
};

const ProjectsPage = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // Set matching bg color for section and cards
  const sectionBg = isDark ? 'bg-black' : 'bg-white';
  const cardBg = isDark ? 'bg-black' : 'bg-white';
  const cardBorder = isDark ? 'border-white/10' : 'border-black/10';

  return (
    <Element name="projects">
      <section className={`${sectionBg} py-16 px-2 sm:px-4 lg:px-12 min-h-screen`}>
        <div className="max-w-5xl mx-auto mb-20 text-center">
          <motion.h2
            className={`text-4xl sm:text-5xl font-extrabold mb-6 ${isDark ? 'text-white' : 'text-black'}`}
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Projects
          </motion.h2>
          <p className={`text-base sm:text-lg max-w-3xl mx-auto mb-8 ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
            Some of my recent projects showcasing skills and creativity.
          </p>
        </div>
        {/* Timeline/Vertical Grid */}
        <div className="relative max-w-5xl mx-auto flex flex-col gap-0">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-green-200/70 via-green-300/30 to-transparent -translate-x-1/2 z-0 hidden lg:block" />
          <div className="flex flex-col gap-24">
            {projects.map((project, idx) => {
              const alignLeft = idx % 2 === 0;
              return (
                <motion.div
                  key={project.title}
                  className={`
                    relative flex flex-col lg:flex-row items-center justify-center w-full
                    ${alignLeft ? 'lg:justify-start' : 'lg:justify-end'}
                  `}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.7 }}
                  variants={cardVariants}
                >
                  {/* Left side (card on the left for even, spacer for odd) */}
                  <div className={`w-full lg:w-1/2 ${alignLeft ? 'order-1' : 'order-2 lg:order-1'} flex justify-${alignLeft ? 'end' : 'start'} `}>
                    {alignLeft && (
                      <ProjectCard
                        project={project}
                        isDark={isDark}
                        align={alignLeft ? "right" : "left"}
                        cardBg={cardBg}
                        cardBorder={cardBorder}
                      />
                    )}
                  </div>
                  {/* Timeline icon */}
                  <div className="hidden lg:flex flex-col items-center z-10 px-4 order-2">
                    <span className="w-16 h-16 rounded-full bg-black border-4 border-white flex items-center justify-center shadow-lg">
                      <span className="text-white text-3xl">{idx + 1}</span>
                    </span>
                  </div>
                  {/* Right side (spacer for even, card on the right for odd) */}
                  <div className={`w-full lg:w-1/2 ${alignLeft ? 'order-3' : 'order-2 lg:order-3'} flex`}>
                    {!alignLeft && (
                      <ProjectCard
                        project={project}
                        isDark={isDark}
                        align={alignLeft ? "right" : "left"}
                        cardBg={cardBg}
                        cardBorder={cardBorder}
                      />
                    )}
                  </div>
                  {/* Timeline icon for mobile: place above card */}
                  <div className="flex lg:hidden items-center justify-center my-6 order-0 w-full">
                    <span className="w-14 h-14 rounded-full bg-[#191932] border-4 border-green-300 flex items-center justify-center shadow-md">
                      <span className="text-green-400 text-xl">{idx + 1}</span>
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </Element>
  );
};


// Project Card Component
function ProjectCard({ project, isDark, align, cardBg, cardBorder }) {
  return (
    <div className={`
      relative rounded-2xl shadow-lg border ${cardBorder} ${cardBg}
      p-8 max-w-xl w-full
      transition-shadow duration-300
      ${align === 'left' ? 'ml-auto' : 'mr-auto'}
    `}>
      <div className="overflow-hidden rounded-xl w-full h-36 sm:h-60 mb-4">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="object-cover w-full h-full rounded-xl"
          loading="lazy"
        />
      </div>
      <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-black'}`}>{project.title}</h3>
      <p className={`text-sm mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{project.description}</p>
      <a
        href={project.gitLink}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white bg-black hover:bg-white/40 text-white font-semibold transition`}
        aria-label={`View project online: ${project.title}`}
      >
        <FaGithub size={18} /> Visit
      </a>
    </div>
  );
}

export default ProjectsPage;
