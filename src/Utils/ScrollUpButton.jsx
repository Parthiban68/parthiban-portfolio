import React, { useState, useEffect } from 'react';
import { FaChevronUp } from 'react-icons/fa';
import { useTheme } from '../Utils/ThemeContext';

export const ScrollUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const toggleVisibility = () => {
    setIsVisible(window.pageYOffset > 500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          title="Click to go up"
          className={`
            hidden md:flex fixed bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-2 px-4 py-2 text-[20px]
            bg-white/30  backdrop-blur-md rounded-full shadow-md
            hover:bg-black/50  transition-colors duration-300 cursor-pointer z-50 font-semibold select-none
            focus:outline-none focus:ring-2 focus:ring-green-400
            ${isDark ? 'text-black dark:bg-white/100 dark:hover:bg-white/50' : 'text-white dark:bg-black/100 '}
          `}
        >
          <FaChevronUp size={20} />
          Click to go up
        </button>
      )}
    </>
  );
};
