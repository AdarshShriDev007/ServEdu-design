import React from 'react';

const Banner = () => {
  return (
    <div className='w-full bg-white py-10'>
        <div className='max-w-[1240px] px-10 mx-auto grid grid-cols-1 md:grid-cols-2'>
            <div className='flex flex-col justify-center text-center md:text-left'>
                <h1 className='text-3xl md:text-4xl lg:text-6xl font-bold mb-5'>Building digital products & brands.</h1>
                <span className='text-slate-500 text-[13px] md:text-[15px] lg:text-[17px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id esse ut, eaque a quas, reiciendis temporibus illo ab sequi cumque assumenda! Quam qui delectus assumenda eius nam, iusto ratione velit.</span>
            </div>
            <div className='md:flex md:justify-end'>
                <img className='md:w-[80%]' src="https://demo.themesberg.com/landwind/images/hero.png" alt="banner" />
            </div>
        </div>
    </div>
  )
}

export default Banner;