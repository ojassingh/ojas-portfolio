

const Experience = () => {
    return(<div id='work' className="text-chalk pb-10 md:px-16 lg:px-40 xs:px-4">
        <h1 className=' lg:text-6xl md:text-5xl text-white text-chalk font-bold xs:text-3xl '>≫ work-experience</h1>  
        <div className='md:px-3'>
        <div id='timeline' className='text-chalk'>
                    <div id='latest' className='px-20 xs:px-4 pt-10 pb-6 rounded-midxl bg-black mt-10 lg:w-145 md:w-128'>
                    <div id='border' className='xs:pl-2 description xs:border-0 border-l-2 -ml-3'>
                        <div className='px-2 '>
                        <h3 className='text-blue-500 font-semibold text-2xl px-3'>Machine Learning Engineer @ Omdena</h3>
                        <h4 className='px-4 text-projtext/80 py-2'>Sept 2020 - Dec 2020 • Part-time</h4>
                            <div id='description' className='px-10'>
                                <ul className='list-disc chalk pt-4 leading-flow text-md'>
                                    <li>Modelled parameters of economic "well-being" through machine learning and satellite imagery</li>
                                    <li>Collaborated with ActiveLoop and the World Resource Institute (WRI) to access labelled data and create ML Pipelines. </li>
                                    <li>Researched Sentinel-2, OSM, SOI data, etc. to find patters in parameters.</li>
                                    <li>Pre-processed the provincial Census and HDI data for pattern-recognition.</li>
                                    <li>Implemented support Vector Machine modelling of HDI data for district-wise mapping.</li>
                                </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                <div id='2' className=''>
                    <div id='2' className='px-20 xs:px-4  py-10 rounded-midxl bg-black mt-2 lg:w-145 md:w-128'>
                  <div id='border' className='xs:pl-2 description xs:border-0 border-l-2 -ml-3'>
                        <div className='px-2'>
                        <h3 className='text-blue-500 font-semibold text-2xl px-3'>Data Science Intern @ MEIT</h3>
                        <h4 className='px-4 text-projtext/80'>Sept 2020 - Dec 2020 • Full-time </h4>
                        <div id='description' className='px-10'>
                                <ul className='list-disc text-chalk pt-4 leading-flow text-md'>
                                    <li>Pre-processed a dataset of 2000+ images of cards using SciKit-Image.</li>
                                    <li>Trained and deployed a Faster Region Based Convolutional Neural Network (Faster R-CNN) model for object-detection. </li>
                                    <li>Developed a proof-of-concept to deploy this model on CCTV footages via Pytorch.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
        </div>
    </div>)
}

export default Experience;