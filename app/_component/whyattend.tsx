'use client';
import React from "react";
import { GlobeAltIcon } from "@heroicons/react/16/solid";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaAward, FaBolt, FaHandshake, FaLightbulb } from "react-icons/fa";
import { MagicCard } from "@/components/magicui/magic-card";
import Slider from "react-slick";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';



const WhyAttend = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
    <div className=" bg-lighterGray p-10 hidden lg:block">
      <div className="grid lg:grid-cols-3 gap-2 grid-rows-2">
        <MagicCard className="flex flex-col h-[16.5rem] p-3 justify-center items-center cursor-pointer bg-white rounded-none " gradientColor="#071D5240" gradientOpacity={20} gradientSize={300}>
        <div className="">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-montserrat text-themeBlue font-bold">Why Attend PELA?</h2>
          </div>
        </div>
        </MagicCard>
       <MagicCard className="flex flex-col h-[16.5rem] p-3 justify-center items-center cursor-pointer bg-white rounded-none " gradientColor="#071D5240" gradientOpacity={20} gradientSize={300}>
       <div>
          <div className="flex flex-col p-10 font-montserrat lg:text-3xl justify-around items-start  text-themeBlue">
            <div className="flex w-full items-center justify-between ">
             
              <h2 className="text-2xl  font-bold">Recognition</h2>
              <FaAward className="h-14 w-14" />
            </div>
            <p className="text-lg text-start text-slate-500">
            Recognition at Leading Energy Sector Focused B2B Platform.
            </p>
          </div>
        </div>
       </MagicCard>

       <MagicCard className="flex flex-col h-[16.5rem] p-3 justify-center items-center cursor-pointer bg-white rounded-none " gradientColor="#071D5240" gradientOpacity={20} gradientSize={300}>
       <div>
          <div className="flex flex-col p-10 font-montserrat lg:text-3xl justify-between items-start   text-themeBlue">
            <div className="flex w-full items-center justify-between ">
             
              <h2 className="text-2xl  font-bold">Partnerships with Industries</h2>
              <FaHandshake className="h-14 w-14" 
                
              />
            </div>
            <p className="text-lg text-start text-slate-500">
            Build partnerships in smart solutions, renewable energy, energy storage, green hydrogen, power distribution, backup power, and energy diversification.
            </p>
          </div>
        </div>
       </MagicCard>
        <MagicCard className="flex flex-col h-[16.5rem] p-3 justify-center items-center cursor-pointer bg-white rounded-none " gradientColor="#071D5240" gradientOpacity={20} gradientSize={300}>
        <div>
          <div className="flex flex-col p-10 font-montserrat lg:text-3xl justify-between items-start   text-themeBlue">
            <div className="flex w-full items-center justify-between ">
             
              <h2 className="text-2xl  font-bold">Encourage innovation and Excellence</h2>
              <FaLightbulb className="h-14 w-14" 
                
              />
            </div>
            <p className="text-lg text-start text-slate-500">
            Encourage innovation and excellence within your organization by celebrating and learning from industry trailblazers.
            </p>
          </div>
        </div>
        </MagicCard >
        <MagicCard className="flex flex-col h-[16.5rem] p-3 justify-center items-center cursor-pointer bg-white rounded-none " gradientColor="#071D5240" gradientOpacity={20} gradientSize={300}>
        <div>
          <div className="flex flex-col p-10 font-montserrat lg:text-3xl justify-between items-start  text-themeBlue">
            <div className="flex w-full items-center justify-between ">
             
              <h2 className="text-2xl  font-bold">Learn Trending energy solutions</h2>
              <FaBolt className="h-14 w-14" 
                
              />
            </div>
            <p className="text-lg text-start text-slate-500">
            Encourage innovation and excellence within your organization by celebrating and learning from industry trailblazers.
            </p>
          </div>
        </div>
        </MagicCard>
        <div className="bg-white p-10 text-white h-[16.5rem]">
          <div className="flex flex-col gap-5 justify-center h-full">
            <div className="px-10 py-3 flex justify-center bg-themeGreen ">
                <p>Book a Table</p>
                <FaArrowAltCircleRight/>
            </div>
            <div className="px-10 py-3 bg-themeBlue flex justify-center ">
              Join Delegate
            </div>
          </div>
        </div>
      
      </div>
    
    </div>
    <>
     <div className="bg-lighterGray p-5 lg:hidden block">
     <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper lg:hidden block"
      >
        <SwiperSlide>
        <div className="flex flex-col h-[16.5rem] p-3 justify-center items-center cursor-pointer bg-white rounded-none " >
        <div className="">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-montserrat text-themeBlue font-bold">Why Attend PELA?</h2>
          </div>
        </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="flex flex-col h-[16.5rem] p-3 justify-center items-center cursor-pointer bg-white rounded-none " >
       <div>
          <div className="flex flex-col p-10 font-montserrat lg:text-3xl justify-around items-start  text-themeBlue">
            <div className="flex w-full items-center justify-between ">
             
              <h2 className="text-2xl  font-bold">Recognition</h2>
              <FaAward className="h-14 w-14" />
            </div>
            <p className="text-lg text-start text-slate-500">
            Recognition at Leading Energy Sector Focused B2B Platform.
            </p>
          </div>
        </div>
       </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="flex flex-col h-[16.5rem] p-3 justify-center items-center cursor-pointer bg-white rounded-none " >
       <div>
          <div className="flex flex-col p-10 font-montserrat lg:text-3xl justify-between items-start   text-themeBlue">
            <div className="flex w-full items-center justify-between ">
             
              <h2 className="text-2xl  font-bold">Partnerships with Industries</h2>
              <FaHandshake className="h-14 w-14" 
                
              />
            </div>
            <p className="text-lg text-start text-slate-500">
            Build partnerships in smart solutions, renewable energy, energy storage, green hydrogen, power distribution, backup power, and energy diversification.
            </p>
          </div>
        </div>
       </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="flex flex-col h-[16.5rem] p-3 justify-center items-center cursor-pointer bg-white rounded-none " >
        <div>
          <div className="flex flex-col p-10 font-montserrat lg:text-3xl justify-between items-start   text-themeBlue">
            <div className="flex w-full items-center justify-between ">
             
              <h2 className="text-2xl  font-bold">Encourage innovation and Excellence</h2>
              <FaLightbulb className="h-14 w-14" 
                
              />
            </div>
            <p className="text-lg text-start text-slate-500">
            Encourage innovation and excellence within your organization by celebrating and learning from industry trailblazers.
            </p>
          </div>
        </div>
        </div >
        </SwiperSlide>
        <SwiperSlide>
        <div className="flex flex-col h-[16.5rem] p-3 justify-center items-center cursor-pointer bg-white rounded-none " >
        <div>
          <div className="flex flex-col p-10 font-montserrat lg:text-3xl justify-between items-start  text-themeBlue">
            <div className="flex w-full items-center justify-between ">
             
              <h2 className="text-2xl  font-bold">Learn Trending energy solutions</h2>
              <FaBolt className="h-14 w-14" 
                
              />
            </div>
            <p className="text-lg text-start text-slate-500">
            Encourage innovation and excellence within your organization by celebrating and learning from industry trailblazers.
            </p>
          </div>
        </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="bg-white p-10 text-white h-[16.5rem]">
          <div className="flex flex-col gap-5 justify-center h-full">
            <div className="px-10 py-3 flex justify-center bg-themeGreen ">
                <p>Book a Table</p>
                <FaArrowAltCircleRight/>
            </div>
            <div className="px-10 py-3 bg-themeBlue flex justify-center ">
              Join Delegate
            </div>
          </div>
        </div>
        </SwiperSlide>
     
      </Swiper>
     </div>
    </>
    </>
  );
};

export default WhyAttend;
