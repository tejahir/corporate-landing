import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className='pt-16 pb-16 bg-gray-200'>
        <h1 className='text-[#b69974] text-3xl font-bold lg:w-[80%] items-center mx-auto'>
            Contact 📩
        </h1>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 w-[90%] lg:w-[80%] items-center mx-auto mt-16'>
            <div
            data-aos="zoom-in" 
            data-aos-anchor-placement="top-center"
            data-aos-delay="0"
             className='lg:col-span-2 bg-gray-900 rounded-xl p-6'>
                <input 
                type="text"
                placeholder='Name*'
                className='border-2 mt-6
                 border-gray-600 w-full px-6 py-3 rounded-full md-6 placeholder:text-white text-white'/>
                <input 
                type="email"
                placeholder='Email*'
                className='border-2 mt-6
                 border-gray-600 w-full px-6 py-3 rounded-full md-6 placeholder:text-white text-white'/>
                <input 
                type="text"
                placeholder='Subject*'
                className='border-2 mt-6
                 border-gray-600 w-full px-6 py-3 rounded-full md-6 placeholder:text-white text-white'/>
                <textarea 
                rows={5}
                placeholder='Comments*'
                className='border-2 mt-6
                 border-gray-600 w-full px-6 py-3 rounded-3xl md-6 placeholder:text-white text-white'/>

                <button className=' w-full mt-6 px-6 py-3 bg-[#b69974] uppercase cursor-pointer rounded-full text-white'>
                    Submit
                </button>
            </div>
            <div 
            data-aos="zoom-out" 
            data-aos-anchor-placement="top-center"
            data-aos-delay="100"
            className='lg:col-span-1'>
                {/* 1 */}
                <div className='p-6 rounded-2xl bg-[#b69974] flex items-center space-x-4'>
                    <div className='w-15 h-15 rounded-full bg-[#000000] flex items-center justify-center flex-col'>
                        <FaArrowRight className='text-white'/>

                    </div>
                    <div>
                    <h1 className='text-white text-sm font-semibold'>Call Now</h1>
                    <h1 className='text-[20px] font-bold text-white'>+91 99244 81320</h1>
                    </div>
                </div>
                {/* 2 */}
                <div className='p-6 rounded-2xl mt-4 mb-4 bg-[#b69974] flex items-center space-x-4'>
                    <div className='w-15 h-15 rounded-full bg-[#000000] flex items-center justify-center flex-col'>
                        <FaArrowRight className='text-white'/>

                    </div>
                    <div>
                    <h1 className='text-white text-sm font-semibold'>E-mail Now</h1>
                    <h1 className='text-[20px] font-bold text-white'>tejahir34@gmail.come</h1>
                    </div>
                </div>
                {/* 3 */}
                <div className='p-6 rounded-2xl bg-[#b69974] flex items-center space-x-4'>
                    <div className='w-15 h-15 rounded-full bg-[#000000] flex items-center justify-center flex-col'>
                        <FaArrowRight className='text-white'/>

                    </div>
                    <div>
                    <h1 className='text-white text-sm font-semibold'>Address</h1>
                    <h1 className='text-[20px] font-bold text-white'>Surat, Gujarat</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact