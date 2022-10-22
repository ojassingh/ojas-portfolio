import Image from "next/image";
import safari from '../public/safari_template.png'
import { motion } from "framer-motion";

const Projects = () => {
    return(
      <div id='projects' className='h-screen rounded-xl bg-dark'>
        <div className='py-20 px-20'>
          <h1 className='px-20 text-6xl text-white text-chalk text-right font-bold'>selected works [4]</h1>
          <div id="1st-work" className="px-20 mt-10">
              <h1 className='text-4xl text-white text-chalk text-left font-bold'>[1] ACE U full-stack web app</h1>
              <div className="rounded-lg mt-10 grid place-content-evenly">
                <motion.div whileHover={{translateY: -10}} ><Image className="rounded-lg" height='450' width='661' src={safari}/></motion.div>
              </div>
          </div>
        </div>
      </div>
    )
}

export default Projects;