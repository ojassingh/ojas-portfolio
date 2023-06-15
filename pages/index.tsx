import type { NextPage } from "next";
import Navbar from "../components/Navbar/Navbar";
import Projects from "../components/Projects";
import Intro from "../components/Intro";
import Experience from "../components/Experience/Experience";
import Footer from "../components/Footer";
import Front from "../components/Front";

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
