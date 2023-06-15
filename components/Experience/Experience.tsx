import expData from "./ExpData";
import { motion } from "framer-motion";


const Experience = () => {



  return (
    <div id="work" className="text-chalk min-h-screen md:py-20 lg:py-20 md:px-20 lg:px-20 bg-[#152617] py-10">
      <motion.h1 whileHover={{translateY: -7}} className="text-[#BFF205] font-bold md:text-6xl lg:text-6xl text-5xl px-10 sm:px-20 md:px-10 lg:px-10">
        Experiences
      </motion.h1>
      <div className="">
        <div id="timeline" className="text-chalk grid gap-4 py-10 px-4 sm:px-20 md:px-40 md:mr-40 lg:px-40">
          
          {expData.map((exp) => (
            <motion.div
            key={exp.id}
            whileHover={{ translateY: -7 }}
            id="latest"
            className="md:px-20 lg:px-20 sm:px-16 px-10 py-10 rounded-midxl bg-chalk text-black"
          >
            <div
              id="border"
              className="description border-l-2 -ml-3"
            >
              <div className="">
                <h3 className="text-blue-600 font-semibold text-2xl px-3">
                  {exp.title}
                </h3>
                <h4 className="px-4 text-[#0fab82] py-2">
                  {exp.date} | {exp.location}
                </h4>
                <div id="description" className="md:px-10 lg:px-10 px-4">
                  <ul className="list-disc chalk pt-4 leading-flow text-md">
                    {exp.description.map((desc, i)=>{
                        return(
                          <li key={i}>
                            {desc}
                          </li>
                        )
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
