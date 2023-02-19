import React from 'react'
import Text from '../components/Text'

export default function Resume() {
  return (
    <>
      {/* <img src='./src/assets/line.svg' className='absolute scale-50 bottom-0'></img> */}
      
        <div className='h-screen w-full grid grid-cols-3'>
            <div className='grid-rows-2 grid'>
              <div className='pl-16 pt-16 relative z-0'>
                <Text is3Large isSemiBold>EDUCATION</Text>
                <div className='bg-[#fdf101] w-52  h-4 relative -top-6 -z-10' />
                <div className='flex'>
                  <div className='w-10 h-10 bg-gray-300 rounded-full mr-3'></div>
                  <div>
                  <Text isBold isLarge className="mt-1">2020 - NOW</Text>
                  <Text isSemiBold isSmall>University of Education Indonesia</Text>
                  <Text isSmall>Sofware Engineering</Text>
                  </div>
                </div>
                  <div className='w-[0.3rem] h-20 bg-gray-300 relative -top-8 left-[1.1rem]'></div>
                <div className='flex relative -top-8'>
                  <div className='w-10 h-10 bg-gray-300 rounded-full relative mr-3'></div>
                  <div>
                    <Text isBold isLarge className="mt-1">2017 - 2020</Text>
                    <Text isSemiBold isSmall>SMAN 4 Kota Bogor</Text>
                    <Text isSmall>IPA</Text>
                  </div>
                </div>
              </div>
              <div className='bg-gray-500'></div>
            </div>
            <div className='bg-gray-200'></div>
            <div className='bg-gray-300 grid-rows-2 grid'>
              <div className='bg-gray-400'></div>
              <div className='bg-gray-500'></div>
            </div>
        </div>
    </>
  )
}
