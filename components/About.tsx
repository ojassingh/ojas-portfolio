import Image from "next/image";
import ojas from '../public/ojas2.jpg'
import { motion } from "framer-motion";

const About = () => {
    return(
      <div id='about' className='px-40 -mt-20'>
          <h1 className='text-6xl text-chalk font-semibold'>≫ more-about-me</h1>
          <div className="flex pt-10 pb-20 gap-10">
            <motion.div whileHover={{scale: 1.03, transition: {duration: 0.2}}} className="text-chalk flex-1 w-128 text-lg rounded-midxl bg-black p-16 leading-flow">
              <p>
                I am a currently a full-time student at the <span className="text-blue-500">University of Toronto</span>, double majoring in <span className="text-blue-500">physics and statistics.</span> I started building web applications about a year ago, and I fell in love with learning how to build scaleable, data-intensive projects. Here's a glance at my tech-stack:
              </p>
              <div className="flex pt-5">
                <ul className="flex-1">
                  <li><span className="text-blue-500">≫ Languages: </span>Typescript, Javascript, Python, Go, HTML/CSS</li>
                  <li><span className="text-blue-500">≫ Framworks/Libraries:</span> Next.js, React, Node.js, Express.js, TensorFlow </li>
                  <li><span className="text-blue-500">≫ Databases: </span>MongoDB, MySQL, Postgresql, Redis</li>   
                  <li><span className="text-blue-500">≫ Others: </span>Docker, Firebase, AWS</li>
                </ul>
              </div>
            </motion.div>
            <motion.div whileHover={{scale: 1.03, transition: {duration: 0.2}}}>
              <Image height='500px' width='375px' className="flex-1 rounded-midxl" src={ojas}/>
              <p className="text-center text-projcomp">{"<img src='super-handsome-guy.png'>"}</p>
            </motion.div>
          </div>
      </div>
    )
}

export default About;