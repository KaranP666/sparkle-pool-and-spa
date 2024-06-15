import React from "react";
import HeroBannerImage from "../assets/images/hero.jpg";

const Home = () => {
  return (
    <div
      id="home"
      className="relative flex flex-col lg:flex-row items-center p-5 mb-0"
    >
      <div className="lg:w-1/2 sm:ml-[200px]">
        <p className="text-[#2563eb] font-semibold text-[26px]">
          Sparkle Pool and Spa
        </p>
        <p className="font-bold text-[40px] lg:text-[60px] my-[30px] mb-[23px]">
          Save Time. Love your <br />
          <span className="text-[#2563eb]">Pool </span> and Spa.
        </p>
        <a
          href="/service-request"
          className="inline-flex items-center text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Service Request
        </a>
        <p className="font-semibold text-blue-500 opacity-10 hidden lg:block text-[200px]">
          Sparkle
        </p>
      </div>
      <div className="lg:w-1/2 flex justify-center lg:justify-end relative mt-6 lg:mt-0">
        <img
          src={HeroBannerImage}
          alt="hero-banner"
          className="w-full max-w-[600px] lg:rounded-bl-[70px]"
        />
      </div>
    </div>
  );
};

export default Home;
