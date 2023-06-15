import Image from "next/image";
import ojas from '../public/ojas2.jpg'
import { motion } from "framer-motion";

const About = () => {
    return(
      <div id='about' className='bg-[#0D0D0D]'>
          <h1 className='font-semibold text-[#BFF205]'>≫ more-about-me</h1>
          <div className="lg:flex pt-10 pb-20 lg:gap-10">
            <motion.div whileHover={{scale: 1.03, transition: {duration: 0.2}}} className="text-chalk lg:flex-1 lg:mx-0 md:w-128 lg:w-128  md:mx-10 text-lg rounded-midxl bg-black p-16 xs:p-8 leading-flow">
              <p>
                I am a currently a full-time student at the <span className="text-cyan-500">University of Toronto</span>, double majoring in <span className="text-cyan-500">physics and statistics.</span> I started building web applications about a year ago, and I fell in love with learning how to build scaleable, data-intensive projects. Here's a glance at my tech-stack:
              </p>
              <div className="flex pt-5">
                <ul className="lg:flex-1">
                  <li><span className="text-cyan-500">≫ Languages: </span>Typescript, Javascript, Python, Go, HTML/CSS, R, Java</li>
                  <li><span className="text-cyan-500">≫ Frameworks/Libraries:</span> Next.js, React, Node.js, Express.js, TensorFlow </li>
                  <li><span className="text-cyan-500">≫ Databases: </span>MongoDB, MySQL, PostgreSQL, Redis, DynamoDB</li>   
                  <li><span className="text-cyan-500">≫ Others: </span>Docker, Firebase, AWS, etc.</li>
                </ul>
              </div>
            </motion.div>
            <motion.div whileHover={{scale: 1.03, transition: {duration: 0.2}}}
              className=""
            >
              <Image height='500px' width='375px' className="flex-1 rounded-midxl" src={ojas}/>
            </motion.div>
          </div>
      </div>
    )
}

export default About;