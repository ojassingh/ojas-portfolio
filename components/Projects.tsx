import Image from "next/image";
import safari from '../public/safari_template.png'
import { motion } from "framer-motion";
import {Carousel} from 'flowbite-react'
import { useState } from "react";
import { UilArrowUpRight, UilGithub} from '@iconscout/react-unicons'
import Link from "next/link";

const Projects = () => {

    
  const [state, setState] = useState(false);

    let project_list = [
      {
        id: 2, 
        name: "Project no. 1",  
        link: '#',
        github: "github.com/ojassingh",
        description: 'Enter description here...',
        techStack: 'PostgressQl, MongoDB, blah blah'    
      },
      {
        id: 3, 
        name: "Project no. 2",  
        link: '#',
        github: "github.com/ojassingh",
        description: 'Enter description here...',
        techStack: 'PostgressQl, MongoDB, blah blah'          
      },
      {
        id: 4, 
        name: "Project no. 3",  
        link: '#',
        github: "github.com/ojassingh",
        description: 'Enter description here...',
        techStack: 'PostgressQl, MongoDB, blah blah'     
      },
      {
        id: 5, 
        name: "Project no. 4",  
        link: '#',
        github: "github.com/ojassingh",
        description: 'Enter description here...',
        techStack: 'PostgressQl, MongoDB, blah blah'          
      }
    ];

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
      <div id='projects' className='mt-10 xs:px-4'>
          <h1 className='md:px-16 lg:px-40 text-6xl xs:text-3xl text-white text-chalk font-bold'>≫ selected-works</h1>
          <div id="general-projects" className="lg:px-40 md:px-16 pt-10 pb-20">
          <div id="featured-project" className="lg:w-155 md:w-128">
            <a href="https://www.youtube.com" target='_blank'>
              <motion.div initial="rest" whileHover="hover"
              variants={slashMotion} 
              id="featured" className="bg-chalk rounded-midxl">
                <div>
                <motion.div variants={slashMotion} className="text-blue-700 z-20 px-20 pt-10 flex place-content-between font-semibold text-lg">
                  <p  className="">[01]</p>
                  <Link href="youtube.com"><p className="scale-150"><UilGithub/></p></Link>
                  <p className="">Featured</p>
                </motion.div>
                <motion.h1  
                variants={textMotion} 
                className="h-40 z-0 h-55 text-blue-700  font-semibold text-6xl grid text-center grid place-content-center">ACE U</motion.h1>
                <div className="-mt-20 py-10 grid place-content-center text-center">
                  <p>Hello</p>
                </div>
                <motion.div variants={slashMotion} className="text-blue-700  z-20 px-20 pb-10 flex place-content-between font-semibold text-lg">
                  <p className="">Launch Project</p>
                  <p className=""><UilArrowUpRight/></p>
                </motion.div>
                </div>
              </motion.div>
            </a>
          </div>

          <div id="other-project" className="lg:flex lg:flex-wrap lg:mt-2 md:w-128 lg:w-155 lg:gap-2">

          {project_list.map((project, i)=>{
            return(
              <div key={project.id} className="lg:w-5000 xs:mt-3 lg:mt-0 md:mt-3">
                <a  href={project.link} target='_blank' className="">
              <motion.div initial="rest" whileHover="hover"
              variants={slashMotion} 
              id="featured" className="bg-extrablue/20 rounded-midxl">
                <motion.div variants={slashMotion} className="z-20 px-20 pt-10 flex place-content-between font-semibold text-lg text-projtext">
                  <p className="">[0{i+2}]</p>
                  <Link href={project.link}><p className="scale-150"><UilGithub/></p></Link>
                </motion.div>
                <motion.h1  
                variants={textMotion} 
                className="h-40 z-0 text-chalk font-semibold text-5xl grid text-center grid place-content-center">
                  {project.name}
                </motion.h1>
                <div className="-mt-4 pb-10 grid place-content-center text-projtext text-center">
                  <p className="font-medium">{project.techStack}</p>
                </div>
                <motion.div variants={slashMotion} className="text-projtext z-20 px-20 pb-10 flex place-content-between text-lg">
                  <p className="">Launch Project</p>
                  <p className=""><UilArrowUpRight/></p>
                </motion.div>
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