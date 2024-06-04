import { BriefcaseIcon, BuildingOffice2Icon, PresentationChartLineIcon, UserIcon } from '@heroicons/react/24/solid'
import { RiProfileFill } from '@remixicon/react'
import React from 'react'

const Services = () => {
  return (
    <div className='container max-w-full flex flex-col items-center justify-center place-self-auto sm:h-[600px] py-3'>
        <h1 className='text-[32px] font-bold mb-10'>Our Services</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center justify-center'>
            
            <div className='shadow-md p-6 rounded-md bg-slate-100 hover:shadow-lg flex flex-col items-center justify-center'>
                <BriefcaseIcon className='h-[64px]' />
                <p className='text-2xl font-bold text-slate-800 mb-3'>Project Management</p>
            </div>
            <div className='shadow-md p-6 rounded-md bg-slate-100 hover:shadow-lg flex flex-col items-center justify-center'>
                <UserIcon className='h-[64px]' />
                <p className='text-2xl font-bold text-slate-800 mb-3'>Consultancy</p>
            </div>
            <div className='shadow-md p-6 rounded-md bg-slate-100 hover:shadow-lg flex flex-col items-center justify-center'>
                <PresentationChartLineIcon className='h-[64px]' />
                <p className='text-2xl font-bold text-slate-800 mb-3'>Market Survey</p>
            </div>
            <div className='shadow-md p-6 rounded-md bg-slate-100 hover:shadow-lg flex flex-col items-center justify-center'>
                <BuildingOffice2Icon className='h-[64px]' />
                <p className='text-2xl font-bold text-slate-800 mb-3'>Commercial Leasing</p>
            </div>
        </div>
    </div>
  )
}

export default Services