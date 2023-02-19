import React from 'react'
import Text from '../components/Text'

export default function About() {
  return (
    <>
        <div className='h-screen w-full relative bg-[#f5f5f5] -z-0'>
          <div className='relative flex h-full'>
            <div className='basis-1/2'>
              <img src='./src/assets/bundleAbout.svg' alt='about' className='scale-[0.7]'/>
              {/* <div className='h-[431px] w-[431px] bg-[#262626] relative left-36 top-28' />
              <img src='./src/assets/faja2.png' alt='Profile' className='scale-[0.66] absolute left-20 top-12'/>
              <img src='./src/assets/arrow.svg' alt='arrow' className='absolute scale-[.75] top-10 left-12'/>
              <img src='./src/assets/arrow.svg' alt='arrow' className='absolute scale-[.75] bottom-12 left-[610px] rotate-180'/>
              <img  src='./src/assets/3circles.svg' alt='circle1' className='absolute rotate-90 scale-90 left-[133px] bottom-[170px]'/>
              <img  src='./src/assets/3circles.svg' alt='circle1' className='absolute scale-90 top-32 left-[490px]'/> */}
            </div>
            <div className='basis-1/2'>
              <div className= 'absolute top-40 mr-16'>
                <div className='w-max h-max static mt-16'>
                  <Text is2Large isMedium className='relative left-7'>who am i</Text>
                  <Text is5Large isSemiBold className='relative'>HELLO</Text>
                  <div className='absolute bg-[#fdf101] w-36 h-7 top-28 -z-10' />               
                </div>
                <div>
                <Text isNormal>
                  A highly motivated and driven 6th semester Software Engineering student at the University of Education
                  Indonesia, with a passion for web development. Can do Frontend and Backend web development using
                  MERN (MongoDB, ExpressJS, ReactJS, NodeJS), and eager to gain hands-on experience to further enhance
                  my skills and knowledge in the field.
                </Text>
                <div className='flex mt-2'>
                  <img src='./src/assets/location.svg' alt='location' className='mr-3'/>
                  <Text isSmall className='mt-1 text-gray-500'>Bogor City, West Java</Text>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}
