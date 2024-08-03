"use client";
import React, { useEffect, useState } from "react";
import Header from "./header";

const Hero = () => {
    const [isScroll, setIsScroll] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 400) {
            setIsScroll(true);
          } else {
            setIsScroll(false);
          }
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);
  return (
    <div className="w-full px-2 lg:px-40 h-[96vh] lg:h-[100vh]  bg-custom-heroBg bg-custom-position bg-cover flex justify-center items-center relative">
        <div className={`${isScroll ? "absolute" : 'absolute'} w-full h-full z-50  top-0 right-0`}>
            <Header />
        </div>
        <div className={`fixed w-full z-50 left-0 top-0 transition-transform duration-500 ease-out ${isScroll ? 'translate-y-0 opacity-100 ' : '-translate-y-[100%] opacity-0'}`}>
                <Header />
            </div>
        <div className="absolute w-full h-full top-0 right-0 bg-white opacity-[0.27] z-10">

        </div>
      <div className="flex flex-col justify-end items-center lg:mt-[9rem]  lg:items-start mt-20 z-20">
        <div className="flex space-x-2">
          <img src="/pinimg.png" alt="logo" className="w-5 h-5" />
          <div className="">
            <span className="text-[15px]  bg-clip-text text-transparent bg-location-gradient font-bold">
              Middle East & Africa
            </span>
          </div>
        </div>
        <div className="flex  justify-center lg:items-start lg:justify-start w-full flex-col space-x-2">
            <span className="font-[900] text-[37px] lg:text-[75px] text-white lg:text-start text-center lg:leading-[100px]">
            Attend Premier Energy Leadership Conference & Awards 2024
            </span>
            <span className="font-semibold text-[15px] lg:text-[15px] lg:text-start lg:w-[50%] text-LightGray text-center">
            Join industry leaders and innovators at #PELADubai2024. Network, celebrate, and shape the future of energy.
            </span>
        </div>
        <div className="mt-5">
            <div className=" px-20 py-2 bg-themeGreen rounded-[5px] drop-shadow-lg shadow-custom-button flex justify-center items-center space-x-3 hover:cursor-pointer">
                <img src="/reservation.png" alt="calendar" className="w-8 h-8 filter invert  " />
                <span className="text-white font-semibold text-[15px]">Book a Table</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
