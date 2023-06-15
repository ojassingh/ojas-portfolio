import type { NextPage } from "next";
import Navbar from "../components/Navbar/Navbar";
import About from "../components/About";
import Projects from "../components/Projects";
import Intro from "../components/Intro";
import Navigation from "../components/Navigation";
import Experience from "../components/Experience/Experience";
import Footer from "../components/Footer";
import App from "../components/App";
import Front from "../components/Front";
import { motion } from "framer-motion";

const Home: NextPage = () => {
  return (
    <div className="">
      <div>
        <Navbar/>
        <Front />
        <Intro />
        <Experience />
        <Projects />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
