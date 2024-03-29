import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";
import ojas from "../public/ojas2.jpg";

const Intro = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} id="about" className="py-20 sm:px-20 md:px-20 lg:px-20 px-10  bg-chalk min-h-screen">
      <motion.div
        style={{
          transform: isInView ? "none" : "translateY(+200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <motion.div whileHover={{ translateY: -5 }} className="text-[#152617]">
          <motion.h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-bold md:px-10 lg:px-10 md:pb-8 lg:pb-8">
            {"Hi there!"}
          </motion.h1>
        </motion.div>

        <div className="flex flex-wrap-reverse gap-4">
          <motion.div whileHover={{ translateY: -7 }} className="md:px-10 lg:px-10">
            <p className="text-lg text-[#84A60A] tracking-wide">
              {"<div id='super-cool-description' >"}
            </p>
            <div className="ml-6 border-l-2 border-gray-500/50">
              <h3 className="ml-4 mt-2 text-lg text-[#84A60A] tracking-wide">
                {/* {"<h3>"} <span className='text-2xl font-medium '>I love building impactful web applications.</span> {"</h3>"} */}
                {"<h3>"}{" "}
                <span className="text-[#152617] text-xl font-normal ">
                  This is your friendly neighbourhood full-stack developer.
                </span>{" "}
                {"</h3>"}
              </h3>

              <div id="description" className="text-chalk  ml-4">
                <p className="text-lg text-[#84A60A] tracking-wide">{"<p>"}</p>
                <div className="md:w-128 lg:w-128 border-l-2 border-gray-500/50 ml-4">
                  <p className="text-lg ml-2 leading-flow text-black">
                    I am a currently a full-time student at the{" "}
                    <span className="text-[#84A60A]">
                      University of Toronto
                    </span>
                    , in the{" "}
                    <span className="text-[#84A60A]">
                      Computer Science, Mathematics and Statistics
                    </span>{" "}
                    program. I started building web applications about a year
                    ago, and I enjoy building scaleable and impactful projects.
                  </p>
                </div>
                <p className="mt-2 text-[#84A60A] text-lg tracking-wide">
                  {"</p>"}
                </p>
              </div>
              <div id="description" className="text-chalk  ml-4">
                <p className="text-lg text-[#84A60A] tracking-wide">{"<p>"}</p>
                <div className="md:w-128 lg:w-128 border-l-2 border-gray-500/50 ml-4">
                  <p className="text-lg ml-2 leading-flow text-black">
                    I'm always learning something new. I'm currently
                    experimenting with deep learning concepts. I primarily use{" "}
                    <span className="text-[#84A60A]">Typescript</span> for my
                    full-stack projects, and{" "}
                    <span className="text-[#84A60A]">Python</span> for my
                    machine-learning ones. Check out my résumé and GitHub to
                    learn more about my work. Or shoot me a message, I love connecting with people!
                  </p>
                </div>
                <p className="mt-2 text-[#84A60A] text-lg tracking-wide">
                  {"</p>"}
                </p>
              </div>
            </div>
            <p className="mt-2 text-lg text-[#84A60A] tracking-wide">
              {"</div>"}
            </p>
          </motion.div>
          <motion.div
            whileHover={{ translateY: -7 }}
            className="sm:mx-auto md:mx-0 lg:mx-0 py-4 px-4 sm:px-0 md:px-0 lg:px-0"
          >
            <Image
              alt="ojas singh"
              height="450px"
              width="325px"
              className="rounded-midxl object-cover"
              src={ojas}
            />
            <p className="text-center text-[#84A60A]">
              {"<img src='handsome-guy.png'>"}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Intro;
