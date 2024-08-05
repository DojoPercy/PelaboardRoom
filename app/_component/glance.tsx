import React from 'react'
import GalleryCarousel from './gallery'

const GlancePela = () => {
    const images1 = [
        '/rad/11.jpg',
        '/rad/2.jpg',
        '/rad/3.jpg',
        '/rad/4.jpg',
        '/rad/5.jpg',
        
      ];
      const images2 = [
        '/rad/6.jpg',
        '/rad/7.jpg',
        '/rad/8.jpg',
        '/rad/9.jpg',
        '/rad/10.jpg',
        
      ]
  return (
    <div className=''>
        <span className='px-2 lg:px-40 text-themeBlue font-semibold text-[20px]'>
            Glance at PELA
        </span>
        <GalleryCarousel images={images1} />
        <GalleryCarousel images={images2} />
    </div>
  )
}

export default GlancePela