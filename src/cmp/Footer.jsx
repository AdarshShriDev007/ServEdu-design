import React from 'react';
import {BsInstagram,BsTwitter,BsGithub,BsFacebook} from "react-icons/bs";

const Footer = () => {
  return (
    <div className='w-full bg-white px-10 py-14'>
      <div className="max-w-[1240px] mx-auto border-b pb-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">

        <div>
          <span className='font-semibold text-xs md:text-sm uppercase'>company</span>
          <ul className='mt-5 text-xs md:text-sm text-slate-500'>
            <li className='cursor-pointer hover:underline mb-3'>About</li>
            <li className='cursor-pointer hover:underline mb-3'>Careers</li>
            <li className='cursor-pointer hover:underline mb-3'>Brand Center</li>
            <li className='cursor-pointer hover:underline mb-3'>Blog</li>
          </ul>
        </div>

        <div>
          <span className='font-semibold text-xs md:text-sm uppercase'>HELP CENTER</span>
          <ul className='mt-5 text-xs md:text-sm text-slate-500'>
            <li className='cursor-pointer hover:underline mb-3'>Discord Server</li>
            <li className='cursor-pointer hover:underline mb-3'>Twitter</li>
            <li className='cursor-pointer hover:underline mb-3'>Facebook</li>
            <li className='cursor-pointer hover:underline mb-3'>Contact Us</li>
          </ul>
        </div>

        <div>
          <span className='font-semibold text-xs md:text-sm uppercase'>Legal</span>
          <ul className='mt-5 text-xs md:text-sm text-slate-500'>
            <li className='cursor-pointer hover:underline mb-3'>Privacy Policy</li>
            <li className='cursor-pointer hover:underline mb-3'>Licensing</li>
            <li className='cursor-pointer hover:underline mb-3'>Terms</li>
          </ul>
        </div>

        <div>
          <span className='font-semibold text-xs md:text-sm uppercase'>company</span>
          <ul className='mt-5 text-xs md:text-sm text-slate-500'>
            <li className='cursor-pointer hover:underline mb-3'>About</li>
            <li className='cursor-pointer hover:underline mb-3'>Careers</li>
            <li className='cursor-pointer hover:underline mb-3'>Brand Center</li>
            <li className='cursor-pointer hover:underline mb-3'>Blog</li>
          </ul>
        </div>

        <div>
          <span className='font-semibold text-xs md:text-sm uppercase'>download</span>
          <ul className='mt-5 text-xs md:text-sm text-slate-500'>
            <li className='cursor-pointer hover:underline mb-3'>iOS</li>
            <li className='cursor-pointer hover:underline mb-3'>Android</li>
            <li className='cursor-pointer hover:underline mb-3'>Windows</li>
            <li className='cursor-pointer hover:underline mb-3'>MacOS</li>
          </ul>
        </div>

      </div>

      <div className="max-w-[800px] mx-auto pt-10 flex flex-col items-center">
        <img className='w-[20px] mb-3 md:w-[30px]' src="https://demo.themesberg.com/landwind/images/logo.svg" alt="footer-logo" />
        <span className='text-xs md:text-sm mb-3 text-slate-500'>© 2021-2022 ServEdu™. All Rights Reserved. Built with <a href="#" className='text-[#6C2BD9] hover:underline'>Tailwind CSS.</a></span>
        <div className='flex items-center gap-5 justify-center'>
          <BsFacebook className='text-slate-500 hover:text-black cursor-pointer text-sm md:text-[17px]' />
          <BsInstagram className='text-slate-500 hover:text-black cursor-pointer text-sm md:text-[17px]' />
          <BsTwitter className='text-slate-500 hover:text-black cursor-pointer text-sm md:text-[17px]' />
          <BsGithub className='text-slate-500 hover:text-black cursor-pointer text-sm md:text-[17px]' />
        </div>
      </div>
    </div>
  )
}

export default Footer;