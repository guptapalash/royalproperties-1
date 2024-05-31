/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import { PhoneIcon } from '@heroicons/react/24/solid';
// import Cards from '@/components/Cards';
// import Footer from '@/components/Footer';

const Hero = () => {
  return (
    <div className='container mt-24 max-w-full flex flex-col items-center justify-center h-[820px] bg-slate-600 place-self-auto z-40'>
      <div className='px-12 flex flex-col items-center justify-center z-50'>
        <p className='text-[34px] md:text-[52px] lg:text-[64px] font-medium text-center text-[#202020]'>
          Your <span className='font-black text-[#FFB814]'>destination</span> to finding <br /> home <span className='font-black text-[#FFB814]'>sweet home</span>
        </p>
        
        <p className='text-[16px] md:text-[18px] lg:text-[20px] text-center text-[#202020]'>
          The Royal Properties is a leading real estate agency offering wide range of 2, 3 and 4 BHK luxury flats, <br />
          Bungalows and apartments in Baner, Bavdhan, Kothrud, Hinjewadi and Wakad.
        </p>

        <Link href='/Contactus'>
          <button className='mt-[24px] px-8 py-4 text-[20px] font-medium bg-[#FFB814] rounded-2xl flex items-center justify-center gap-2 flex-row'>
            Get in touch <PhoneIcon className='size-[24px]' />
          </button>
        </Link>
      </div>

      <div className='z-1'>
        <img className='h-[200px] bg-center -z-10 place-content-center' src="./assets/building1.jpg" alt="bg" />
      </div>

    </div>
  )
}

export default Hero