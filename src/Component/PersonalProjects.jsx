import React from "react";
import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb } from "react-icons/si";
import { useTheme } from '../Utils/ThemeContext';
import TBS_WEB from "../assets/TBS_WEB.png"
import { motion } from 'framer-motion';

const projects = [
    {
        id: 1,
        title: "Real-Time Chat App",
        image: TBS_WEB,
        description: "A real-time chat platform supporting private and group messaging, built for scalable and secure interactions.",
        tech: [
            { name: "React", icon: FaReact, color: "#61DAFB" },
            { name: "Node.js", icon: FaNodeJs, color: "#6cc24a" },
            { name: "Express", icon: SiExpress, color: "#D3D3D3" },
            { name: "MongoDB", icon: SiMongodb, color: "#10aa50" },
            { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
        ],
        github: "https://github.com/youruser/chat-app",
    },
    {
        id: 2,
        title: "Real-Time Chat App",
        image: TBS_WEB,
        description: "A real-time chat platform supporting private and group messaging, built for scalable and secure interactions.",
        tech: [
            { name: "React", icon: FaReact, color: "#61DAFB" },
            { name: "Node.js", icon: FaNodeJs, color: "#6cc24a" },
            { name: "Express", icon: SiExpress, color: "D3D3D3" },
            { name: "MongoDB", icon: SiMongodb, color: "#10aa50" },
            { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
        ],
        github: "https://github.com/youruser/chat-app",
    },
    {
        id: 3,
        title: "Real-Time Chat App",
        image: TBS_WEB,
        description: "A real-time chat platform supporting private and group messaging, built for scalable and secure interactions.",
        tech: [
            { name: "React", icon: FaReact, color: "#61DAFB" },
            { name: "Node.js", icon: FaNodeJs, color: "#6cc24a" },
            { name: "Express", icon: SiExpress, color: "#D3D3D3" },
            { name: "MongoDB", icon: SiMongodb, color: "#10aa50" },
            { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
        ],
        github: "https://github.com/youruser/chat-app",
    },
];

const ProjectCard = ({ project, isDark }) => (
    <div
        className={`rounded-2xl border shadow-lg p-4 flex flex-col
      ${isDark ? "border-gray-500 bg-gradient-to-br from-black via-gray-800 to-black hover:shadow-gray-600" : "border-gray-700"}
      transition hover:-translate-y-1 hover:shadow-lg duration-300 group
      max-w-sm mx-auto sm:max-w-none
    `}
    >
        <div className="rounded-xl overflow-hidden mb-4">
            <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 sm:h-48 md:h-52 xl:h-56 object-cover bg-gray-100 dark:bg-gray-800"
                loading="lazy"
            />
        </div>
        <h3 className={`text-xl font-bold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>{project.title}</h3>
        <p className={`text-sm mb-4 ${isDark ? "text-gray-300" : "text-gray-700"}`}>{project.description}</p>
        <div className="flex flex-wrap gap-3 mb-4">
            {project.tech.map(({ name, icon: Icon, color }) => (
                <span
                    key={name}
                    className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${isDark ? 'bg-gray-800 border border-gray-500' : 'bg-gray-800'} shadow`}
                >
                    <Icon size={16} style={{ color }} aria-hidden="true" /> {name}
                </span>
            ))}
        </div>
        <div className="flex gap-2 mt-auto">
            {project.github && (
                <a
                    href={project.github}
                    className={`px-2 py-2 flex gap-2 rounded-lg text-sm font-semibold border
            ${isDark ? "bg-black/80 border-gray-700 text-white hover:bg-gray-800"
                            : "bg-gray-800 border-gray-800 text-white hover:bg-black"} transition`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGithub size={20} />Visit
                </a>
            )}
        </div>
    </div>
);

const PersonalProjects = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <section className={` ${isDark ? "bg-black" : "bg-white"} min-h-screen py-5`}>
            <div className="max-w-7xl py-12 px-2 sm:px-4 md:px-8 lg:px-16 mx-auto mb-20 text-center">
                <motion.h2
                    className={`text-4xl sm:text-5xl font-extrabold mb-6 ${isDark ? 'text-white' : 'text-black'}`}
                    initial={{ opacity: 0, y: -16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    PERSONAL PROJECTS
                </motion.h2>
                <p className={`text-base sm:text-lg max-w-3xl mx-auto mb-8 ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
                    Where experimentation meets innovation—ideas brought to life through code.
                    A space to explore new technologies, frameworks, and creative problem-solving.
                    These projects reflect curiosity, continuous learning, and a passion for building beyond boundaries."
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 ">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} isDark={isDark} />
                    ))}
                </div>
            </div>
        </section>
    )
};

export default PersonalProjects;
