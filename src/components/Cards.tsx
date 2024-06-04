/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Cards = () => {
  return (
    <div className='container max-w-full flex flex-col items-center justify-normal px-12 h-auto py-10'>
        <h1 className='text-[20px] sm:text-[42px] font-bold mb-5'>Featured Properties</h1>

        <div className='grid lg:grid-cols-3 gap-20'>
            <div className='bg-white flex flex-col justify-center font-bold text-[16px] border-2 rounded-lg px-5 py-9'>
                {/* <img className='h-[320px] mb-4 rounded' src="./assets/bungalow1.jpg" alt="" /> */}
                <Image width={400} height={340} alt='' src={'/r9.jpg'} />
                <p className='my-4 md:text-[24px]'>
                    kolte Patil Life Republic <br />
                    Oro Avenue R9
                </p>
                <p className='text-[14px] md:text-[20px] font-medium'>
                    630 sqft.
                </p>
                <p className='sm:text-[24px] mt-2'>
                    60L. Onwards
                </p>
                <Link className='text-[#FFB814] sm:text-[24px]' href="/Contactus" >Know more</Link>
            </div>

            <div className='bg-white flex flex-col justify-center font-bold text-[16px] border-2 rounded-lg px-5 py-9'>
                {/* <img className='h-[320px] mb-4 rounded' src="./assets/bungalow1.jpg" alt="" /> */}
                <Image width={400} height={200} alt='' src={'/bungalow1.jpg'} />
                <p className='my-4 md:text-[24px]'>
                    kolte Patil Life Republic <br />
                    Gated Society Bungalow 
                </p>
                <p className='text-[14px] md:text-[20px] font-medium'>
                    4bhk Bungalow 3800 sqft
                </p>
                <p className='sm:text-[24px] mt-2'>
                    2Cr. Onwards
                </p>
                <Link className='text-[#FFB814] sm:text-[24px]' href="/Contactus" >Know more</Link>
            </div>

            <div className='bg-white flex flex-col justify-center font-bold text-[16px] border-2 rounded-lg px-5 py-9'>
                {/* <img className='h-[320px] mb-4 rounded' src="./assets/bungalow1.jpg" alt="" /> */}
                <Image 
                    width={400} 
                    height={100} 
                    alt='' 
                    src={'/megapolis.jpg'} 
                />
                <p className='my-4 md:text-[24px]'>
                    Megapolis Kumar <br />
                    Builder Properties 
                </p>
                <p className='text-[14px] md:text-[20px] font-medium'>
                    2bhk 760 - 870 sqft
                </p>
                <p className='sm:text-[24px] mt-2'>
                    61L. Onwards
                </p>
                <Link className='text-[#FFB814] sm:text-[24px]' href="/Contactus" >Know more</Link>
            </div>

            <div className='bg-white flex flex-col justify-center font-bold text-[16px] border-2 rounded-lg px-5 py-9'>
                {/* <img className='h-[320px] mb-4 rounded' src="./assets/bungalow1.jpg" alt="" /> */}
                <Image width={400} height={200} alt='' src={'/r1sector.jpg'} />
                <p className='my-4 md:text-[24px]'>
                    kolte Patil Life Republic <br />
                    Sector R1
                </p>
                <p className='text-[14px] md:text-[20px] font-medium'>
                    2bhk 830 - 1190 sqft
                </p>
                <p className='sm:text-[24px] mt-2'>
                    80L. Onwards
                </p>
                <Link className='text-[#FFB814] sm:text-[24px]' href="/Contactus" >Know more</Link>
            </div>

            <div className='bg-white flex flex-col justify-center font-bold text-[16px] border-2 rounded-lg px-5 py-9'>
                {/* <img className='h-[320px] mb-4 rounded' src="./assets/bungalow1.jpg" alt="" /> */}
                <Image width={400} height={200} alt='' src={'/lodha.jpg'} />
                <p className='my-4 md:text-[24px]'>
                    Lodha Belmundo
                </p>
                <p className='text-[14px] md:text-[20px] font-medium'>
                    1bhk - 3bhk <br /> 
                    480 - 2030 sqft
                </p>
                <p className='sm:text-[24px] mt-2'>
                    55L. - 2.3Cr. Onwards
                </p>
                <Link className='text-[#FFB814] sm:text-[24px]' href="/Contactus" >Know more</Link>
            </div>

        </div>

    </div>
  )
}

export default Cards