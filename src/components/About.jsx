import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="px-5 lg:px-28 flex justify-between flex-col lg:flex-row" id="about">
      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10 }}
        viewport={{ once: true }}
      >
        <img src="/assets/about-me.svg" alt="About Me Illustration" />
      </motion.div>

      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="lg:text-4xl text-2xl mt-4 lg:mt-0">
          About <span className="font-extrabold">Me</span>
        </h2>
        <p className="text-[#71717A] text-sm/6 lg:text-base mt-5 lg:mt-10">
          <p className="text-[#71717A] text-sm/6 lg:text-base mt-5 lg:mt-10">
          I am currently working as an AI Engineer Intern at QuickFusion Innovation, where I focus on building production-oriented AI systems.
        </p>
        </p>
        <p className="text-[#71717A] text-sm/6 lg:text-base mt-5 lg:mt-10">
          I am currently working as an AI Engineer Intern at QuickFusion Innovation, where I focus on building production-oriented AI systems.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
          My core strengths lie in full-stack development and intelligent systems. I have experience with HTML, CSS, JavaScript, React, Flask, MongoDB, SQL, and Solidity and more. 
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
         I continuously strive to enhance my technical skills by exploring new technologies and frameworks, and I am highly motivated to build innovative, AI-driven solutions that solve real-world problems.
        </p>
      </motion.div>
    </div>
  );
}
