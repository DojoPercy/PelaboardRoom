"use client";
import React, { useEffect, useState } from 'react'


const Header  = ({}) => {
   
  return (
    <React.Fragment>
        <div className=' w-full text-white shadow-lg  flex flex-col '>
        <div className='bg-themeBlue px-2 py-3 lg:px-40 h-full w-full flex items-center justify-between'>
            <img src="/logo_white.png" alt="logo" className="w-40 " />
            <img src="/menu.png" alt="menu" className="w-6 h-6 filter invert hover:cursor-pointer lg:hidden block" />
            <div className="hidden lg:flex px-10 py-2 z-50 bg-speBut rounded-[5px] drop-shadow-lg shadow-custom-button  justify-center items-center space-x-3 hover:cursor-pointer">
                <img src="/reservation.png" alt="calendar" className="w-5 h-5   " />
                <span className="text-black font-semibold text-[12px]">Book a Table</span>
            </div>
        </div>
        <div className='bg-white py-2  w-full hidden lg:block '>
            <ul className='flex justify-center space-x-5 items-center py-1 text-black font-normal text-[15px] cursor-pointer'>
                <li className='text-red-700 font-semibold '>Home</li>
                <li>Awards</li>
                <li>Conferences</li>
            </ul>
        </div>
    </div>
 
    </React.Fragment>

  )
}

export default Header