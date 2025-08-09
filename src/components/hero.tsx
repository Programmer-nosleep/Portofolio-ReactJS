'use server'

import React from 'react'
import { Spotlight } from './ui/spotlight'
import { GridBackgroundDemo } from './ui/gridbox'
import { TextGenerateEffect } from './ui/text-generate-effect'
import MagicButton from './ui/magic-button'
import { FaLocationArrow } from 'react-icons/fa'

const Hero: React.FC = () => {
  return (
    <div className='pb-20 pt-36'>
      <div className=''>
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white' />
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-[80vh] w-[50vw]' fill='purple' />
        <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue' />
      </div>
      <div className='flex flex-col items-center'>
        <GridBackgroundDemo>
          <TextGenerateEffect className='text-center text-[40px] md:text-5xl lg:text-6xl' words='Transforming Concepts into Seamless Expriences'/>
        </GridBackgroundDemo>
        <p className='text-center z-10'>Hello, My name is Zani, I&apos;m a Fullstack Developer based in Jakarta.</p>
        <a href="#about" className='my-4'>
          <MagicButton 
            title={`Let's to know about me`} 
            icon={ <FaLocationArrow /> } 
            position='right'
          />
        </a>
      </div>
    </div>
  )
}

export default Hero