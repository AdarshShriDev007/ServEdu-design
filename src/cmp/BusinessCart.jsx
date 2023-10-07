import React from 'react';
import {AiOutlineCheck} from "react-icons/ai";

const BusinessCart = () => {
  return (
    <div className='w-full bg-white px-10 py-20'>
        <div className="max-w-[800px] mx-auto text-center">
            <h2 className='text-xl md:text-2xl lg:text-3xl font-bold mb-3'>Work with tools you already use</h2>
            <span className='text-slate-500 text-[13px] md:text-[15px] lg:text-[17px]'>we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</span>
        </div>

        <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-3 mt-10 gap-5">
            <div className='shadow-md border p-10 rounded-md'>
                <div className='text-center'>
                    <h4 className='text-lg md:text-xl font-semibold mb-3'>Starter</h4>
                    <span className='text-sm md:text-[16px] text-slate-500'>Best option for personal use & for your next project.</span>
                    <h4 className='text-3xl md:text-5xl font-bold mt-7'>$29 <span className='text-xs md:text-sm font-normal'>/month</span></h4>
                </div>
                <ul className='mt-7'>
                    <li className='flex items-center text-xs md:text-sm gap-3 mb-4'><AiOutlineCheck className='text-[#34AE85]' /> Individual configuration</li>
                    <li className='flex items-center text-xs md:text-sm gap-3 mb-4'><AiOutlineCheck className='text-[#34AE85]' /> No setup, or hidden fees</li>
                    <li className='flex items-center text-xs md:text-sm gap-3 mb-4'><AiOutlineCheck className='text-[#34AE85]' /> Team size: <b>1 developer</b></li>
                    <li className='flex items-center text-xs md:text-sm gap-3 mb-4'><AiOutlineCheck className='text-[#34AE85]' /> Premium support: <b>6 months</b></li>
                    <li className='flex items-center text-xs md:text-sm gap-3 mb-7'><AiOutlineCheck className='text-[#34AE85]' /> Free updates: <b>6 months</b></li>
                </ul>
                <button className='bg-[#9061F9] text-xs md:text-sm text-white w-full rounded-md p-[8px] cursor-pointer hover:scale-105 hover:bg-[#6C2BD9] duration-300'>Get started</button>
            </div>

            <div className='shadow-md border p-10 rounded-md'>
                <div className='text-center'>
                    <h4 className='text-lg md:text-xl font-semibold mb-3'>Company</h4>
                    <span className='text-sm md:text-[16px] text-slate-500'>Relevant for multiple users, extended & premium support.</span>
                    <h4 className='text-3xl md:text-5xl font-bold mt-7'>$99 <span className='text-xs md:text-sm font-normal'>/month</span></h4>
                </div>
                <ul className='mt-7'>
                    <li className='flex items-center text-xs md:text-sm gap-3 mb-4'><AiOutlineCheck className='text-[#34AE85]' /> Individual configuration</li>
                    <li className='flex items-center text-xs md:text-sm gap-3 mb-4'><AiOutlineCheck className='text-[#34AE85]' /> No setup, or hidden fees</li>
                    <li className='flex items-center text-xs md:text-sm gap-3 mb-4'><AiOutlineCheck className='text-[#34AE85]' /> Team size: <b>10 developer</b></li>
                    <li className='flex items-center text-xs md:text-sm gap-3 mb-4'><AiOutlineCheck className='text-[#34AE85]' /> Premium support: <b>24 months</b></li>
                    <li className='flex items-center text-xs md:text-sm gap-3 mb-7'><AiOutlineCheck className='text-[#34AE85]' /> Free updates: <b>24 months</b></li>
                </ul>
                <button className='bg-[#9061F9] text-xs md:text-sm text-white w-full rounded-md p-[8px] cursor-pointer hover:scale-105 hover:bg-[#6C2BD9] duration-300'>Get started</button>
            </div>

            <div className='shadow-md border p-10 rounded-md'>
                <div className='text-center'>
                    <h4 className='text-lg md:text-xl font-semibold mb-3'>Enterprise</h4>
                    <span className='text-sm md:text-[16px] text-slate-500'>Best for large scale uses and extended redistribution rights.</span>
                    <h4 className='text-3xl md:text-5xl font-bold mt-7'>$499 <span className='text-xs md:text-sm font-normal'>/month</span></h4>
                </div>
                <ul className='mt-7'>
                    <li className='flex items-center text-xs md:text-sm gap-3 mb-4'><AiOutlineCheck className='text-[#34AE85]' /> Individual configuration</li>
                    <li className='flex items-center text-xs md:text-sm gap-3 mb-4'><AiOutlineCheck className='text-[#34AE85]' /> No setup, or hidden fees</li>
                    <li className='flex items-center text-xs md:text-sm gap-3 mb-4'><AiOutlineCheck className='text-[#34AE85]' /> Team size: <b>100+ developer</b></li>
                    <li className='flex items-center text-xs md:text-sm gap-3 mb-4'><AiOutlineCheck className='text-[#34AE85]' /> Premium support: <b>36 months</b></li>
                    <li className='flex items-center text-xs md:text-sm gap-3 mb-7'><AiOutlineCheck className='text-[#34AE85]' /> Free updates: <b>36 months</b></li>
                </ul>
                <button className='bg-[#9061F9] text-xs md:text-sm text-white w-full rounded-md p-[8px] cursor-pointer hover:scale-105 hover:bg-[#6C2BD9] duration-300'>Get started</button>
            </div>
        </div>
    </div>
  )
}

export default BusinessCart;