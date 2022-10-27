import type { NextPage } from 'next'
import Navbar from '../components/Navbar';
import About from '../components/About';
import Projects from '../components/Projects';
import Intro from '../components/Intro';
import Navigation from '../components/Navigation';
import Experience from '../components/Experience';
import Footer from '../components/Footer';

const Home: NextPage = () => {
  return (
    <div className='overflow-x-clip h-screen scrollbar-thin scrollbar scrollbar-thumb-projcomp scrollbar-rounded-full'>
      <div className='bg-dark flex'>
      <div className='flex-3'>
        <Intro/>
        <About/>
        <Experience/>
        <Projects/>
      </div>
      <div className='flex-1 fixed right-10 bottom-28'>
        <Navbar/>
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Home
