"use client";
import React from 'react'
import Tilt from "react-parallax-tilt"
import Image from 'next/image';


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
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-20 w-[80%] mx-auto gap-6'>
            {PROJECT_IMAGES.map((src, idx)=>{
                return <div 
                data-aos="zoom-in" 
                data-aos-anchor-placement="top-center"
                data-aos-delay={idx * 100}
                key={idx}>
                    <Tilt>
                        <img 
                        src={src} 
                        alt="project" 
                        width={350}
                        height={450}
                        className='rounded-md'
                        />
                    </Tilt>
                </div>;
            })}
        </div>
    </div>
  )
}

export default Project