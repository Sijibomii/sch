import React from 'react'

const Footer = () => {
  return (
    <div className='footer-con px-4 bg-[#861414] py-4 lg:px-10 lg:py-8 lg:flex'>
      <div className='footer-1'>
        <h3 className='text-[#cec9c9] text-xl font-bold'>Eternal Excellence College</h3>
        <p className='text-[#919191] text-lg mt-2'>welcome to our website</p>
        <div className='bg-black h-2 w-50 mt-2 '></div>
        <p className='text-[#919191] text-lg mt-4'>
        We believe in high standard in all areas of the school life.
        We put our students at the centre of teaching and learning
        We trust and believe in the power of God through our Lord Jesus Christ to make our students fulfill the purpose for which they are in school
        </p>
      </div>
      <div className='footer-2 mt-8 lg:mt-0'>
        <h3 className='text-[#cec9c9] text-xl font-bold'>Website links</h3>
        <p className='text-[#919191] text-lg mt-2'>Explore our website</p>
        <div className='bg-black h-2 w-50 mt-2'></div>
        <ul className='px-2'>
          <li className='p-2 cursor-pointer'>About us</li>
          <li className='p-2 cursor-pointer'>Fees</li>
        </ul>
      </div>
      <div className='footer-3 mt-8 lg:mt-0'>
        <h3 className='text-[#cec9c9] text-xl font-bold'>News Update</h3>
        <p className='text-[#919191] text-lg mt-2'>Get with the latest mews update</p>
        <div className='bg-black h-2 w-50 mt-2'></div>
        <p className='mt-4 text-[#cec9c9] '>
          Monday 26th May 2022 -  kmnefkfwnmkmormokforkfoprk 
        </p>
      </div>
    </div>
  )
}

export default Footer