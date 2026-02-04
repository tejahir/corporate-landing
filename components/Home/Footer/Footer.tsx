import Logo from '@/components/Helper/Logo'
import React from 'react'
import { FaFacebookF, FaInstagram, FaPaperPlane, FaPhone, FaYoutube } from 'react-icons/fa'
import { IoMailOpen } from 'react-icons/io5'
import { MdKeyboardArrowRight, MdKeyboardDoubleArrowRight } from 'react-icons/md'

const Footer = () => {
  return (
    <div className='pt-16 pb-16'>
        <div className='w-[80%] mx-auto grid items-start grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10'>
            {/* 1 */}
            <div>
                {/* logo */}
                <Logo />
                {/* desc */}
                <p className='mt-6 text-sm text-gray-300 leading-6 font-semibold'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi doloremque inventore at facilis.
                </p>

                <div className='flex items-center space-x-4 mt-6'>
                    <div className='w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center flex-col cursor-pointer hover:bg-blue-600 transition-all duration-300'>
                        <FaFacebookF className='w-6 h-6 text-white'/>
                    </div>
                    <div className='w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center flex-col cursor-pointer hover:bg-red-600 transition-all duration-300'>
                        <FaYoutube className='w-6 h-6 text-white'/>
                    </div>
                    <div className='w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center flex-col cursor-pointer hover:bg-pink-600 transition-all duration-300'>
                        <FaInstagram className='w-6 h-6 text-white'/>
                    </div>
                </div>
            </div>

            <div className='lg:mx-auto'>
                <h1 className='text-lg font-bold text-white'>Address</h1>
                <div className='mt-8'>
                    <div className='flex items-center space-x-5'>
                        <FaPaperPlane className='w-5 h-5 text-white'/>
                        <p className='font-medium text-sm text-white'>
                            Old city Street,surat <br /> Gujarat-395010{""}
                        </p>
                        </div>
                    <div className='flex md-5 mt-5 items-center space-x-5'>
                        <FaPhone className='w-5 h-5 text-white'/>
                        <p className='font-medium text-sm text-white'>
                            +91 99244 81320
                        </p>
                        </div>
                    <div className='flex items-center md-5 mt-5 space-x-5'>
                        <IoMailOpen className='w-5 h-5 text-white'/>
                        <p className='font-medium text-sm text-white'>
                            tejahir34@gmail.com
                        </p>
                        </div>
                    </div>
            </div>
            {/*  */}
            <div className='lg:mx-auto'> 
                <h1 className='text-lg font-bold text-white'>More Services</h1>
                <div className='mt-8'>
                    <div className='flex items-center mb-2'>
                        <MdKeyboardDoubleArrowRight className='w-7 h-7 text-white'/>
                        <p className='font-medium text-sm text-white'>UI Design</p>
                    </div>
                    <div className='flex items-center mb-2'>
                        <MdKeyboardDoubleArrowRight className='w-7 h-7 text-white'/>
                        <p className='font-medium text-sm text-white'>UX Design</p>
                    </div>
                    <div className='flex items-center mb-2'>
                        <MdKeyboardDoubleArrowRight className='w-7 h-7 text-white'/>
                        <p className='font-medium text-sm text-white'>Web App</p>
                    </div>
                    <div className='flex items-center mb-2'>
                        <MdKeyboardDoubleArrowRight className='w-7 h-7 text-white'/>
                        <p className='font-medium text-sm text-white'>Digital Marketing</p>
                    </div>
                    <div className='flex items-center mb-2'>
                        <MdKeyboardDoubleArrowRight className='w-7 h-7 text-white'/>
                        <p className='font-medium text-sm text-white'>Video Editing</p>
                    </div>
                </div>
            </div>
            {/*  */}
            
        </div>
    </div>
  )
}

export default Footer