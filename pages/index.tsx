import type { NextPage } from 'next'
import Navbar from '../components/Navbar';
import About from '../components/About';
import Projects from '../components/Projects';
import Intro from '../components/Intro';
import Navigation from '../components/Navigation';

const Home: NextPage = () => {
  return (
    <div>
      <Intro/>
      <Navigation/>
      <Projects/>
    </div>
  )
}

export default Home
