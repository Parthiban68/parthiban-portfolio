import React from 'react';
import { FaBriefcase } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useTheme } from '../Utils/ThemeContext'; // Adjust path as needed
import { Element } from 'react-scroll';

const experience = {
  role: 'Backend Engineer',
  company: 'XYZ Ltd.',
  period: '2022 – Present',
  icon: FaBriefcase,
  color: '#22c55e',
  responsibilities: [
    'Built RESTful APIs using Node.js, Express, and MongoDB.',
    'Led migration from monolith to microservices, improving scalability.',
    'Optimized database queries for high-performance data handling.',
    'Automated deployment using CI/CD pipelines.',
    'Collaborated with frontend teams to design seamless systems.',
    'Mentored junior developers and reviewed code for best practices.',
  ],
  about: `As a Backend Engineer at XYZ Ltd., I focus on architecting and developing robust, scalable backend solutions for fast-growing web applications. I drive improvements in system performance, security, and developer experience while collaborating with cross-functional teams to achieve business goals.`,
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, type: 'spring', stiffness: 120 } },
};

const ExperienceSingleCard = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const Icon = experience.icon;

  return (
    <Element name="experience">
    <section className={`min-h-screen flex flex-col items-center justify-center px-4 py-10 ${isDark ? 'bg-black' : 'bg-gray-50'} transition-colors duration-500`}>
      <motion.h1
        initial={{ opacity: 0, y: -32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className={`
          text-3xl 
          sm:text-4xl 
          md:text-5xl 
          xl:text-5xl 
          2xl:text-5xl 
          font-extrabold 
          mb-12 
          text-center 
          tracking-wider 
          uppercase 
          drop-shadow-lg
          ${isDark ? 'text-white' : 'text-black'}
        `}
      >
       Work Experience
      </motion.h1>

      {/* Experience Card */}
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        className={`
          relative 
          rounded-3xl 
          shadow-2xl 
          border 
          mx-auto 
          max-w-2xl 
          w-full
          ${isDark
            ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black border-gray-800'
            : 'bg-white/80 backdrop-blur-xl border-gray-200'}
          transition-colors 
          duration-500
          flex 
          flex-col 
          gap-6 
          p-10
        `}
        style={{ boxShadow: `0 8px 32px 0 ${isDark ? '#22c55e40' : '#22c55e24'}` }}
      >
        {/* Glowing icon */}
        <span
          className="absolute left-8 -top-10 w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg"
          style={{
            background: isDark ? experience.color + '22' : experience.color + '19',
            border: `2.5px solid ${experience.color}`,
            boxShadow: `0 0 48px 0 ${experience.color}60, 0 1px 10px #22c55e30`,
          }}
        >
          <Icon size={38} color={experience.color} />
        </span>

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-8 pt-4">
          <h2 className={`text-2xl font-extrabold ${isDark ? 'text-white' : 'text-gray-900'} flex-1`}>
            {experience.role}
          </h2>
          <div className="flex flex-col md:items-end">
            <span className={`font-medium text-base ${isDark ? 'text-green-300' : 'text-green-700'}`}>{experience.company}</span>
            <span className={`text-xs px-3 py-1 rounded-xl font-bold mt-1 ${isDark ? 'bg-green-800 text-green-100' : 'bg-green-100 text-green-700'}`}>
              {experience.period}
            </span>
          </div>
        </div>

        {/* About */}
        <p className={`mt-2 mb-4 text-base font-normal ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          {experience.about}
        </p>

        {/* Graphic Divider */}
        <div className="flex items-center py-4">
          <div className={`flex-1 h-1 rounded-xl ${isDark ? 'bg-gradient-to-r from-green-600 via-green-400 to-cyan-500' : 'bg-gradient-to-r from-green-300 via-green-400 to-cyan-400'}`} />
        </div>

        {/* Responsibilities List with custom bullets */}
        <div className="mt-2">
          <h3 className={`text-lg font-semibold mb-3 ${isDark ? 'text-green-200' : 'text-green-700'}`}>Key Responsibilities</h3>
          <ul className="space-y-3">
            {experience.responsibilities.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="mt-1 w-4 h-4 rounded-full flex-shrink-0"
                  style={{
                    background: experience.color,
                    boxShadow: `0 0 8px 0 ${experience.color}50`
                  }}
                />
                <span className={`${isDark ? 'text-gray-200' : 'text-gray-800'} text-base`}>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
    </Element>
  );
};

export default ExperienceSingleCard;
