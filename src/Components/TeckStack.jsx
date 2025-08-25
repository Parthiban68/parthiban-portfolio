import React from 'react';
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiMongodb, SiExpress } from 'react-icons/si';
import { motion } from 'framer-motion';
import { useTheme } from '../Utils/ThemeContext';

const techStack = [
  {
    name: 'MongoDB',
    icon: SiMongodb,
    color: '#22c55e',
    description: 'NoSQL database optimized for scalability and developer agility.',
  },
  {
    name: 'Express.js',
    icon: SiExpress,
    color: '#475569',
    description: 'Minimal and flexible Node.js web application framework.',
  },
  {
    name: 'React',
    icon: FaReact,
    color: '#22d3ee',
    description: 'Declarative, efficient, and flexible JavaScript library for building user interfaces.',
  },
  {
    name: 'Node.js',
    icon: FaNodeJs,
    color: '#16a34a',
    description: 'JavaScript runtime built on Chrome’s V8 engine for scalable network apps.',
  },
  {
    name: 'Database',
    icon: FaDatabase,
    color: '#4ade80',
    description: 'Robust data storage optimized for high performance and reliability.',
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
    scale: 1.15,
    boxShadow: `0 0 20px 6px ${color}`,
    transition: { type: 'spring', stiffness: 300, damping: 15 },
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
          Mastering the power of MongoDB, Express, React, and Node.js, crafting bulletproof scalable full-stack apps with elegance.
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
