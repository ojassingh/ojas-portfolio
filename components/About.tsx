import Image from "next/image";
import ojas from '../public/ojas2.jpg'

const About = () => {
    return(
      <div id='about' className='bg-black h-screen'>
        <div className='py-20 px-20'>
          <h1 className='px-20 text-6xl text-white text-right font-semibold'>Get to know me?</h1>
          <div className="flex">
              <Image height='450px' width='337px' className="rounded-lg" src={ojas}/>
              <div>
                <p>
                  
                </p>
              </div>
          </div>
        </div>
      </div>
    )
}

export default About;