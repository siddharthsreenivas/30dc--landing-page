import React from 'react'

function Pricing() {
  return (
    <div className='p-3 py-24 flex flex-col items-center justify-center gap-6' id='pricing'>
        <h1 className='text-3xl font-bold tracking-tight uppercase sm:text-4xl lg:text-5xl 2xl:text-6xl text-gray-950 text-center'>SIMPLE NO-TRICK PRICING</h1>
        <p className='max-w-xl mx-auto -mt-4 text-base font-normal leading-7 text-gray-600 lg:leading-9 lg:text-xl sm:text-lg sm:leading-8 text-center'>Everything you need to grow 10x for less than a coffee</p>

        <div className='ring-1 ring-gray-200 rounded-3xl flex flex-col lg:flex-row gap-5 max-w-xl lg:max-w-5xl p-3 mt-6'>

            <div className='text-left  px-8 lg:px-10 py-8 space-y-7 '>
                <div className='space-y-3'>
                    <h1 className='text-xl font-bold tracking-tight text-gray-900 sm:text-2xl'>Premium Elite Subscription</h1>
                    <p className=' text-base leading-7 text-gray-600'>Join founders, freelancers, designers, FAANG engineers, indie hackers, and more in our 24/7 WhatsApp Group for less than a cup of coffee.</p>
                </div>
                <div className='flex gap-3 items-center'>
                    <p className=' text-sm font-semibold leading-6 text-primary-600'>What's included</p>
                    <div className='h-[1px] flex-1 bg-gray-200'></div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                    <div className='flex gap-4 text-gray-600'>
                        <img src="images/icon-check.svg" alt="" />
                        <p>Expert Mentors</p>
                    </div>
                    <div className='flex gap-4 text-gray-600'>
                        <img src="images/icon-check.svg" alt="" />
                        <p>Exclusive Courses</p>
                    </div>
                    <div className='flex gap-4 text-gray-600'>
                        <img src="images/icon-check.svg" alt="" />
                        <p>Networking & Collaboration</p>
                    </div>
                    <div className='flex gap-4 text-gray-600'>
                        <img src="images/icon-check.svg" alt="" />
                        <p>Networking & Collaboration</p>
                    </div>
                </div>
            </div>

            <div className='bg-gray-50 ring-1 ring-inset ring-gray-900/5 flex flex-col items-center py-8 lg:py-11 rounded-2xl lg:w-full lg:max-w-md gap-5'>
                <p className='text-base font-semibold text-gray-600'>Less than a cup of coffee</p>
                <div className='flex items-center justify-center gap-4'>
                    <h1 className='text-5xl font-bold tracking-tight text-gray-900'>$5</h1>
                    <p className='text-4xl font-semibold leading-6 tracking-wide text-gray-400 line-through'>$1000</p>
                </div>
                <button className='bg-primary-500 text-white px-8 rounded-full font-semibold py-3 hover:bg-primary-600 mx-2 transition-all duration-200'>Join Community</button>
                <div className='flex -space-x-3 hover:-space-x-2'>
                    <img src="images/avatars/avatar-1.png" className='w-8 h-8 rounded-full' />
                    <img src="images/avatars/avatar-2.png" className='w-8 h-8 rounded-full' />
                    <img src="images/avatars/avatar-aryan.webp" className='w-8 h-8 rounded-full' />
                    <img src="images/avatars/avatar-kevin.webp" className='w-8 h-8 rounded-full' />
                    <img src="images/avatars/avatar-umang.webp" className='w-8 h-8 rounded-full' />
                </div>
                <p className='text-sm font-medium text-gray-950'>100+ Active Members</p>
            </div>

        </div>

    </div>
  )
}

export default Pricing