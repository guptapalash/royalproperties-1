import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center text-[24px] pt-24 px-6 mb-4'>
      <div className='flex flex-col sm:flex-row gap-8'>
        <Image 
          src={'/building2.jpg'} 
          // fill
          height={400}
          width={380}
          quality={100}
          alt='' 
          className='z-1 rounded-2xl'
        />

        <div className='flex flex-col gap-3'>
          <h2 className='font-bold'>Vision</h2>

          <p className='text-[16px]'>
            At Royal Properties, our vision is to become the most <br />
            trusted and innovative real estate brokerage firm in <br />
            India. We strive to be recognized as a leader in the <br />
            industry, known for our exceptional customer service, <br />
            deep industry expertise, and unwavering commitment to <br />
            driving positive change in the communities we serve. <br />
            We aspire to be a company that sets the standard for <br />
            excellence in all aspects of the real estate business, <br />
            from property management to brokerage services and beyond.
          </p>
        </div>

      </div>
    </div>
  )
}

export default page