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
      <div id='projects' className='rounded-xl bg-dark'>

          <h1 className='px-40 pt-20 text-6xl text-white text-chalk text-right font-bold'>selected-works [4]</h1>
          <div id="general-projects" className="m-20">
          <div id="featured-project">
            <a href="https://www.youtube.com" target='_blank'>
              <motion.div initial="rest" whileHover="hover"
              variants={slashMotion} 
              id="featured" className="bg-chalk rounded-midxl">
                <div>
                <div className="text-blue-700 z-20 px-20 pt-10 flex place-content-between font-semibold text-lg">
                  <p className="">[01]</p>
                  <Link href="youtube.com"><p className="scale-150"><UilGithub/></p></Link>
                  <p className="">Featured</p>
                </div>
                <motion.h1  
                variants={textMotion} 
                className="h-40 z-0 h-55 text-blue-700  font-semibold text-6xl grid text-center grid place-content-center">ACE U</motion.h1>
                <div className="-mt-20 py-10 grid place-content-center text-center">
                  <p>Hello</p>
                </div>
                <div className="text-blue-700  z-20 px-20 pb-10 flex place-content-between font-semibold text-lg">
                  <p className="">Launch Project</p>
                  <p className=""><UilArrowUpRight/></p>
                </div>
                </div>
              </motion.div>
            </a>
          </div>

          <div id="other-project" className="flex flex-wrap mt-2 gap-2">

          {project_list.map((project, i)=>{
            return(
              <a key={project.id} href={project.link} target='_blank' className="w-5000">
              <motion.div initial="rest" whileHover="hover"
              variants={slashMotion} 
              id="featured" className="bg-blue-900 rounded-midxl">
                <div className="z-20 px-20 pt-10 flex place-content-between font-semibold text-lg text-projtext">
                  <p className="">[0{i+2}]</p>
                  <Link href={project.link}><p className="scale-150"><UilGithub/></p></Link>
                </div>
                <motion.h1  
                variants={textMotion} 
                className="h-40 z-0 text-chalk font-semibold text-5xl grid text-center grid place-content-center">
                  {project.name}
                </motion.h1>
                <div className="-mt-4 pb-10 grid place-content-center text-projtext text-center">
                  <p className="font-medium">{project.techStack}</p>
                </div>
                <div className="text-projtext z-20 px-20 pb-10 flex place-content-between text-lg">
                  <p className="">Launch Project</p>
                  <p className=""><UilArrowUpRight/></p>
                </div>
              </motion.div>
            </a>
            )
          })}
          

          </div>
          </div>
      </div>
    )
}

export default Projects;