import { ChatBubbleLeftRightIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid'
import React from 'react'

const Footer = () => {
  return (
    <div className='relative container bg-[#FFB814] max-w-full flex flex-col sm:flex-row items-center gap-40 justify-center h-[560px] sm:h-[160px]'>
        <div className='flex flex-row items-center gap-2'>
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
  )
}

export default Footer