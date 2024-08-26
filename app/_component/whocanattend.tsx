'use client';
import React from 'react';
import { MagicCard } from '@/components/magicui/magic-card';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { FaIndustry, FaRegBuilding, FaSolarPanel, FaMoneyBillWave } from 'react-icons/fa';
import { Pagination } from 'swiper/modules';

const WhoCanAttend = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };

  return (
   <div>
     <>
      {/* Desktop Layout */}
      <div className='relative lg:flex flex-col mb-20 justify-center items-center hidden '>
        {/* Background Image with Overlay */}
        <h2 className='text-xl text-themeBlue font-semibold'>Who can Attend Pela</h2>

        {/* Cards Section */}
        <div className=" top-20 right-0 left-0 mx-auto lg:w-[60%] bg-white p-10 rounded-3xl shadow-lg">
          <div className="grid lg:grid-cols-2 gap-8">
            <MagicCard className="flex flex-col h-[16.5rem] p-5 justify-center items-start cursor-pointer bg-gradient-to-br from-blue-100 to-white shadow-md rounded-xl transform hover:scale-105 transition duration-300"  gradientColor="#071D5240" gradientOpacity={20} gradientSize={300}>
              <FaRegBuilding className="h-12 w-12 text-themeBlue mb-4" />
              <h3 className="text-2xl font-bold text-themeBlue">Government</h3>
              <p className="text-lg text-slate-600">
                Government support is vital in the energy sector, crucial for acceptance and growth.
              </p>
            </MagicCard>

            <MagicCard className="flex flex-col h-[16.5rem] p-5 justify-center items-start cursor-pointer bg-gradient-to-br from-green-100 to-white shadow-md rounded-xl transform hover:scale-105 transition duration-300" gradientColor="#071D5240" gradientOpacity={20} gradientSize={300}>
              <FaSolarPanel className="h-12 w-12 text-themeBlue mb-4" />
              <h3 className="text-2xl font-bold text-themeBlue">Utilities & Regulatory</h3>
              <p className="text-lg text-slate-600">
                As renewable energy costs decline, the utilities sector finds itself at a crossroads.
              </p>
            </MagicCard>

            <MagicCard className="flex flex-col h-[16.5rem] p-5 justify-center items-start cursor-pointer bg-gradient-to-br from-yellow-100 to-white shadow-md rounded-xl transform hover:scale-105 transition duration-300" gradientColor="#071D5240" gradientOpacity={20} gradientSize={300}>
              <FaIndustry className="h-12 w-12 text-themeBlue mb-4" />
              <h3 className="text-2xl font-bold text-themeBlue">Wholesalers, Manufacturers & Resellers</h3>
              <p className="text-lg text-slate-600">
                Build strong business relationships and network with powerful industry leaders.
              </p>
            </MagicCard>

            <MagicCard className="flex flex-col h-[16.5rem] p-5 justify-center items-start cursor-pointer bg-gradient-to-br from-red-100 to-white shadow-md rounded-xl transform hover:scale-105 transition duration-300" gradientColor="#071D5240" gradientOpacity={20} gradientSize={300}>
              <FaMoneyBillWave className="h-12 w-12 text-themeBlue mb-4" />
              <h3 className="text-2xl font-bold text-themeBlue">Project Financiers</h3>
              <p className="text-lg text-slate-600">
                Partner with companies that provide the most effective and efficient energy solutions.
              </p>
            </MagicCard>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="bg-white p-5 lg:hidden block">
        <h2 className="text-3xl font-montserrat text-themeBlue font-bold text-center mb-5">Who Can Attend?</h2>
        <Swiper pagination={pagination} modules={[Pagination]} className="mySwiper">
          <SwiperSlide>
            <div className="flex flex-col h-[16.5rem] p-5 justify-center items-center cursor-pointer bg-gradient-to-br from-blue-100 to-white shadow-md rounded-xl">
              <FaRegBuilding className="h-12 w-12 text-themeBlue mb-4" />
              <h3 className="text-2xl font-bold text-themeBlue">Government</h3>
              <p className="text-lg text-slate-600 text-center">
                Government support is vital in the energy sector, crucial for acceptance and growth.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col h-[16.5rem] p-5 justify-center items-center cursor-pointer bg-gradient-to-br from-green-100 to-white shadow-md rounded-xl">
              <FaSolarPanel className="h-12 w-12 text-themeBlue mb-4" />
              <h3 className="text-2xl font-bold text-themeBlue">Utilities & Regulatory</h3>
              <p className="text-lg text-slate-600 text-center">
                As renewable energy costs decline, the utilities sector finds itself at a crossroads.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col h-[16.5rem] p-5 justify-center items-center cursor-pointer bg-gradient-to-br from-yellow-100 to-white shadow-md rounded-xl">
              <FaIndustry className="h-12 w-12 text-themeBlue mb-4" />
              <h3 className="text-2xl font-bold text-themeBlue">Wholesalers, Manufacturers & Resellers</h3>
              <p className="text-lg text-slate-600 text-center">
                Build strong business relationships and network with powerful industry leaders.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col h-[16.5rem] p-5 justify-center items-center cursor-pointer bg-gradient-to-br from-red-100 to-white shadow-md rounded-xl">
              <FaMoneyBillWave className="h-12 w-12 text-themeBlue mb-4" />
              <h3 className="text-2xl font-bold text-themeBlue">Project Financiers</h3>
              <p className="text-lg text-slate-600 text-center">
                Partner with companies that provide the most effective and efficient energy solutions.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
   </div>
  );
};

export default WhoCanAttend;
