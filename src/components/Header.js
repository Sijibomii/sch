import React from 'react'

function Header() {
  return (
    <header className='lg:mb-8 '>
      <div className='flex py-10 px-4 bg-[#861414] items-center justify-between lg:px-16'>
        <div className='logo-con'>
          <h1 className='text-2xl text-[#cec9c9] font-bold lg:hidden'>The Eternal <br />Excellence college</h1>
          <h1 className='text-2xl text-[#cec9c9] font-bold hidden lg:block'>The Eternal Excellence college</h1>
        </div>
        <div className='ham-con mr-4 lg:hidden'>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>
        <div className='list-con hidden lg:block'>
          <ul className='flex '>
            <li className='px-6 py-1 active text-[#8c8c8c] cursor-pointer'>Home</li>
            <li className='px-6 py-1  text-[#8c8c8c] cursor-pointer'>About Us</li>
            <li className='px-6 py-1  text-[#8c8c8c] cursor-pointer'>Fees</li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header