import { data } from "autoprefixer";
import React from "react";

const dataList = [
  {
    id: 1,
    image: "images/illustration-mentors.svg",
    title: "EXPERT MENTORS",
    desc: "Get personalized guidance from expert mentors to take your coding skills to the next level.",
  },
  {
    id: 2,
    image: "images/illustration-networking.svg",
    title: "NETWORKING",
    desc: "Connect with like-minded coders from around the world and collaborate on exciting projects.",
  },
  {
    id: 3,
    image: "images/illustration-courses.svg",
    title: "COURSES",
    desc: "Exclusive courses in Full Stack, AI, Blockchain, and more to help you stay ahead of the curve.",
  },
];

function Features() {
  return (
    <div className="p-3 flex flex-col items-center justify-center gap-6 mb-16 py-24" id="features">
      <h1 className="text-3xl font-bold tracking-tight uppercase sm:text-4xl lg:text-5xl 2xl:text-6xl text-gray-950 text-center sm:max-w-[450px] lg:max-w-[560px] xl:max-w-[700px]">
        EVERYTHING YOU NEED IN ONE COMMUNITY
      </h1>
      <p className="max-w-xl mx-auto -mt-2 text-base font-normal leading-7 text-gray-600 lg:leading-9 lg:text-xl sm:text-lg sm:leading-8 text-center">
        Unleashing your digital potential for lasting success
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 max-w-lg lg:max-w-5xl 2xl:max-w-7xl gap-12 lg:gap-14">
        {dataList.map((data) => (
          <div
            key={data.id}
            className="felx flex-col items-center text-center group space-y-6"
          >
            <div>
              <img
                src={data.image}
                className="mx-auto lg:group-hover:-translate-y-2 transition-all duration-200"
              />
            </div>
            <div className="space-y-3">
              <h1 className="text-gray-950 font-bold text-xl">{data.title}</h1>
              <p className="text-gray-600 text-base">{data.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-center  gap-x-6 gap-y-8 mt-12 lg:mt-14">

        <img className="w-auto h-7 sm:h-8 lg:h-10" src="images/company-logos/adobe.svg" />
        <img className="w-auto h-7 sm:h-8 lg:h-10" src="images/company-logos/airbnb.svg" />
        <img className="w-auto h-7 sm:h-8 lg:h-10" src="images/company-logos/figma.svg" />
        <img className="w-auto h-7 sm:h-8 lg:h-10" src="images/company-logos/framer.svg" />
        <img className="w-auto h-7 sm:h-8 lg:h-10" src="images/company-logos/google.svg" />
        <img className="w-auto h-7 sm:h-8 lg:h-10" src="images/company-logos/dropbox.svg" />

      </div>
    </div>
  );
}

export default Features;
