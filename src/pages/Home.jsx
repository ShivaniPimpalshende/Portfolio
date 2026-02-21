// import React from "react";
// import { motion } from "framer-motion";
// import { IoLogoLinkedin } from "react-icons/io5";
// import { BiLogoGmail } from "react-icons/bi";
// import { BsGithub } from "react-icons/bs";
// import { TypeAnimation } from "react-type-animation";

// export default function Home() {
//   return (
//     <div className="mt-20" id="home">
//       <div className="flex justify-between py-10 items-center px-5 lg:px-28 lg:flex-row flex-col-reverse">

//         <motion.div
//           className="lg:w-[45%]"
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1, ease: "easeInOut" }}
//         >

//           <motion.div
//             className="text-2xl lg:text-5xl flex flex-col mt-8 lg:mt-0 gap-2 lg:gap-5 text-nowrap"
//             initial="hidden"
//             animate="visible"
//             variants={{
//               hidden: { opacity: 0, y: 20 },
//               visible: {
//                 opacity: 1,
//                 y: 0,
//                 transition: { staggerChildren: 0.2, ease: "easeInOut" },
//               },
//             }}
//           >
//             <motion.h2 variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
//               Hello, <TypeAnimation
//                 sequence={[
//                   'I am Shivani Pimpalshende',
//                   1000,
//                   // 'I am a Web Developer',
//                   // 1000,
//                   // 'I am a UI/UX Designer',
//                   // 1000,
//                 ]}
//                 speed={10}
//                 style={{ fontWeight:600 }}
//                 repeat={Infinity}
//               />
//             </motion.h2>
//             <motion.h2 variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
//               <span className="font-extrabold">Fullstack/AI</span>{" "}
//               <span
//                 className="text-white font-extrabold"
//                 style={{ WebkitTextStroke: "1px black" }}
//               >
//                 Developer
//               </span>
//             </motion.h2>
//             <motion.h2 variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
//               Based In <span className="font-extrabold">India.</span>
//             </motion.h2>
//           </motion.div>

//           <motion.p
//             className="text-[#71717A] text-sm lg:text-base mt-5"
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.5, duration: 1 }}
//           >
//             Passionate about technology, I specialize in Web Development and AI/ML Development. I’m focused on building innovative solutions and continuously expanding my skills. My goal is to grow as a developer and contribute to impactful projects in the tech industry.
//           </motion.p>

//           <motion.div
//             className="flex items-center gap-x-5 mt-10 lg:mt-14"
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.8, duration: 1 }}
//           >
//             {[BiLogoGmail, IoLogoLinkedin, BsGithub].map((Icon, index) => (
//               <motion.a
//                 key={index}
//                 href="#"
//                 className="bg-white p-2 lg:p-3 rounded border-2 border-black"
//                 whileHover={{ scale: 1.1, backgroundColor: "#000", color: "#fff" }}
//                 whileTap={{ scale: 0.9 }}
//               >
//                 <Icon className="w-4 h-4 lg:w-5 lg:h-5" />
//               </motion.a>
//             ))}
//           </motion.div>
//         </motion.div>

//         <motion.div
//           className="lg:w-[55%] w-full"
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1, ease: "easeInOut" }}
//         >
//           <img className="h-full w-full" src="/assets/hero-vector.svg" alt="Hero Vector" />
//         </motion.div>
//       </div>
//     </div>
//   );
// }
import React from "react";
import { motion } from "framer-motion";
import { IoLogoLinkedin,  } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { TypeAnimation } from "react-type-animation";

export default function Home() {

  const socialLinks = [
    { Icon: BiLogoGmail, url: "mailto:shivanipimpalshende02@gmail.com" },
    { Icon: IoLogoLinkedin, url: "https://www.linkedin.com/in/shivani-pimpalshende-0b3497278/" },
    { Icon: BsGithub, url: "https://github.com/ShivaniPimpalshende" },
  ];

  return (
    <div className="mt-20" id="home">
      <div className="flex justify-between py-10 items-center px-5 lg:px-28 lg:flex-row flex-col-reverse">

        <motion.div
          className="lg:w-[45%]"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >

          <motion.div
            className="text-2xl lg:text-5xl flex flex-col mt-8 lg:mt-0 gap-2 lg:gap-5 text-nowrap"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.2, ease: "easeInOut" },
              },
            }}
          >
            <motion.h2 variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
              Hello,{" "}
              <TypeAnimation
                sequence={[
                  "I am Shivani Pimpalshende",
                  1000,
                ]}
                speed={10}
                style={{ fontWeight: 600 }}
                repeat={Infinity}
              />
            </motion.h2>

            <motion.h2 variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
              <span className="font-extrabold">Fullstack/AI</span>{" "}
              <span
                className="text-white font-extrabold"
                style={{ WebkitTextStroke: "1px black" }}
              >
                Developer
              </span>
            </motion.h2>

            <motion.h2 variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
              Based In <span className="font-extrabold">India.</span>
            </motion.h2>
          </motion.div>

          <motion.p
            className="text-[#71717A] text-sm lg:text-base mt-5"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Passionate about technology, I specialize in Web Development and AI/ML Development. I’m focused on building innovative solutions and continuously expanding my skills. My goal is to grow as a developer and contribute to impactful projects in the tech industry.
          </motion.p>

          {/* Social Icons */}
          <motion.div
            className="flex items-center gap-x-5 mt-10 lg:mt-14"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            {socialLinks.map(({ Icon, url }, index) => (
              <motion.a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-2 lg:p-3 rounded border-2 border-black"
                whileHover={{ scale: 1.1, backgroundColor: "#000", color: "#fff" }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon className="w-4 h-4 lg:w-5 lg:h-5" />
              </motion.a>
            ))}
          </motion.div>

        </motion.div>

        <motion.div
          className="lg:w-[30%] w-full"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <img className="h-full w-full" src="/assets/me2.png" alt="Hero Vector" />
        </motion.div>
      </div>
    </div>
  );
}