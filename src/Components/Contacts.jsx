import React from 'react'
import { useState } from 'react'

const Contacts = () => {

  const p = "Reach out to us today—we're here to answer your questions, provide support, and explore opportunities together."

  return (
    <div className=' py-24 flex flex-col text-'>
      <div>
          <div className="flex items-center justify-center">
            <div className="w-16 border-t border-main"></div>
            <span className="mx-4 text-[12px] sm:text-sm md:text-lg  text-main font-bold font-poppins">Contact us</span>
            <div className="w-16 border-t border-main"></div>
          </div>

        <div className='max-w-5xl bg-white shadow-top-only rounded-[50px] h-[400px] flex justify-center mx-auto mt-12'>
          <div className='grid grid-cols-2 gap-8 p-10'>
            <div className=''>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.85074129474!2d121.07723607487286!3d14.607577185879586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b81d5c038825%3A0x6a41cc28ed2ed15d!2sEmapta%20Office%20%E2%80%93%20IBM%20Plaza%2C%20Eastwood%2C%20Quezon%20City%2C%20Philippines!5e0!3m2!1sfil!2sph!4v1759475130834!5m2!1sfil!2sph"
                style={{ border: 0, borderRadius: "20px", width: '100%', height: '100%', filter: 'grayscale(100%)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className='mx-4 my-4 '  
              ></iframe>
            </div>

            <div className='flex flex-col px-4 '>
              <p className='uppercase font-rajdhani pt-10 font-light leading-relaxed text-sm text-[#ADADAD]'>Let's Get to Business</p>
              <p className='mt-2 text-sm font-rajdhani uppercase'>
                {p}
              </p>

              <div className='mt-4 space-y-6'>
                <div className='flex gap-3'>          
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" 
                        width="25" 
                        height="25" 
                        viewBox="0 0 24 24" className='text-main font-rajdhani'><g 
                        fill="none" stroke="currentColor" 
                        stroke-linecap="round" 
                        stroke-linejoin="round" 
                        stroke-width="2">
                        <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect width="20" height="16" x="2" y="4" rx="2"/></g></svg>
                    </span>
                     <p className='font-light font-rajdhani text-sm'>hello@intelliseven.com.ph</p> 
                </div>
                <div className='flex gap-3'>          
                    <span className='font-rajdhani'>
                        <svg xmlns="http://www.w3.org/2000/svg" 
                        width="25" 
                        height="25" font-light font-rajdhani
                        viewBox="0 0 24 24" className='text-main font-rajdhani'><g 
                        fill="none" stroke="currentColor" 
                        stroke-linecap="round" 
                        stroke-linejoin="round" 
                        stroke-width="2">
                       <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 2h-3a5 5 0 0 0-5 5v3H6v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                        </g>
                        </svg>
                    </span>
                     <p className='font-light font-rajdhani text-sm'>Intelliseven Inc. </p> 
                </div>
                <div className='flex gap-3'>          
                    <span>
                    <svg xmlns="http://www.w3.org/2000/svg"
                     width="25" 
                     height="25" 
                     viewBox="0 0 24 24"
                     className='text-main'
                     >
                    <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="64" stroke-dashoffset="64" d="M8 3c0.5 0 2.5 4.5 2.5 5c0 1 -1.5 2 -2 3c-0.5 1 0.5 2 1.5 3c0.39 0.39 2 2 3 1.5c1 -0.5 2 -2 3 -2c0.5 0 5 2 5 2.5c0 2 -1.5 3.5 -3 4c-1.5 0.5 -2.5 0.5 -4.5 0c-2 -0.5 -3.5 -1 -6 -3.5c-2.5 -2.5 -3 -4 -3.5 -6c-0.5 -2 -0.5 -3 0 -4.5c0.5 -1.5 2 -3 4 -3Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"/></path><path stroke-dasharray="4" stroke-dashoffset="4" d="M15.76 8.28c-0.5 -0.51 -1.1 -0.93 -1.76 -1.24M15.76 8.28c0.49 0.49 0.9 1.08 1.2 1.72"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.3s" values="4;0"/></path><path stroke-dasharray="6" stroke-dashoffset="6" d="M18.67 5.35c-1 -1 -2.26 -1.73 -3.67 -2.1M18.67 5.35c0.99 1 1.72 2.25 2.08 3.65"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.3s" values="6;0"/></path></g></svg>
                    </span>
                     <p className='font-light font-rajdhani text-sm'>+63918-909-0331 <span className='text-[#B2B2B2] font-rajdhani'>(Sales No.)</span></p>
                </div>
                <div className='flex gap-3'>          
                    <span>
                    <svg xmlns="http://www.w3.org/2000/svg"
                     width="25" 
                     height="25" 
                     viewBox="0 0 24 24"
                     className='text-main'
                     >
                    <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="64" stroke-dashoffset="64" d="M8 3c0.5 0 2.5 4.5 2.5 5c0 1 -1.5 2 -2 3c-0.5 1 0.5 2 1.5 3c0.39 0.39 2 2 3 1.5c1 -0.5 2 -2 3 -2c0.5 0 5 2 5 2.5c0 2 -1.5 3.5 -3 4c-1.5 0.5 -2.5 0.5 -4.5 0c-2 -0.5 -3.5 -1 -6 -3.5c-2.5 -2.5 -3 -4 -3.5 -6c-0.5 -2 -0.5 -3 0 -4.5c0.5 -1.5 2 -3 4 -3Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"/></path><path stroke-dasharray="4" stroke-dashoffset="4" d="M15.76 8.28c-0.5 -0.51 -1.1 -0.93 -1.76 -1.24M15.76 8.28c0.49 0.49 0.9 1.08 1.2 1.72"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.3s" values="4;0"/></path><path stroke-dasharray="6" stroke-dashoffset="6" d="M18.67 5.35c-1 -1 -2.26 -1.73 -3.67 -2.1M18.67 5.35c0.99 1 1.72 2.25 2.08 3.65"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.3s" values="6;0"/></path></g></svg>
                    </span>
                     <p className='font-light font-rajdhani text-sm'>+63918-909-0331 <span className='text-[#B2B2B2] font-rajdhani'>(Support No.)</span></p>
                </div>
              </div>
            </div>
          </div>

        </div>
          <div className='flex justify-center mx-auto mt-12'>
            <div className='max-w-3xl w-full h-32 bg-white shadow-lg border border-gray-100'>
              <div className='flex justify-center items-center h-full gap-5 px-6'>
                <button className='bg-[#343434] uppercase text-white font-rajdhani font-regular rounded-md w-64 h-14 flex items-center justify-between px-6'>
                  <span>Job Hiring</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M9.31 6.71a.996.996 0 0 0 0 1.41L13.19 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.72 6.7c-.38-.38-1.02-.38-1.41.01"/>
                  </svg>
                </button>
                
                <button className='bg-main uppercase text-white font-rajdhani font-regular rounded-md w-64 h-14 flex items-center justify-between px-6'>
                  <span>Internship Hiring</span>
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M9.31 6.71a.996.996 0 0 0 0 1.41L13.19 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.72 6.7c-.38-.38-1.02-.38-1.41.01"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Contacts
