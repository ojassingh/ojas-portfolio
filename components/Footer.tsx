import { motion } from "framer-motion";
import { UilLinkedin, UilGithub, UilEnvelopeAlt} from '@iconscout/react-unicons'

const Footer = () => {
    return(<div className="bg-dark py-10 px-40  grid place-content-center">
        {/* <h1 className="text-white">Hello</h1> */}
        <div className="flex text-center text-gray-500 scale-150 py-3">
            <motion.a target="_blank" href='https://www.linkedin.com/in/ojas-singh/' whileHover={{translateY: -4}} className='mr-1 text-center'><UilLinkedin/></motion.a>
            <motion.a target="_blank" href='https://github.com/ojassingh/' whileHover={{translateY: -4}} className='mr-1'><UilGithub/></motion.a>
            <motion.a target="_blank" href='mailto:ojas.singh02@gmail.com' whileHover={{translateY: -4}} className='mr-1'><UilEnvelopeAlt/></motion.a>
        </div>
        <p className="py-1 text-gray-500 text-center">Built by Ojas Singh with ❤️</p>
        <p className="py-1 text-gray-500 text-center">All rights reserved. ©</p>
    </div>)
}

export default Footer;