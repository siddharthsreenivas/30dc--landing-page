import React from "react";

function About() {
  return (
    <div className="p-3 flex flex-col items-center justify-center py-6 pb-14 lg:flex-row lg:px-10 xl:px-16 xl:w-[90%] xl:mx-auto">
      <div className="flex flex-col items-center lg:items-start gap-10 mb-16 lg:w-1/2">
        <div className="flex flex-col gap-6 items-center justify-center lg:items-start">
          <h1 className="text-3xl font-bold tracking-tight uppercase sm:text-4xl lg:text-5xl 2xl:text-6xl text-gray-950 text-center lg:text-left sm:max-w-[450px] lg:max-w-[560px] xl:max-w-[600px]">
            Gain a competitive edge in job market
          </h1>
          <p className="max-w-xl mx-auto lg:m-0 -mt-2 text-base font-normal leading-7 text-gray-600 lg:leading-9 lg:text-xl sm:text-lg sm:leading-8 text-center lg:text-left">
            Join founders, freelancers, designers, FAANG engineers, indie
            hackers, and more in our 24/7 WhatsApp Group for less than a cup of
            coffee.
          </p>
        </div>
        <div className=" flex flex-col lg:w-full xl:w-auto ">
          <p className="text-sm font-bold tracking-widest uppercase sm:text-base text-primary-600 mt-3 text-center mb-6 lg:text-left">
            WHAT YOU'LL GET
          </p>
          <div className="flex flex-col text-center gap-5 md:flex-row lg:flex-col lg:justify-center md:gap-11">
            <div className="flex flex-col  lg:flex-row items-center gap-4 md:w-24 lg:w-full">
              <img className="w-6" src="images/icon-guides-2.svg" alt="" />
              <p>Comprehensive guides, projects, & courses</p>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-4 md:w-24 lg:w-full">
              <img className="w-6" src="images/icon-job.svg" alt="" />
              <p>Exclusive job + internship postings</p>
            </div>
            <div className="flex flex-col lg:flex-row  items-center gap-4 md:w-24 lg:w-full">
              <img className="w-6" src="images/icon-tips.svg" alt="" />
              <p>1:1 Career guidance & mentorship</p>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:w-1/2">
        <img
          className="transition-all duration-200 hover:rotate-6 lg:w-full"
          src="images/illustration-job.svg"
          alt=""
        />
      </div>
    </div>
  );
}

export default About;
