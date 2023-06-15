import Image from "next/image";
import safari from '../public/safari_template.png'
import { motion } from "framer-motion";
import {Carousel} from 'flowbite-react'
import { useState } from "react";
import { UilArrowUpRight, UilGithub} from '@iconscout/react-unicons'
import Link from "next/link";

const Projects = () => {

    
  const [state, setState] = useState(false);

  type Project = {
    id: number, 
    name: string, 
    link: string,
    github: string,
    description: string,
    techStack: string,
    note?: string
  }

    let featured: Project = {
      id: 1,
      name: "Sentiment Analysis Bot",
      link: "https://github.com/ojassingh/sentyblog",
      github: "https://github.com/ojassingh/sentyblog",
      description: "An app that recognises text sentiment, powered by Tensorflow.js ",
      techStack: "Typescript, Next.js, AWS Amplify, GraphQL, TensorFlow.js"
    }

    let project_list: Project[] = [
      {
        id: 6, 
        name: "Go Real-Time Chat App",  
        link: '#',
        github: "https://github.com/ojassingh/go-chat-app",
        description: 'A seamless real-time chat web application made with webhooks',
        techStack: 'Typescript, React, Pusher, Go, Gin'    
      },
      {
        id: 5, 
        name: "Simple Polling App",  
        link: '#',
        github: "https://github.com/ojassingh/polling-app",
        description: 'A polling/voting app inspired by rallly.co',
        techStack: 'Typescript, Next.js, Nest.js, PostgreSQL, CockroachDB'    
      },
      {
        id: 2, 
        name: "CRBN: RBC Innovation Challenge",  
        link: '#',
        github: "https://github.com/ojassingh/crbn",
        description: 'An e-commerce store built to make online shopping more sustainable',
        techStack: 'Typescript, Next.js, PostgreSQL, Prisma, GraphQL, Jira'    
      },
      {
        id: 3, 
        name: "Cloud Journal",  
        link:"#",
        github: "https://github.com/ojassingh/cloudblog",
        description: 'A personal journal on the cloud, built with AWS Amplify',
        techStack: 'Typescript, Next.js, GraphQL, DynamoDB, AWS'          
      },
      {
        id: 4, 
        name: "Astro News",  
        link: 'https://astronews-ojassingh.vercel.app/',
        github: "https://github.com/ojassingh/astronews",
        description: 'A space-launch info and space-news integrated web-application ',
        techStack: 'Typescript, Next.js, Tailwind, Docker, Vercel, NewsAPI.org'     
      },
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
      <div id='projects' className='p-20 bg-chalk'>
          <h1 className='text-[#152617] font-bold text-6xl px-20'>`Projects`</h1>
          <div id="general-projects" className="grid place-content-center py-10">
          <div id="featured-project" className="lg:w-155 md:w-128">
            <a href={featured.link} target='_blank'>
              <motion.div initial="rest" whileHover="hover"
              variants={slashMotion} 
              id="featured" className="bg-chalk rounded-midxl">
                <div>
                <motion.div variants={slashMotion} className="text-blue-700 z-20 px-20 pt-10 flex place-content-between font-semibold text-lg">
                  <p  className="">[01]</p>
                  <Link href={featured.github}><p className="scale-150"><UilGithub/></p></Link>
                  <p className="">Featured</p>
                </motion.div>
                <motion.h1  
                variants={textMotion} 
                className="h-40 z-0 h-55 text-blue-600  font-semibold text-6xl grid text-center grid place-content-center">{featured.name}</motion.h1>
                <div className="-mt-20 py-10 grid place-content-center text-center gap-2 px-10">
                  <p className="font-medium">{featured.techStack}</p>
                  <p>{featured.description}</p>
                  
                </div>
                <motion.div variants={slashMotion} className="text-blue-700  z-20 px-20 pb-10 flex place-content-between font-semibold text-lg">
                  <p className="">Check on GitHub</p>
                  <p className=""><UilArrowUpRight/></p>
                </motion.div>
                </div>
              </motion.div>
            </a>
          </div>

          <div id="other-project" className="lg:flex h-full lg:flex-wrap lg:mt-2 md:w-128 lg:w-155 lg:gap-2">

          {project_list.map((project, i)=>{

            let link = project.link;
            let canLaunch = true;

            if(project.link == "#"){
              link = project.github
              canLaunch = false;
            }

            return(
              <div key={i} className="lg:w-5000 xs:mt-3 lg:mt-0 md:mt-3">
                <a  href={link} target='_blank' className="">
              <motion.div initial="rest" whileHover="hover"
              variants={slashMotion} 
              id="featured" className="bg-extrablue/20 rounded-midxl h-full">
                <motion.div variants={slashMotion} className="z-20 px-20 pt-10 flex place-content-between font-semibold text-lg text-cyan-500">
                  <p className="">[0{i+2}]</p>
                  <Link href={project.github}><p className="scale-150"><UilGithub/></p></Link>
                </motion.div>
                <motion.h1  
                variants={textMotion} 
                className="h-40 z-0 text-chalk font-semibold text-5xl grid text-center grid place-content-center m-10">
                  {project.name}
                </motion.h1>
                <div className="-mt-4 pb-10 grid place-content-center text-cyan-400 text-center gap-4 px-10">
                  <p className="font-medium">{project.techStack}</p>
                  <p className="text-chalk">{project.description}</p>
                </div>

                {canLaunch && <motion.div variants={slashMotion} className="text-cyan-500 z-20 px-20 pb-10 flex place-content-between text-lg">
                  <p className="">Launch Project</p>
                  <p className=""><UilArrowUpRight/></p>
                </motion.div>}

                {!canLaunch && <motion.div variants={slashMotion} className="text-cyan-500 z-20 px-20 pb-10 flex place-content-between text-lg">
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