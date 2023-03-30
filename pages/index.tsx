import type { NextPage } from "next";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Projects from "../components/Projects";
import Intro from "../components/Intro";
import Navigation from "../components/Navigation";
import Experience from "../components/Experience/Experience";
import Footer from "../components/Footer";
import App from "../components/Design";
import { motion } from "framer-motion";


const Home: NextPage = () => {



  return (
    <div className="overflow-x-clip h-screen scrollbar-thin scrollbar scrollbar-thumb-cyan-400 scrollbar-rounded-full">
      <div className="bg-dark lg:flex md:flex-wrap">
        <div className="">
          {/* <Navbar/> */}
          <App />

          <Intro />
          <About />
          <Experience />
          <Projects />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
