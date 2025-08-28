import React from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaJava, FaDocker } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiPostgresql, SiFlutter, SiDart, SiTailwindcss, SiThreedotjs, SiMicrodotblog } from 'react-icons/si';
import { motion } from 'framer-motion';
import { useTheme } from '../Utils/ThemeContext';
import { Element } from 'react-scroll';

const techStack = [
  { name: 'Node.js', icon: FaNodeJs, color: '#16a34a', description: 'JavaScript runtime on Chrome V8.' },
  { name: 'Express.js', icon: SiExpress, color: '#475569', description: 'Minimal Node.js framework.' },
  { name: 'React', icon: FaReact, color: '#22d3ee', description: 'Declarative UI library.' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791', description: 'Open source relational DB.' },
  { name: 'MongoDB', icon: SiMongodb, color: '#22c55e', description: 'NoSQL scalable database.' },
  { name: 'Database', icon: FaDatabase, color: '#4ade80', description: 'Robust data storage.' },
  { name: 'Flutter', icon: SiFlutter, color: '#02569B', description: 'UI toolkit for native apps.' },
  { name: 'Dart', icon: SiDart, color: '#0175C2', description: 'Client-optimized programming language.' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38BDF8', description: 'Utility-first CSS framework.' },
  { name: 'Three.js', icon: SiThreedotjs, color: '#FFFFFF', description: '3D web graphics library.' },
  { name: 'Microservices', icon: SiMicrodotblog, color: '#FFCA28', description: 'Distributed services architecture.' },
  { name: 'Docker', icon: FaDocker, color: '#2496ED', description: 'Container platform.' },
  { name: 'Java', icon: FaJava, color: '#007396', description: 'Enterprise programming language.' },
];

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    }
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.8 },
  visible: { 
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 260, damping: 20 }
  },
  hover: (color) => ({
    scale: 1.05,
    boxShadow: `0 0 20px 6px ${color}`,
    transition: { type: 'spring', stiffness: 100, damping: 15 },
  }),
};

const TechStack = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <Element name='tech'>
    <section className={`${isDark ? 'bg-black' : 'bg-white'} w-full flex flex-col py-24 px-6 transition-colors duration-500`}>
      <motion.div
        className="max-w-7xl mx-auto text-center mb-16 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <h2 className={`text-5xl font-extrabold mb-4 tracking-wider uppercase drop-shadow-lg ${isDark ? 'text-white' : 'text-black'}`}>
          Tech Stack
        </h2>
        <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          Mastering the power of Node.js, Express, React, and more, crafting bulletproof scalable full-stack apps with elegance.
        </p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {techStack.map(({ name, icon: Icon, color, description }) => (
          <motion.div
            key={name}
            className={`${isDark ? 'bg-gray-900' : 'bg-gray-200'} rounded-3xl p-6 flex flex-col items-center cursor-pointer relative overflow-hidden shadow-md transition-colors duration-500`}
            variants={itemVariants}
            custom={color}
            whileHover="hover"
            style={{ color: isDark ? 'white' : 'black' }}
            aria-label={`${name} tech stack icon with description`}
            title={description}
          >
            <motion.div
              className="absolute inset-0 rounded-3xl"
              style={{ 
                boxShadow: `0 0 16px 6px ${color}`, 
                filter: 'blur(12px)', 
                opacity: isDark ? 0.25 : 0.15,
                transition: 'opacity 0.3s ease'
              }}
            />
            <Icon 
              /* Responsive icon sizing */
              className="relative z-10 drop-shadow-md"
              style={{ color }}
              size={window.innerWidth < 640 ? 36 : 56}
              aria-hidden="true"
            />
            <h3 className="mt-6 font-semibold text-base sm:text-lg tracking-wide z-10 relative truncate max-w-full text-center">
              {name}
            </h3>
          </motion.div>
        ))}
      </motion.div>
    </section>
    </Element>
  );
};

export default TechStack;
