import React, { useState } from 'react';
import {AiOutlineMenu,AiOutlineClose} from "react-icons/ai";

const Header = () => {

    const [toggle,setToggle] = useState(false);

  return (
    <div className='w-full bg-white py-5 sticky top-0 left-0 z-10'>
        <div className="max-w-[1240px] px-10 mx-auto flex justify-between items-center text-slate-700 font-semibold">
            <div>
                <img className='w-[20px] md:w-[30px]' src="https://demo.themesberg.com/landwind/images/logo.svg" alt="logo" />
            </div>
            {
                toggle ? (<AiOutlineClose onClick={()=>setToggle(!toggle)} className='md:hidden block font-bold text-2xl cursor-pointer' />)
                : (<AiOutlineMenu onClick={()=>setToggle(!toggle)} className='md:hidden block font-bold text-2xl cursor-pointer' />)
                
            }
            
            <ul className='hidden md:flex gap-8'>
                <li className='text-[#570BD9] hover:text-[#570BD9] cursor-pointer duration-300'>Home</li>
                <li className='hover:text-[#570BD9] cursor-pointer duration-300'>Company</li>
                <li className='hover:text-[#570BD9] cursor-pointer duration-300'>Resources</li>
                <li className='hover:text-[#570BD9] cursor-pointer duration-300'>About Us</li>
                <li className='hover:text-[#570BD9] cursor-pointer duration-300'>Contact Us</li>
            </ul>

            {/* mobile responsive */}

            <ul className={`${toggle ? 'top-[62px]' : 'top-[-100%]'} shadow block md:hidden fixed left-0 p-5 bg-white w-full text-[20px] text-center duration-1000`}>
                <li className='my-5 text-[#570BD9] hover:text-[#570BD9] cursor-pointer duration-300'>Home</li>
                <li className='my-5 hover:text-[#570BD9] cursor-pointer duration-300'>Company</li>
                <li className='my-5 hover:text-[#570BD9] cursor-pointer duration-300'>Resources</li>
                <li className='my-5 hover:text-[#570BD9] cursor-pointer duration-300'>About Us</li>
                <li className='my-5 hover:text-[#570BD9] cursor-pointer duration-300'>Contact Us</li>
            </ul>
        
        </div>
    </div>
  )
}

export default Header;