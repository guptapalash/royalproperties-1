/* eslint-disable @next/next/no-img-element */
"use client";
import { Popover, PopoverButton, PopoverOverlay, PopoverPanel, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import React, { Fragment } from 'react'

const Navbar = () => {
  return (
    <Popover className='bg-white container max-w-full flex items-center px-6 border-b-2 h-24 fixed z-50'>
        <Link href={"/"}><img src="/logo2.svg" alt="logo" className='h-[64px]' /></Link>

        <div className='grow'>
            <div className='hidden sm:flex items-center justify-center gap-2 md:gap-8'>
              <Link href="/" className=''>Home</Link>
              <Link href="/Aboutus">About us</Link>
              <Link href="/Contactus">Contact us</Link>
            </div>
        </div>

        <div className='flex grow items-center justify-end sm:hidden'>
          <PopoverButton 
            className={"inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-yellow-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500"}
          >
            <span className='sr-only'>Open Menu</span>
            <Bars3Icon className='h-6 w-6' aria-hidden="true"/>
          </PopoverButton>
        </div>

        <PopoverOverlay className={"sm:hidden fixed inset-0 bg-black opacity-30"} />

        <Transition
          as={Fragment}
          enter='duration-200 ease-out'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='duration-100 ease-in'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'
        >
          <PopoverPanel 
            focus
            className={"absolute inset-x-0 top-0 origin-top-right transform transition md:hidden"}
          >
            <div className='rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50'>
              <div className='px-5 pt-5 pb-6'>
                <div className='flex items-center justify-between'>
                  <h1 className='font-bold'>Logo</h1>
                  <div className='-mr-2'>
                    <PopoverButton 
                      className={"inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-yellow-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500"}
                    >
                      <span className='sr-only'>Close Menu</span>
                      <XMarkIcon className='h-6 w-6' aria-hidden="true"/>
                    </PopoverButton>
                  </div>
                </div>

                <div className='mt-6'>
                  <nav className='grid gap-y-8'>
                    <Link href="/" className='focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2'>
                      Home
                    </Link>
                    <Link href="/" className='focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2'>
                      About us
                    </Link>
                    <Link href="/" className='focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2'>
                      contact us
                    </Link>
                  </nav>
                </div>

                <div className='mt-6 flex flex-col items-center gap-2'>
                  <Link className='rounded-md bg-white px-4 py-2 text-sm font-medium text-black md:text-xl w-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500' href="">
                    +91-9145282041
                  </Link>
                </div>

              </div>

            </div>
          </PopoverPanel>
        </Transition>

        <div>
          <Link className='sm:block font-medium hidden' href="">+91-9145282041</Link>
        </div>
    </Popover>
  )
}

export default Navbar