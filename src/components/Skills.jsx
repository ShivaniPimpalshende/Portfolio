import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaJs, FaReact, FaNodeJs, FaPython, FaJava } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";
import { TbDatabase } from "react-icons/tb";
import { FaBrain } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { GiArtificialIntelligence } from "react-icons/gi";
import { MdPsychology } from "react-icons/md";
import { TbLanguage } from "react-icons/tb";


export default function Skills() {
  const [skills] = useState([
    { id: 10, name: "RAG / AI", icon: <GiArtificialIntelligence size={50} /> },
    { id: 11, name: "Machine Learning", icon: <MdPsychology size={50} /> },
    {id:12, name: "Deep Learning", icon: <FaBrain size={50} /> },
    {id:13, name: "NLP", icon: <TbLanguage size={50} /> },
    { id: 1, name: "JavaScript", icon: <FaJs size={50} /> },
    { id: 2, name: "React", icon: <FaReact size={50} /> },
    { id: 3, name: "Node.js", icon: <FaNodeJs size={50} /> },
    { id: 4, name: "Python", icon: <FaPython size={50} /> },
    { id: 5, name: "MongoDB", icon: <SiMongodb size={50} /> },
    { id: 6, name: "Java", icon: <FaJava size={50} /> },
    { id: 7, name: "SQL", icon: <TbDatabase size={50} /> },
    { id: 8, name: "Express.js", icon: <SiExpress size={50} /> },
    { id: 9, name: "Tailwind", icon: <RiTailwindCssFill size={50} /> }
    
  ]);

  const [experiences] = useState([
    {
      id: 1,
      company: "QuickFusion Innovation",
      role: "AI Engineer Intern",
      period: "Dec 2025 - Present",
      description:
        "As an AI Engineer Intern at QuickFusion Innovation, I am actively involved in building production-oriented AI systems. My responsibilities include designing and implementing machine learning models, optimizing algorithms for performance, and collaborating with cross-functional teams to integrate AI solutions into real-world applications. I am gaining hands-on experience in deploying AI models and ensuring their scalability and reliability in a production environment.",
      logo: "/assets/companylogo.svg",
    },
    {
      id: 2,
      company: "InternPe",
      role: "Web Developer Intern",
      period: "April 2025 - May 2025",
      description:
        "At InternPe, I served as a Web Developer Intern, focusing on the design and implementation of frontend and backend systems for the company's dynamic platform. Working on projects that involved responsive design and user engagement features, I leveraged my expertise to ensure seamless functionality and scalability.",
      logo: "/assets/internpe.svg",
    },
  ]);

  return (
    <div className="mt-3 lg:mt-16" id="skills">
      <div className="px-5 lg:px-28">

        <motion.h2
          className="text-2xl lg:text-4xl text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My <span className="font-extrabold">Skills</span>
        </motion.h2>

        {/* Skill Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 text-lg font-bold mt-7 lg:mt-16 w-full place-items-center gap-y-6 lg:gap-y-12">
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              className="bg-white border-2 hover:bg-black hover:text-white transition-all cursor-pointer border-black rounded p-3 h-36 w-36 lg:h-44 lg:w-44 flex flex-col items-center justify-center gap-5"
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: skill.id * 0.1 }}
              viewport={{ once: true }}
            >
              {skill.icon}
              <p>{skill.name}</p>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Experience Section */}
      <div className="bg-black w-full my-8 py-8 lg:my-16 lg:py-16">
        <motion.h2
          className="text-2xl lg:text-4xl text-center text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My <span className="font-extrabold">Experience</span>
        </motion.h2>

        {/* Experience Cards */}
        <div className="px-5 lg:px-28 my-8 lg:mt-16 space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="bg-black p-5 border border-[#D4D4D8] rounded-md hover:bg-[#27272A] transition-all cursor-pointer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between flex-col items-start lg:flex-row lg:items-center">
                <div className="flex items-center gap-5">
                  <img className="w-7" src={exp.logo} alt="" />
                  <h2 className="font-semibold text-white text-lg lg:text-xl">
                    {exp.role} at {exp.company}
                  </h2>
                </div>
                <span className="text-[#D4D4D8] font-semibold text-sm mt-4 lg:mt-0 lg:text-base">
                  {exp.period}
                </span>
              </div>
              <p className="text-[#D4D4D8] mt-6 text-sm/6 lg:text-base font-light">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
