import type { NextPage } from 'next'
import Navbar from '../components/Navbar';
import About from '../components/About';
import Projects from '../components/Projects';
import Intro from '../components/Intro';
import Navigation from '../components/Navigation';
import Experience from '../components/Experience/Experience';
import Footer from '../components/Footer';

const Home: NextPage = () => {
  return (
    <div className='overflow-x-clip h-screen scrollbar-thin scrollbar scrollbar-thumb-cyan-400 scrollbar-rounded-full'>
      <div className='bg-dark lg:flex md:flex-wrap'>
      <div className='flex-1 lg:fixed lg:right-10 lg:bottom-28 md:sticky xs:hidden'>
        <Navbar/>
      </div>
      <div className='flex-3'>
        <Intro/>
        <About/>
        <Experience/>
        <Projects/>
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Home
