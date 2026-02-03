import React from 'react'

const PROJECT_IMAGES =[
    "/images/p1.jpg",
    "/images/p2.jpg",
    "/images/p3.jpg",
    "/images/p4.jpg",
    "/images/p5.jpg",
    "/images/p6.jpg",
];



const Project = () => {
  return (
    <div className='pt-16 pb-16 bg-black'>
        <h2 className='text-[#b69974] text-lg text-center font-medium tracking-widest'>
            portfolio
        </h2>
        <h1 className='text-3xl md:text-5xl mt-4 text-white font-bold text-center'>
            Transforming ideas into <br /> 
            digital realit
        </h1>
    </div>
  )
}

export default Project