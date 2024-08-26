import React from 'react';

const Banner = () => {
  return (
    <div className="relative w-full h-[500px] mb-20">
      {/* Banner Image */}
      <img
        src="/slider2.jpg"
        alt="banner"
        className="w-full h-full object-cover"
      />

      {/* Overlay Text */}
      <div className="absolute inset-0 flex items-center w-full right-0 justify-end lg:justify-start">
        <div className="w-1/2 text-white text-2xl lg:text-4xl font-bold px-4 lg:px-16">
        Elevate your brand and increase exposure at this exclusive black tie event.

        </div>
      </div>
    </div>
  );
};

export default Banner;
