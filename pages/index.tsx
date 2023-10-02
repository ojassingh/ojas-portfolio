import type { NextPage } from "next";
import Navbar from "../components/Navbar/Navbar";
import Projects from "../components/Projects/Projects";
import Intro from "../components/Intro";
import Experience from "../components/Experience/Experience";
import Footer from "../components/Footer";
import Front from "../components/Front";
import Head from "next/head";
import { HandWaving } from "@phosphor-icons/react";
import Script from "next/script";

const Home: NextPage = () => {

  return (
    <div className="">
      <Head>
        <title>Ojas Singh</title>
        <meta name="description" content="Ojas Singh's Portfolio" />
        <link rel="icon" href="/hand-waving.png"/>
      </Head>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_MEASUREMENT_ID}`} async={true} />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', '${process.env.GA_MEASUREMENT_ID}');
        `}
      </Script>

       <div className="hidden md:block lg:block">
        <Navbar/>
        </div>
        <Front />
        <Intro />
        <Experience />
        <Projects />
      <Footer />
    </div>
  );
};

export default Home;
