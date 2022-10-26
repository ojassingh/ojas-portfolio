import type { NextPage } from 'next'
import Navbar from '../components/Navbar';
import About from '../components/About';
import Projects from '../components/Projects';
import Intro from '../components/Intro';
import Navigation from '../components/Navigation';
import Experience from '../components/Experience';

const Home: NextPage = () => {
  return (
    <div className='grid gap-2'>
      <Intro/>
      {/* <Navigation/> */}
      <Projects/>
      <Experience/>
    </div>
  )
}

export default Home
