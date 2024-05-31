/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Cards = () => {
  return (
    <div className='container max-w-full grid lg:grid-cols-3 items-center justify-normal px-12 h-[1310px] gap-20'>
        <div className='bg-white flex flex-col justify-center font-bold text-[16px] border-2 rounded-lg px-5 py-9'>
            {/* <img className='h-[320px] mb-4 rounded' src="./assets/bungalow1.jpg" alt="" /> */}
            <Image width={400} height={200} alt='' src={'/bungalow1.jpg'} />
            <p className='mb-2'>
                kolte Patil Life Republic <br />
                Gated Society Bungalow 
            </p>
            <p className='text-[14px] font-medium'>
                4bhk Bungalow 3800 sqft
            </p>
            <p className='sm:text-[24px] mt-2'>
                2cr. Onwards
            </p>
            <Link className='text-[#FFB814] sm:text-[20px]' href="/Contactus" >Know more</Link>
        </div>

        <div className='bg-white flex flex-col justify-center font-bold text-[16px] border-2 rounded-lg px-5 py-9'>
            <Image width={400} height={200} alt='' src={'/bungalow1.jpg'} />
            <p className='mb-2'>
                kolte Patil Life Republic <br />
                Gated Society Bungalow 
            </p>
            <p className='text-[14px] font-medium'>
                4bhk Bungalow 3800 sqft
            </p>
            <p className='sm:text-[24px] mt-2'>
                2cr. Onwards
            </p>
            <Link className='text-[#FFB814] sm:text-[20px]' href="/Contactus" >Know more</Link>
        </div>
        <div className='bg-white flex flex-col justify-center font-bold text-[16px] border-2 rounded-lg px-5 py-9'>
            <Image width={400} height={200} alt='' src={'/bungalow1.jpg'} />
            <p className='mb-2'>
                kolte Patil Life Republic <br />
                Gated Society Bungalow 
            </p>
            <p className='text-[14px] font-medium'>
                4bhk Bungalow 3800 sqft
            </p>
            <p className='sm:text-[24px] mt-2'>
                2cr. Onwards
            </p>
            <Link className='text-[#FFB814] sm:text-[20px]' href="/Contactus" >Know more</Link>
        </div>
        
        <div className='bg-white flex flex-col justify-center font-bold text-[16px] border-2 rounded-lg px-5 py-9'>
            <Image width={400} height={200} alt='' src={'/bungalow1.jpg'} />
            <p className='mb-2'>
                kolte Patil Life Republic <br />
                Gated Society Bungalow 
            </p>
            <p className='text-[14px] font-medium'>
                4bhk Bungalow 3800 sqft
            </p>
            <p className='sm:text-[24px] mt-2'>
                2cr. Onwards
            </p>
            <Link className='text-[#FFB814] sm:text-[20px]' href="/Contactus" >Know more</Link>
        </div>
        <div className='bg-white flex flex-col justify-center font-bold text-[16px] border-2 rounded-lg px-5 py-9'>
            <Image width={400} height={200} alt='' src={'/bungalow1.jpg'} />
            <p className='mb-2'>
                kolte Patil Life Republic <br />
                Gated Society Bungalow 
            </p>
            <p className='text-[14px] font-medium'>
                4bhk Bungalow 3800 sqft
            </p>
            <p className='sm:text-[24px] mt-2'>
                2cr. Onwards
            </p>
            <Link className='text-[#FFB814] sm:text-[20px]' href="/Contactus" >Know more</Link>
        </div>

    </div>
  )
}

export default Cards