import { RiDoubleQuotesL } from '@remixicon/react'
import React from 'react'

const Testimonials = () => {
  return (
    <div className=' h-[640px]'>
      <div className='container px-5 py-24 mx-auto' >
        <h1 className='text-3xl title-font font-bold text-center pb-16'>Testimonials</h1>
        <div className='flex flex-wrap -m-4'>
          {/* Card 1 */}
          <div className='p-4 md:w-1/2 w-full'>
            <div className='h-full bg-blue-200 p-8 rounded'>
              <RiDoubleQuotesL size={50} />
              <p></p>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials