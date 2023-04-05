import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import {
  UilLinkedin,
  UilGithub,
  UilEnvelopeAlt,
} from "@iconscout/react-unicons";
import ResumeIcon from "./iconConfig/Resume";
import { useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";
import ojas from '../public/ojas2.jpg'

const Intro = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      id="home"
      className="py-20 px-20 grid place-content-center"
    >
      <motion.div
        style={{
          transform: isInView ? "none" : "translateY(+200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <div className="">
          <motion.div
            whileHover={{ translateY: -5 }}
            className="bg-gradient-to-r from-cyan-600 to-blue-900 text-transparent bg-clip-text brightness-175"
          >
            <motion.h1 className="text-7xl font-bold mr-4 py-2">
              {"≫ about me"}
            </motion.h1>
          </motion.div>
        </div>
        <div className="flex gap-4">
        <motion.div
          whileHover={{ translateY: -7 }}
          className="px-10 pt-5"
        >
          <p className="mt-3 text-lg text-cyan-500 tracking-wide">
            {"<div id='super-cool-description' >"}
          </p>
          <div className="mt-3 ml-6 border-l-2 border-gray-500/50">
            <h3 className="ml-4 mt-2 text-lg text-cyan-500 tracking-wide">
              {/* {"<h3>"} <span className='text-2xl font-medium '>I love building impactful web applications.</span> {"</h3>"} */}
              {"<h3>"}{" "}
              <span className="text-chalk text-2xl font-normal ">
                your friendly neighbourhood full-stack developer.
              </span>{" "}
              {"</h3>"}
            </h3>

            <div id="description" className="text-chalk  ml-4">
              <p className="text-lg text-cyan-500 tracking-wide">
                {"<p>"}
              </p>
              <div className="w-128 border-l-2 border-gray-500/50 ml-4">
                <p className="text-lg ml-2 leading-flow  brightness-150">
                I am a currently a full-time student at the <span className="text-cyan-500">University of Toronto</span>, double majoring in <span className="text-cyan-500">physics and statistics.</span> I started building web applications about a year ago, and I fell in love with learning how to build scaleable, data-intensive projects.
                </p>
              </div>
              <p className="mt-2 text-cyan-500 text-lg tracking-wide">
                {"</p>"}
              </p>
            </div>
            <div id="description" className="text-chalk  ml-4">
              <p className="text-lg text-cyan-500 tracking-wide">
                {"<p>"}
              </p>
              <div className="w-128 border-l-2 border-gray-500/50 ml-4">
                <p className="text-lg ml-2 leading-flow  brightness-150">
                I'm always learning something new, and I'm currently experimenting with using large-language models. I primarily use <span className="text-cyan-500">Typescript</span> for my full-stack projects, and have lately also been using <span className="text-cyan-500">Go and Python</span>. Check out my resume and projects to learn more about my work.
                </p>
              </div>
              <p className="mt-2 text-cyan-500 text-lg tracking-wide">
                {"</p>"}
              </p>
            </div>
          </div>
          <p className="mt-2 text-lg text-cyan-500 tracking-wide">
            {"</div>"}
          </p>
        </motion.div>
        <motion.div whileHover={{scale: 1.03, transition: {duration: 0.2}}}
              className=""
            >
              <Image alt="ojas singh" height='450px' width='325px' className="rounded-midxl" src={ojas}/>
              <p className="md:hidden text-center text-projcomp">{"<img src='super-handsome-guy.png'>"}</p>
          </motion.div>
        </div>

        <div className="text-cyan-500 flex gap-10 px-10 place-content-center">
        <motion.a
                target="_blank"
                href="https://www.linkedin.com/in/ojas-singh/"
                whileHover={{ translateY: -4, scale:1.25, transition: {duration: 0.2} }}
                className=""
              >
                <UilLinkedin size="45" />
              </motion.a>
              <motion.a
                target="_blank"
                href="https://github.com/ojassingh/"
                whileHover={{ translateY: -4, scale:1.25, transition: {duration: 0.2} }}
                className=""
              >
                <UilGithub size="45" />
              </motion.a>
              <motion.a
                target="_blank"
                href="mailto:ojas.singh02@gmail.com"
                whileHover={{ translateY: -4, scale:1.25, transition: {duration: 0.2} }}
                className=""
              >
                <UilEnvelopeAlt size="45" />
              </motion.a>
              {/* <motion.a
                title="Check out my resume"
                target="_blank"
                href="https://drive.google.com/file/d/1zUABabvTjbFZHnFnBX3DbfQ6RwowaLZ4/view?usp=share_link"
                whileHover={{ translateY: -4, scale:1.5 }}
                className=""
              >
                <ResumeIcon/>
              </motion.a> */}
        </div>

      </motion.div>
    </div>
  );
};

export default Intro;
