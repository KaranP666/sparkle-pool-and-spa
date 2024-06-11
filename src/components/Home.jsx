import React from 'react'
import HeroBannerImage from '../assets/images/hero.jpg'

import swimming from '../assets/icons/swimming.png'

const Home = () => {
  return (
    <div id='home' className="relative flex flex-col lg:flex-row items-center  p-5">
    <div className="lg:w-1/2 sm:ml-[200px]">
      <p className="text-[#2563eb] font-semibold text-[26px]">
      Sparkle Pool and Spa 
      </p>
      <p className="font-bold text-[40px] lg:text-[60px] my-[30px] mb-[23px]">
      Save Time. Love your  <br />
      <span className='text-[#2563eb]'>Pool </span> and Spa.
      </p>
      {/* <p className="text-[22px] font-[Alegreya] leading-[35px] mb-4">
      Pool and Spa.
      </p> */}
      {/* <Link to="#service-request" className="bg-[#2563eb] text-white font-medium py-2.5 px-4 rounded-lg hover:bg-gray-600">
      Service Request
      </Link> */}
      <a href='#service-request' className='inline-flex items-center text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>
  Service Request
  <img className='ml-2 h-4 w-4' src={swimming} alt='swimming icon' />
</a>

    </div>
    <div className="lg:w-1/2 flex justify-center lg:justify-end relative">
      <img src={HeroBannerImage} alt="hero-banner" className="lg:w-[600px] lg:right-1" />
    </div>
  </div>

  )
}

export default Home