import expData from "./ExpData";
import { motion } from "framer-motion";


const Experience = () => {



  return (
    <div id="work" className="text-chalk min-h-screen p-20 px-40 bg-[#152617]">
      <motion.h1 whileHover={{translateY: -7}} className="text-[#BFF205] font-bold text-6xl">
        `Work Experience`
      </motion.h1>
      <div className="md:px-3">
        <div id="timeline" className="text-chalk grid gap-4 py-10">
          
          {expData.map((exp) => (
            <motion.div
            whileHover={{ translateY: -7 }}
            id="latest"
            className="px-20 py-10 rounded-midxl bg-chalk w-145 text-black"
          >
            <div
              id="border"
              className="description border-l-2 -ml-3"
            >
              <div className="px-2 ">
                <h3 className="text-blue-600 font-semibold text-2xl px-3">
                  {exp.title}
                </h3>
                <h4 className="px-4 text-[#0fab82] py-2">
                  {exp.date} | {exp.location}
                </h4>
                <div id="description" className="px-10">
                  <ul className="list-disc chalk pt-4 leading-flow text-md">
                    {exp.description.map((desc) => (
                      <li>
                        {desc}
                      </li>
                    ))}
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
