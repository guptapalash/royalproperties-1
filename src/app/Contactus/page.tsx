import { MapPinIcon, EnvelopeIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/solid'
import React from 'react'

const page = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center text-[24px] gap-12 pt-24'>
      <h1 className='font-bold sm:text-[32px]'>Always here to help</h1>
      <div className='flex flex-col md:flex-row gap-20'>
        <div className='flex flex-col gap-8 items-center justify-around'>
          <div className='flex flex-row gap-2'>
              <MapPinIcon className='h-10' />
              <p>
                  Shop No.21, R9 Commercial, <br />
                  Kolte Patil Life Republic, <br />
                  Marunji, 411057 
              </p>
          </div>

          <div className='flex flex-row items-center gap-2'>
              <EnvelopeIcon className='h-6' />
              <p>
                  royalproperty55@gmail.com
              </p>
          </div>

          <div className='flex flex-row items-center gap-2'>
              <ChatBubbleLeftRightIcon className='h-6' />
              <p>
                  9145282041 | 8668555945
              </p>
          </div>
        </div>

        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d945.2068802877541!2d73.71071808710691!3d18.62682604621578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bb1aa19d6367%3A0xc293f92cbcf7d014!2sR9%20ORO%20Avenue%2C%20Life%20Republic!5e0!3m2!1sen!2sin!4v1717434910005!5m2!1sen!2sin" 
          width="auto" 
          height="450" 
          // style="border:0;" 
          // allowfullscreen="" 
          loading="lazy" 
        // referrerpolicy="no-referrer-when-downgrade"
        >
        </iframe>

      </div>

    </div>
  )
}

export default page