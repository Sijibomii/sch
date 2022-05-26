import React from 'react'
import Swiper from '../components/Swiper'
function Home() {
  return (
    <>
      <Swiper />
      <div className='body-con p-4 flex flex-col lg:px-24 '>
        <h2 className='text-xl font-bold'>Welcome</h2>
        <div className='mt-4'>
          <p>You are welcome to the official website page of Eternal Excellence College.</p>
          <div className='border'></div>
        </div>
      
      <div className='outer-con lg:flex lg:flex-wrap lg:mb-10 lg:mt-8 lg:justify-between'>
        <div className='news-con flex py-4 flex-col lg:flex-grow '>
          <div className='news-upper flex items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 nav-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
            </svg>
            <h3 className='ml-4 text-lg font-semibold'>News & Events</h3>
          </div>
          <div className='news-lower mt-6'>
            <p className='text-sm'>
            THE NEXT PTA MEETING WILL HOLD ON THURSDAY 23 DECEMBER,2021 BY 12 NOON.
            </p>
            <p className='text-sm'>
            SCHOOL CLOSES OFFICIALLY FOR 1ST TERM ON <br />FRIDAY 24TH DECEMBER, 2021.
            </p>
          </div>
        </div>
        <div className='propritors-con flex flex-col py-4 lg:flex-grow'>
          <div className='prop-upper flex items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 nav-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
              <h3 className='text-lg font-semibold ml-4'>Our Proprietors</h3>
            </div>
            <div className='prop-lower mt-4 '>
              <p>
              THE NEXT PTA MEETING WILL HOLD ON THURSDAY 23 DECEMBER,2021 BY 12 NOON.
              </p>
              <p>
              SCHOOL CLOSES OFFICIALLY FOR 1ST TERM ON FRIDAY 24TH DECEMBER, 2021.
              </p>
            </div>
        </div>
        <div className='testimonials-con flex flex-col mt-4 lg:flex-grow lg:mt-0'>
          <div className='test-upper flex items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
            </svg>
              <h3 className='text-lg font-semibold ml-4'>testimonials</h3>
          </div>
          <div className='test-lower mt-4'>
            <p>
            I was moved to Ambassadors College from another school in Ile Ife by my 
            worried parents who felt I was not doing well enough in my academics.I moved and 
I saw it was a school dedicated strictly to learning. It was so tedious at first but now I can proudly say I am part of the top in my class.
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home