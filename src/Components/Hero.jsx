import React from "react";

const Hero = () => {
  return (
    <div className="px-3 py-8 lg:px-8 space-y-6 lg:py-14">
      <div className="flex flex-col items-center gap-8 lg:flex-row">
        <div className="flex flex-col items-center gap-5">
          <h1 className="text-6xl tracking-tighter font-bold leading-none sm:text-7xl md:text-8xl lg:text-7xl xl:text-9xl text-primary-950 text-center lg:text-left">
            <span className="text-primary-500 font-splineMono ">ATTEND LIVE</span><br></br>CLASSES EVERY WEEK
          </h1>
          <p className="max-w-lg mx-auto mt-5 text-lg font-normal leading-8 text-gray-600 lg:max-w-[none] xl:max-w-[80%] xl:self-start lg:mx-0 sm:leading-8 2xl:leading-9 sm:text-xl 2xl:text-2xl lg:text-left">Join founders, freelancers, designers, FAANG engineers, indie hackers, and more in our 24/7 WhatsApp Group for less than a cup of coffee.</p>
          <button className='bg-primary-500 text-white px-5 rounded-full font-semibold py-3 hover:bg-primary-600 mx-2 transition-all duration-200'>Join 24/7 Whatsapp +  discord for $5/month</button>
        </div>

        <div className="w-full lg:max-w-lg lg:shrink-0 2xl:max-w-xl">
            <img src="https://github.com/singh1aryan/nextjs-prisma-sql/assets/31454667/9009ac7b-b0fb-4083-9f22-193e56c10f1c" loading="eager" alt="" className="w-full" />
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-6 px-4 lg:p-8 font-semibold text-gray-800">
        <div className="flex gap-3 items-center ">
            <img src="images/icon-guides.svg" />
            <p>5+ Guides for Free</p>
        </div>

        <div className="flex gap-3 items-center ">
            <img src="images/icon-courses.svg" />
            <p>Exclusive Courses & Projects</p>
        </div>

        <div className="flex gap-3 items-center ">
            <img src="images/icon-whatsapp.svg" />
            <p>24/7 WhatsApp Support Group</p>
        </div>

        <div className="flex gap-3 items-center ">
            <img src="images/icon-sessions.svg" />
            <p>1:1 Free Session</p>
        </div>

      </div>
    </div>
  );
};

export default Hero;
