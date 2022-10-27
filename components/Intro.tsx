import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import { UilLinkedin, UilGithub, UilEnvelopeAlt, UilFileInfoAlt} from '@iconscout/react-unicons'

const Intro = () => {
    return(
      <div id='home' className='h-screen py-20 mt-20'>
        <motion.div whileHover={{translateY: -5}}  className='px-40 flex text-black'>
        <motion.h1 className='text-chalk text-7xl font-bold mr-4'>{"ojassingh≫ "}</motion.h1>
        <h1 className='text-7xl text-blue-500 font-bold'><Typewriter
            onInit={(typewriter) => {
              
              typewriter
                .changeDelay(50)
                .typeString("hi, I'm Ojas!")
                .pauseFor(1000)
                .deleteAll(50)
                .typeString("a student?")
                .pauseFor(1000)
                .deleteAll(50)
                .typeString("full-stack dev?")
                .pauseFor(1000)
                .deleteAll(50)
                .typeString("batman?")
                .pauseFor(1000)
                .deleteAll(50)
                .typeString("Namaste :)")
                .start();
            }}
        /></h1>
        </motion.div>
        <motion.div  whileHover={{translateY: -7}}  className='ml-3 mt-10 px-40 '>
          <p className='mt-3 text-lg text-blue-500 tracking-wide'>{"<div id='super-cool-description' >"}</p>
            <div className='mt-3 ml-6 border-l-2 border-gray-500/50'>
                <h3 className='ml-4 mt-2 text-lg text-blue-500 tracking-wide'>
                    {/* {"<h3>"} <span className='text-2xl font-medium '>I love building impactful web applications.</span> {"</h3>"} */}
                    {"<h3>"} <span className=' text-chalk  text-2xl font-normal '>your friendly neighbourhood full-stack developer.</span> {"</h3>"}
                </h3>

                <div id='description' className='text-chalk  ml-4'>
                  <p className='text-lg text-blue-500 tracking-wide'>
                      {"<p>"}
                  </p>  
                  <div className='w-128 border-l-2 border-gray-500/50 ml-4'>
                    <p className='text-lg ml-2 text-md leading-flow'>My name is Ojas Singh, and I am a full-stack developer and student based in Toronto. I have a vested interest in deep learning, cooking and playing tennis. Fun fact: I make amazing butter chicken and I own a pair of Crocs with Lightening McQueen jibbitz.</p>
                  </div>
                  <p className='mt-2 text-blue-500 text-lg tracking-wide'>
                      {"</p>"}
                  </p>  
                </div>
            </div>
          <p className='mt-2 text-lg text-blue-500 tracking-wide'>{"</div>"}</p>
        </motion.div>
        <motion.div className='flex ml-3 m-10 px-40 '>
          <p className='flex-1 text-chalk text-lg'>Let's connect. Here are my socials: </p>
          <div className='flex-1'>
          <div className='flex scale-175 text-blue-500'>
              <motion.a target="_blank" href='https://www.linkedin.com/in/ojas-singh/' whileHover={{translateY: -4}} className='mr-1'><UilLinkedin/></motion.a>
              <motion.a target="_blank" href='https://github.com/ojassingh/' whileHover={{translateY: -4}} className='mr-1'><UilGithub/></motion.a>
              <motion.a target="_blank" href='mailto:ojas.singh02@gmail.com' whileHover={{translateY: -4}} className='mr-1'><UilEnvelopeAlt/></motion.a>
              <motion.a target="_blank" href='gdrive_resume' whileHover={{translateY: -4}} className='mr-1'><UilFileInfoAlt/></motion.a>
          </div>
          </div>
        </motion.div>
      </div>
    )
}

export default Intro;

