import React from 'react'
import AboutProgress from './AboutProgress'

const About = () => {
  return (
    <div className='pt-16 pb-16 bg-white'>
        <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6'>
            <div className='relative flex justify-center items-center'>
                <img 
                src={"/images/a3.png"} 
                alt="img" 
                width={500} 
                height={500} 
                className='animate-spin [animation-duration:20s]' />
                <img src={"/images/a4.png"} 
                alt="img"
                width={350}
                height={350}
                className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg md:ml-4 w-[200px] h-[200px] md:w-[350px] md:h-[350px]' />
            </div>
            <div>
                <h1 className='text-blue-700 text-lg font-medium tracking-widest'>About Us</h1>

                <h1 className='text-3xl md:text-5xl text-black font-bold mt-4'>Innovative solutions for digital success</h1>

                <p className='ml-0 md:ml-12 md:mt-10 mt-5 text-black text-sm md:text-base font-semibold leading-loose'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui in quae, vero error eligendi quas voluptatem quod, exercitationem sapiente doloremque.
                </p>
                <AboutProgress/>
            </div>
        </div>
    </div>
  )
}

export default About