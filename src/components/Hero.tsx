/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import { PhoneIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className='container max-w-full flex flex-col items-center justify-center min-h-screen place-self-auto z-40'>
      <Image 
        src={'/building1.jpg'} 
        fill
        quality={100}
        alt='' 
        className='z-1'
      />
      <div className='px-12 flex flex-col items-center justify-center z-50'>
        <p className='text-[34px] md:text-[52px] lg:text-[64px] font-medium text-center text-[#202020]'>
          Your <span className='font-black text-[#FFB814]'>destination</span> to finding <br /> home <span className='font-black text-[#FFB814]'>sweet home</span>
        </p>
        
        <p className='text-[16px] md:text-[18px] lg:text-[20px] text-center text-[#202020]'>
          The Royal Properties is a leading real estate agency offering wide range of 1, 2, 3 and 4 BHK luxury flats, <br />
          Bungalows and apartments in Baner, Bavdhan, Kothrud, Hinjewadi and Wakad.
        </p>

        <Link href='/Contactus'>
          <button className='mt-[24px] px-8 py-4 text-[20px] font-medium bg-[#FFB814] rounded-2xl flex items-center justify-center gap-2 flex-row'>
            Get in touch <PhoneIcon className='size-[24px]' />
          </button>
        </Link>
      </div>

    </div>
  )
}

export default Hero