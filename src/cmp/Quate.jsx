import React from 'react';

const Quate = () => {
  return (
    <div className='w-full bg-[#F9FAFB] px-10 py-20'>
        <div className='max-w-[800px] mx-auto text-center'>
            <div>
                <svg class="h-12 mx-auto mb-3 text-gray-400" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"></path>
                </svg>
                <h4 className='text-md md:text-xl'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis perferendis quibusdam neque, consectetur harum odit atque praesentium? Asperiores expedita rem laborum non. Obcaecati velit assumenda dolore harum, atque dolorem eum!"</h4>
                <div className='flex items-center justify-center gap-4 mt-5'>
                    <img className='w-[25px] rounded-full' src="https://lh3.googleusercontent.com/a/ACg8ocIMqJD5kGjPBzIWyII1JLODidJ_o3Ru-_55ctXxiPbUqw=s288-c-no" alt="ceo-avatar" />
                    <span className='text-sm'>Micheal Gough</span>
                    <span>|</span>
                    <span className='text-slate-500 text-xs'>Ceo at Google</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Quate;