import { motion } from 'framer-motion';


const Navigation = () => {
    return(
        <div>
        <div className="flex gap-2">
            <motion.div whileHover={{scale: 0.97}} className="rounded-mid bg-secondary h-80 w-135">
                <motion.a whileHover={{scale: 0.97}} href="#projects" className=" h-80 grid place-content-center text-white font-medium">
                </motion.a>
            </motion.div>
            <div>
                <div className="flex gap-2">
                    <motion.div whileHover={{scale: 0.97}} className="bg-white h-40 w-60 rounded-mid">
                        <motion.a href='#experience' whileHover={{scale: 1.1}} className="grid place-content-center h-40 w-60 text-4xl text-black font-medium">Experience</motion.a>
                    </motion.div>
                    
                    <motion.div whileHover={{scale: 0.97}} className='bg-pinkish  rounded-mid h-40'>
                        <motion.a target='_blank' href='' whileHover={{scale: 1.1}} className="grid place-content-center h-40 w-60 text-4xl text-white font-medium">Resume</motion.a>
                    </motion.div>
                    
                </div>
                <div>
                    <motion.div whileHover={{scale: 0.98}} className="mt-2 h-40  bg-orange rounded-mid">
                        <motion.a whileHover={{scale: 1.05}} className='h-40 grid place-content-center text-4xl text-white font-medium'>Get in touch with me.</motion.a>
                    </motion.div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Navigation;