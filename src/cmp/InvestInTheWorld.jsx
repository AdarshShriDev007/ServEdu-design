import React from 'react';
import {AiFillCheckCircle} from "react-icons/ai";

const InvestInTheWorld = () => {
  return (
    <div className='w-full bg-[#F9FAFB] p-10'>
        <div className='max-w-[1240px] flex flex-col flex-col-reverse lg:flex-row mx-auto lg:gap-20'>
            <div className='flex items-center'>
                <img src="https://demo.themesberg.com/landwind/images/feature-2.png" alt="investInTheWorld" />
            </div>
            <div className='flex flex-col justify-center'>
                <div className='border-b-[1px] pb-5'>
                    <h2 className='text-xl md:text-2xl lg:text-3xl font-bold mb-3'>We invest in the world’s potential</h2>
                    <span className='text-slate-500 text-[13px] md:text-[15px] lg:text-[17px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nesciunt, iure iste placeat, perferendis, molestiae officia dignissimos nam blanditiis ratione deleniti neque quisquam quos porro consequatur? Voluptatum est a nam?</span>
                </div>
                <div className='pt-5'>
                    <div className='flex items-center gap-3 mb-5'>
                        <AiFillCheckCircle className='text-[#9061F9] text-[18px]' />
                        <span className='text-sm font-semibold'>Dynamic reports and dashboards</span>
                    </div>
                    <div className='flex items-center gap-3 mb-5'>
                        <AiFillCheckCircle className='text-[#9061F9] text-[18px]' />
                        <span className='text-sm font-semibold'>Templates for everyone</span>
                    </div>
                    <div className='flex items-center gap-3 mb-5'>
                        <AiFillCheckCircle className='text-[#9061F9] text-[18px]' />
                        <span className='text-sm font-semibold'>Development workflow</span>
                    </div>
                    <div className='flex items-center gap-3 mb-5'>
                        <AiFillCheckCircle className='text-[#9061F9] text-[18px]' />
                        <span className='text-sm font-semibold'>Limitless business automation</span>
                    </div>
                    <div className='flex items-center gap-3 mb-5'>
                        <AiFillCheckCircle className='text-[#9061F9] text-[18px]' />
                        <span className='text-sm font-semibold'>Knowledge management</span>
                    </div>
                </div>
                <span className='text-slate-500 text-[13px] md:text-[15px] lg:text-[17px]'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptatum debitis placeat.
                </span>
            </div>
        </div>
    </div>
  )
}

export default InvestInTheWorld;