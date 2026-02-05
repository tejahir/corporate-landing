import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-[80vh] bg-[#1f242c] flex justify-center flex-col'>
        <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 items-center'>
            <div>
                <h1 data-aos="fade-up"
                className='text-4xl md:text-7xl font-bold text-white'>Crafting your digital story with passion
                </h1>
                <p 
                data-aos="fade-up"
                data-aos-delay="150"
                 className='ml-0 md:ml-12 md:mt-10 mt-5 text-sm md:text-base font-semibold text-white'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quaerat iusto, dolorem, vitae quo voluptate tenetur asperiores voluptas suscipit vel voluptatum alias.
                </p>
                
                <button 
                data-aos="fade-up"
                data-aos-delay="300"
                 className='px-12 py-4 rounded-full mt-10 md:ml-12 text-white font-semibold cursor-pointer hover:bg-[#9f7c4e] transition-all duration-300 outline-2 outline-gray-300'>Discover More</button>
            </div>
            <div
             data-aos="fade-down"
                data-aos-delay="450" 
                className='absolute top-0 right-48 hidden lg:block'>
                <img src="/images/hero.png" width={550} height={550} alt="img" />
            </div>
        </div>
    </div>
  )
}

export default Hero