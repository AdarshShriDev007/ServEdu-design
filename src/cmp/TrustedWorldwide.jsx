import React from 'react';
import {BsArrowRight,BsPeopleFill} from "react-icons/bs";
import {AiFillDatabase} from "react-icons/ai";
import {FaEarthAmericas} from "react-icons/fa6";
import {FaShoppingCart} from "react-icons/fa";

const TrustedWorldwide = () => {
  return (
    <div className="w-full bg-white p-10">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-36">
           <div className='flex flex-col justify-center'>
                <h4 className='text-[#9061F9] font-semibold mb-5 text-[13px] md:text-[15px] lg:text-[17px]'>Trusted Worldwide</h4>
                <div className='border-b-[1px] pb-5'>
                    <h2 className='text-xl md:text-2xl lg:text-3xl font-bold mb-3'>Trusted by over 600 million users and 10,000 teams</h2>
                    <span className='text-slate-500 text-[13px] md:text-[15px] lg:text-[17px]'>Our rigorous security and compliance standards are at the heart of all we do. We work tirelessly to protect you and your customers.</span>
                </div>
                <div className='mt-5'>
                    <div className='flex group items-center gap-3 mb-5 hover:cursor-pointer'>
                        <span className='text-[#9061f9] text-sm font-semibold group-hover:text-[#651CE2]'>Explore Legality Guide</span>
                        <BsArrowRight className='text-[#9061f9] group-hover:text-[#651CE2]' />
                    </div>
                    <div className='flex group items-center gap-3 mb-5 hover:cursor-pointer'>
                        <span className='text-[#9061f9] text-sm font-semibold group-hover:text-[#651CE2]'>Visit the Trust Center</span>
                        <BsArrowRight className='text-[#9061f9] group-hover:text-[#651CE2]' />
                    </div>
                </div>
           </div>

           <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-5'>
                <div className='mb-5'>
                    <AiFillDatabase className='text-4xl md:text-5xl text-[#9061f9] mb-4' />
                    <h4 className='text-lg md:text-xl font-semibold'>99.99% uptime</h4>
                    <span className='text-sm text-slate-500'>zero maintenance downtime</span>
                </div>
                <div className='mb-5'>
                    <BsPeopleFill className='text-4xl md:text-5xl text-[#9061f9] mb-4' />
                    <h4 className='text-lg md:text-xl font-semibold'>600M+ Users</h4>
                    <span className='text-sm text-slate-500'>Trusted by over 600 milion users around the world</span>
                </div> 
                <div className='mb-5'>
                    <FaEarthAmericas className='text-4xl md:text-5xl text-[#9061f9] mb-4' />
                    <h4 className='text-lg md:text-xl font-semibold'>100+ countries</h4>
                    <span className='text-sm text-slate-500'>Lorem ipsum dolor sit, amet consectetur adipisicing.</span>
                </div> 
                <div>
                    <FaShoppingCart className='text-4xl md:text-5xl text-[#9061f9] mb-4' />
                    <h4 className='text-lg md:text-xl font-semibold'>5+ Million</h4>
                    <span className='text-sm text-slate-500'>Transactions per day</span>
                </div> 
           </div>
        </div>
    </div>
  )
}

export default TrustedWorldwide;