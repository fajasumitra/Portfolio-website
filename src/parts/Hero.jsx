import React from 'react'
import Text from '../components/Text'

export default function Hero() {
  return (
    <>
        <div className='h-auto flex'>
            <div className='basis-5/12 h-screen bg-[#262626] relative'>
                <img src='./src/assets/dotRectangle.svg' alt='dot' className='scale-75 absolute -left-10 top-28'></img>
                <div className='absolute bottom-32 -right-12 z-10 ='>
                    <Text is5Large isWhite isLight>MY NAME IS</Text>
                    <Text is5Large isWhite isMedium>M. FAJA TIRTA SUMITRA</Text>
                    <div className='bg-[#fdf101] w-max px-3 py-2 mt-2'>
                        <Text is4Large isMedium>I'M A WEB DEVELOPER</Text>
                    </div>
                <img src='./src/assets/dotRectangle.svg' alt='dot' className='scale-50 absolute w-full h-full object-cover -right-14'></img>
                </div>
            </div>
            <div className='basis-7/12 h-screen '>
                <img src='./src/assets/IMG_8414.jpg' alt='Profile' className='w-full h-full object-cover grayscale'></img>
            </div>
        </div>
    </>
  )
}
