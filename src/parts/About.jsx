import React from 'react'

export default function About() {
  return (
    <>
        <div className='h-screen w-full relative bg-[#f5f5f5]'>
          <div className='relative flex h-full'>
            <div className='basis-1/2 '>
              {/* <img src='./src/assets/bundleAbout.svg' alt='about' className='scale-[0.65]'/> */}
              <div className='h-[431px] w-[431px] bg-[#262626] relative left-36 top-28' />
              <img src='./src/assets/faja2.png' alt='Profile' className='scale-[0.66] absolute left-20 top-12'/>
              <img src='./src/assets/arrow.svg' alt='arrow' className='absolute scale-[.75] top-10 left-12'/>
              <img src='./src/assets/arrow.svg' alt='arrow' className='absolute scale-[.75] bottom-12 left-[610px] rotate-180'/>
              <img  src='./src/assets/3circles.svg' alt='circle1' className='absolute rotate-90 scale-90 left-[133px] bottom-[170px]'/>
              <img  src='./src/assets/3circles.svg' alt='circle1' className='absolute scale-90 top-32 left-[490px]'/>
            </div>
            <div className='basis-1/2'>

            </div>
          </div>

            
        </div>
    </>
  )
}
