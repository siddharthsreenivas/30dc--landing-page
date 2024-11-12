import React from 'react'

const dataList = [
    {
        id: 1,
        msg: '"This community has been a game-changer for my career. The exclusive courses and personalized guidance from expert mentors have helped me take my coding skills to the next level."',
        pic: "images/avatars/avatar-aryan.webp",
        name: "Aryan Singh",
        job: "SWE at Google",
    },
    {
        id: 2,
        msg: '"The exclusive courses and bi-weekly live sessions have been incredibly insightful, and collaborating on open-source projects has been a great way to build my portfolio. I highly recommend this community."',
        pic: "images/avatars/avatar-kevin.webp",
        name: "Kevin Smith",
        job: "SWE at Tesla",
    },
    {
        id: 3,
        msg: '"Joining this community was one of the best decisions I\'ve made for my career. The 24/7 WhatsApp group has been an incredible resource for networking and collaboration. I highly recommend this community"',
        pic: "images/avatars/avatar-umang.webp",
        name: "Umang Chaudhary",
        job: "SWE at Tiktok",
    },
]
function Testimonials() {
  return (
    <div className='flex justify-center py-20' id='testimonials'>
        <div className='grid grid-cols-1 lg:grid-cols-3 max-w-lg lg:max-w-5xl 2xl:max-w-7xl gap-10 lg:gap-14 px-4 lg:px-8'>
            {
                dataList.map((data)=>(
                    <div className='flex flex-col items-center gap-4 text-center lg:border rounded-2xl p-4 lg:hover:shadow-lg py-8'>
                        <div className='overflow-hidden hover:-translate-y-2 border rounded-full w-28 lg:w-32 transition-all duration-200'>
                            <img src={data.pic} className='rounded-full w-28 lg:w-32 hover:shadow-2xl hover:scale-110  transition-all duration-200'/>
                        </div>  
                            <p className='text-gray-600'>{data.msg}</p>
                            <div>
                            <h1 className='font-bold text-black'>{data.name}</h1>
                            <p className='text-gray-600'>{data.job}</p>
                            </div>

                        <div className='flex gap-1'>
                            <img src="images/icon-star.svg" alt="" />
                            <img src="images/icon-star.svg" alt="" />
                            <img src="images/icon-star.svg" alt="" />
                            <img src="images/icon-star.svg" alt="" />
                            <img src="images/icon-star.svg" alt="" />
                        </div>
                    </div>
                ))
            }

        </div>
    </div>
  )
}

export default Testimonials
