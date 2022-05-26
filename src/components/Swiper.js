import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const Swiper = () => {
  
  return (
    <>
      <div className='swiper-con p-4 flex justify-center items-center'>
        <Carousel>
          <div>
            <img src='https://picsum.photos/id/1018/1000/600/' alt='img-1'/>
          </div>
          <div>
            <img src='https://picsum.photos/id/1015/1000/600/' alt='img-2'/>
          </div>
          <div>
            <img src='https://picsum.photos/id/1019/1000/600/' alt='img-3'/>
          </div>
        </Carousel>
      </div>
      
    </>
    
  )
}

export default Swiper