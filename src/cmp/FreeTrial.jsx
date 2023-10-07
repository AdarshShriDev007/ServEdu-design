import React from 'react';

const FreeTrial = () => {
  return (
    <div className='w-full bg-[#F9FAFB] px-10 py-14'>
        <div className='max-w-[800px] mx-auto'>
            <div className='flex flex-col items-center'>
                <h2 className='text-xl md:text-2xl lg:text-3xl font-bold mb-3'>Start your free trial today</h2>
                <span className='text-slate-500 text-[13px] md:text-[15px] lg:text-[17px]'>For 30 days. No credit card required.</span>
                <button className='bg-[#9061F9] mt-3 text-xs md:text-sm text-white rounded-md py-[8px] px-[20px] cursor-pointer hover:scale-105 hover:bg-[#6C2BD9] duration-300'>Free trial for 30 days</button>
            </div>
        </div>
    </div>
  )
}

export default FreeTrial;