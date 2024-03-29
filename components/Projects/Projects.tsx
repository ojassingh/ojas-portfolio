import Image from "next/image";
import safari from '../public/safari_template.png'
import { motion } from "framer-motion";
import {Carousel} from 'flowbite-react'
import { useState } from "react";
import { UilArrowUpRight, UilGithub} from '@iconscout/react-unicons'
import Link from "next/link";
import { featured, project_list } from "./ProjData";

const Projects = () => {

    
  const [state, setState] = useState(false);

  

    const slashMotion = {
      rest: { opacity: 1.0, ease: "easeOut", duration: 0.2, type: "tween" },
      hover: {
        scale: 0.97,
        transition: { type: "spring", duration: 0.8, ease: "linear" }
      }
    };

    const textMotion = {
      rest: {
        x: 0,
        transition: {
          duration: 4,
          type: "tween",
          ease: "easeIn"
        }
      },
      hover: {
        scale: 1.07,
        transition: { type: "spring", duration: 0.8 }
      }
    };

    return(
      <div id='projects' className='py-10 bg-chalk lg:px-20 sm:px-20 px-4 md:px-20'>
          <motion.h1 whileHover={{translateY: -7}} className='text-[#152617] font-bold text-5xl sm:text-6xl md:text-6xl lg:text-7xl px-6'>Projects</motion.h1>
          <div id="general-projects" className="grid place-content-center py-10">
          <div id="featured-project" className="lg:w-155 md:w-128">
            <a href={featured.link} target='_blank'>
              <motion.div initial="rest" whileHover="hover"
              variants={slashMotion} 
              id="featured" className="bg-white rounded-midxl shadow-lg">
                <div>
                <motion.div variants={slashMotion} className="text-blue-600 z-20 px-10 sm:px-20 md:px-20 lg:px-20 pt-10 flex place-content-between font-semibold text-lg">
                  <p  className="">[01]</p>
                  <Link href={featured.github}><p className="scale-150"><UilGithub/></p></Link>
                  <p className="">Featured</p>
                </motion.div>
                <motion.h1  
                variants={textMotion} 
                className="h-40 z-0 h-55 text-blue-600  font-semibold text-4xl sm:text-6xl md:text-6xl lg:text-6xl grid text-center grid place-content-center">{featured.name}</motion.h1>
                <div className="-mt-20 py-10 grid place-content-center text-center gap-2 px-10">
                  <p className="font-medium">{featured.techStack}</p>
                  <p>{featured.description}</p>
                  
                </div>
                <motion.div variants={slashMotion} className="text-blue-600  z-20 px-10 sm:px-20 md:px-20 lg:px-20 pb-10 flex place-content-between font-semibold text-lg">
                  <p className="">Check on GitHub</p>
                  <p className=""><UilArrowUpRight/></p>
                </motion.div>
                </div>
              </motion.div>
            </a>
          </div>

          <div id="other-project" className="md:flex lg:flex md:flex-wrap lg:flex-wrap gap-2 mt-2 sm:w-full md:w-128 lg:w-155 place-content-center">

          {project_list.map((project, i)=>{

            let link = project.link;
            let canLaunch = true;

            if(project.link == "#"){
              link = project.github
              canLaunch = false;
            }

            return(
              <div key={i} className="lg:w-5000 mt-2 sm:mt-4 md:mt-0 lg:mt-0 sm:mt-0 lg:mt-0 md:mt-3">
                <a  href={link} target='_blank' className="">
              <motion.div initial="rest" whileHover="hover"
              variants={slashMotion} 
              id="featured" className="bg-white shadow-lg rounded-midxl h-full">
                <motion.div variants={slashMotion} className="z-20 px-10 sm:px-20 md:px-20 lg:px-20 pt-10 flex place-content-between font-semibold text-lg text-blue-600">
                  <p className="">[0{i+2}]</p>
                  <Link href={project.github}><p className="scale-150"><UilGithub/></p></Link>
                </motion.div>
                <motion.h1  
                variants={textMotion} 
                className="h-40 z-0 text-blue-600 font-semibold text-4xl sm:text-5xl md:text-5xl lg:text-5xl grid text-center grid place-content-center m-10">
                  {project.name}
                </motion.h1>
                <div className="-mt-4 pb-10 grid place-content-center text-black text-center gap-4 px-10">
                  <p className="font-medium">{project.techStack}</p>
                  <p className="text-black">{project.description}</p>
                </div>

                {canLaunch && <motion.div variants={slashMotion} className="text-blue-600 z-20 px-10 sm:px-20 md:px-20 lg:px-20 pb-10 flex place-content-between text-lg">
                  <p className="">Launch Project</p>
                  <p className=""><UilArrowUpRight/></p>
                </motion.div>}

                {!canLaunch && <motion.div variants={slashMotion} className="text-blue-600 z-20 px-10 sm:px-20 md:px-20 lg:px-20 pb-10 flex place-content-between text-lg">
                  <p className="">Check on GitHub</p>
                  <p className=""><UilArrowUpRight/></p>
                </motion.div>}

              </motion.div>
            </a>
              </div>
            )
          })}
          

          </div>
          </div>
      </div>
    )
}

export default Projects;