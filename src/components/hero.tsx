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
        {/* <div className="min-h-screen overflow-hidden grid place-items-center">

          <div className="absolute inset-0 "/>
          <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 border-t border-l border-gray-800 pointer-events-none">
            {Array.from({ length: 38 }).map((_, i) => (
              <div key={i} className="border-b border-r border-gray-800"></div>
            ))}
          </div>
          

          <div className="relative z-10 text-center">
            <h1 className="text-5xl font-bold text-gray-300">Backgrounds</h1>
            <p className="text-xs text-blue-200 mt-2 tracking-widest">
              DYNAMIC WEB MAGIC WITH NEXT.JS
            </p>
          </div>
          
          <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-purple-500 via-indigo-500 to-transparent opacity-20 blur-3xl" />
        </div> */}
        <GridBackgroundDemo>
          <TextGenerateEffect className='text-center text-[40px] md:text-5xl lg:text-6xl' words='Transforming Concepts into Seamless Expriences'/>
        </GridBackgroundDemo>
        <p className='text-center z-10'>Hi, I&apos;m Zani, a Fullstack Developer based in Jakarta.</p>
        <a href="#about" className='my-4'>
          <MagicButton 
            title={`let's to know about me`} 
            icon={ <FaLocationArrow /> } 
            position='right'
          />
        </a>
      </div>
    </div>
  )
}

export default Hero