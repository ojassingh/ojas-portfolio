import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import {
  UilLinkedin,
  UilGithub,
  UilEnvelopeAlt,
} from "@iconscout/react-unicons";
import { useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";
import ojas from '../public/ojas2.jpg'
import { NextPage } from "next";


const Front: NextPage = () => {


    const links = [
        {
            id: 1, 
            name: 'Résumé',
            link: 'https://drive.google.com/file/d/1MrYvjcWwpSkWKQgB75qmeEzCmfNQxJWz/view?usp=sharing',
            icon: null
        },
        {
            id: 2, 
            name: 'LinkedIn',
            link: 'https://www.linkedin.com/in/ojas-singh/',
            icon: <UilLinkedin/>
        },
        {
            id: 3,
            name: 'Github',
            link: 'https://github.com/ojassingh',
            icon: <UilGithub/>
        },
        {
            id: 4,
            name: 'Email',
            link: 'mailto:ojas.singh02@gmail.com',
            icon: <UilEnvelopeAlt/>
        }
    ]

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="grid place-content-center h-screen bg-[#152617]">
      <motion.div className="text-[#BFF205] text-9xl font-medium flex tracking-tighter"
        whileHover={{ translateY: -7 }}
      >
        <h1>Ojas {"{Singh}"}</h1>
        <Typewriter
            onInit={(typewriter) => {
                typewriter
                .typeString('')
                  .pauseFor(2500)
                  .deleteAll()
                  .start();
              }}
        />
      </motion.div>
      <div id="contacts" className="mx-auto p-10 mt-10 text-[#84A60A] grid place-content-center gap-8">
        <p className="mx-auto">Student at the University of Toronto with strong fundamentals in full-stack development.</p>

        <div className="flex gap-8 scale-110 mx-auto">
           {links.map((link) => (
                <motion.div whileHover={{translateY: -3}} className="">
                    {link.icon && <a target="_blank" href={link.link} className="flex gap-2">{link.icon}</a>}
                    {!link.icon && <a target="_blank" href={link.link} className="flex gap-2">{link.name}</a>}
                </motion.div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default Front;
