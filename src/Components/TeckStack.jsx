import React from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaJava, FaDocker } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiPostgresql, SiFlutter, SiDart, SiTailwindcss, SiThreedotjs, SiMicrodotblog } from 'react-icons/si';
import { motion } from 'framer-motion';
import { useTheme } from '../Utils/ThemeContext';

const techStack = [
  {
    name: 'Node.js',
    icon: FaNodeJs,
    color: '#16a34a',
    // description: 'JavaScript runtime built on Chrome’s V8 engine for scalable network apps.',
  },
  {
    name: 'Express.js',
    icon: SiExpress,
    color: '#475569',
    // description: 'Minimal and flexible Node.js web application framework.',
  },
  {
    name: 'React',
    icon: FaReact,
    color: '#22d3ee',
    // description: 'Declarative, efficient, and flexible JavaScript library for building user interfaces.',
  },
  {
    name: 'PostgreSQL',
    icon: SiPostgresql,
    color: '#336791',
    // description: 'Powerful, open source object-relational database system with strong reliability and feature set.',
  },
  {
    name: 'MongoDB',
    icon: SiMongodb,
    color: '#22c55e',
    // description: 'NoSQL database optimized for scalability and developer agility.',
  },
  {
    name: 'Database',
    icon: FaDatabase,
    color: '#4ade80',
    // description: 'Robust data storage optimized for high performance and reliability.',
  },
  {
    name: 'Flutter',
    icon: SiFlutter,
    color: '#02569B',
    // description: 'UI toolkit by Google for building natively compiled applications for mobile, web, and desktop.',
  },
  {
    name: 'Dart',
    icon: SiDart,
    color: '#0175C2',
    // description: 'A client-optimized programming language for fast apps on any platform.',
  },
  {
    name: 'Tailwind CSS',
    icon: SiTailwindcss,
    color: '#38BDF8',
    // description: 'Utility-first CSS framework packed with classes for rapid UI development.',
  },
  {
    name: 'Three.js',
    icon: SiThreedotjs,
    color: '#FFFFFF',
    // description: 'JavaScript 3D library creating and displaying animated 3D graphics in web browsers.',
  },
  {
    name: 'Microservices',
    icon: SiMicrodotblog,
    color: '#FFCA28',
    // description: 'Architectural style structuring an application as a collection of loosely coupled services.',
  },
  {
    name: 'Docker',
    icon: FaDocker,
    color: '#2496ED',
    // description: 'Platform to develop, ship, and run applications within lightweight containers.',
  },
  {
    name: 'Java',
    icon: FaJava,
    color: '#007396',
    // description: 'Robust, class-based, object-oriented programming language widely used in enterprise applications.',
  },
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
    <section className={`${isDark ? 'bg-black' : 'bg-white'} w-98 flex flex-col py-24 px-6 transition-colors duration-500`}>
      <motion.div
        className="max-w-7xl mx-auto text-center mb-16 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <h2 className={`text-5xl font-extrabold mb-4 tracking-wider uppercase drop-shadow-lg ${
          isDark ? 'text-white' : 'text-black'
        }`}>
          Tech Stack
        </h2>
        <p className={`text-lg max-w-2xl mx-auto ${
          isDark ? 'text-gray-400' : 'text-gray-600'
        }`}>
          Mastering the power of Node.js, Express, React, and , crafting bulletproof scalable full-stack apps with elegance.
        </p>
      </motion.div>

      <motion.div 
        className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4 
          xl:grid-cols-5 
          2xl:grid-cols-5 
          gap-10 sm:gap-12 md:gap-14 lg:gap-16 xl:gap-20 2xl:gap-24
          max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
        "
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {techStack.map(({ name, icon: Icon, color, description }) => (
          <motion.div
            key={name}
            className={`${isDark ? 'bg-gray-900' : 'bg-gray-100'} rounded-3xl p-8 flex flex-col items-center cursor-pointer relative overflow-hidden shadow-md transition-colors duration-500`}
            variants={itemVariants}
            custom={color}
            whileHover="hover"
            style={{ color: isDark ? 'white' : 'black' }}
            aria-label={`${name} tech stack icon with description`}
          >
            {/* Glow effect circle behind icon */}
            <motion.div
              className="absolute inset-0 rounded-3xl"
              style={{ 
                boxShadow: `0 0 20px 6px ${color}`, 
                filter: 'blur(12px)', 
                opacity: isDark ? 0.3 : 0.15,
                transition: 'opacity 0.3s ease'
              }}
            />
            <Icon 
              size={72} 
              color={color} 
              aria-hidden="true"
              className="relative z-10 drop-shadow-md"
            />
            <h3 className="mt-6 font-semibold text-xl tracking-wide z-10 relative truncate max-w-full text-center">
              {name}
            </h3>
            <p className={`text-sm max-w-xs z-10 relative mt-2 text-center ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {description}
            </p>

            {/* Ripple hover effect circle */}
            <motion.span
              className="absolute rounded-full w-40 h-40 bg-green-400 opacity-30 pointer-events-none top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0"
              initial={{ scale: 0 }}
              whileHover={{ 
                scale: [0, 1, 0],
                opacity: [0.3, 0.15, 0],
                transition: { duration: 0.6, repeat: 0 }
              }}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default TechStack;
