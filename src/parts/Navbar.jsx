import React from 'react'
import Button from '../components/Button'
import Text from '../components/Text'

export default function Navbar() {
  return (
    <div className='absolute w-full h-auto flex z-20 drop-shadow-lg' style={{backgroundColor: "rgba(26, 36, 36, 0.1)", boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.25)'}}>
        <div className='basis-5/12 h-full p-5'>
            <Text isCenter isSemiBold is3Large isWhite>PORTFOLIO</Text>
        </div>
        <div className='basis-7/12 justify-between flex align-items-center px-32'>
            <Button type='button' is2Large isWhite isNormal>HOME</Button>
            <Button type='button' is2Large isWhite isNormal>ABOUT</Button>
            <Button type='button' is2Large isWhite isNormal>RESUME</Button>
            <Button type='button' is2Large isWhite isNormal>CONTACT</Button>
        </div>
    </div>
  )
}