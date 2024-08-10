"use client";
import React, { useEffect, useRef, useState } from 'react';

interface GalleryCarouselProps {
  images: string[];
}

const GalleryCarousel: React.FC<GalleryCarouselProps> = ({ images }) => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [isAnimating, setIsAnimating] = useState<boolean>(true);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  
  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      const totalWidth = carousel.scrollWidth / 2; // Full width of the images for one cycle
      const stepWidth = totalWidth / 10; // Move 10% of the total width each step
      const stepDuration = 4000; // Duration for each step
      const pauseDuration = 2000; // Duration for pause

      let animationFrameId: number;
      let startTime: number | null = null;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const elapsedTime = timestamp - startTime;
        const stepCount = Math.floor(elapsedTime / stepDuration);
        const scrollPosition = stepWidth * stepCount;

        if (scrollPosition < totalWidth) {
          carousel.style.transform = `translateX(-${scrollPosition}px)`;
          animationFrameId = requestAnimationFrame(animate);
        } else {
          setTimeout(() => {
            setCurrentIndex(prev => (prev + 1) % images.length);
            carousel.style.transition = 'none'; // Remove transition for instant jump
            carousel.style.transform = `translateX(-${stepWidth * 10}px)`;
            setTimeout(() => {
              carousel.style.transition = `transform ${stepDuration}ms cubic-bezier(.78,.03,.14,.55)`;
              carousel.style.transform = `translateX(-${stepWidth * 11}px)`;
              setIsAnimating(true); // Resume animation
            }, pauseDuration);
          }, stepDuration);
        }
      };

      if (isAnimating) {
        animationFrameId = requestAnimationFrame(animate);
      }

      return () => {
        cancelAnimationFrame(animationFrameId);
      };
    }
  }, [isAnimating, images.length]);

  return (
    <div className="relative overflow-hidden w-full h-[35vh] hover:cursor-pointer">
      <div
        className="flex h-full"
        ref={carouselRef}
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '200%', // Double the width for smooth continuous scroll
          transition: 'transform 3s cubic-bezier(.78,.03,.14,.55)', // Custom cubic-bezier easing
        }}
      >
        {images.concat(images).map((src, index) => (
          <div key={index} className="flex-shrink-0 w-1/2 lg:w-1/4  p-2">
            <img
              src={src}
              alt={`Carousel ${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 hidden bg-gray-500 text-white p-2 z-10"
        onClick={() => setIsAnimating(false)}
      >
        Pause
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 hidden bg-gray-500 text-white p-2 z-10"
        onClick={() => setIsAnimating(true)}
      >
        Play
      </button>
    </div>
  );
};

export default GalleryCarousel;
