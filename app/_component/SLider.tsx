"use client";
import React from "react";
import Marquee from "@/components/magicui/marquee"; // Adjust the import path as needed

const Slider: React.FC<{ duration: number }> = ({ duration }) => {
    // Define the image array directly within the component
    const images = [
        "/logos/em.png",
        "/logos/jp.png",
        "/logos/VAURSE LOGO.png",
        "/logos/em.png",
        "/logos/jp.png",
        "/logos/VAURSE LOGO.png",
        "/logos/em.png",
        "/logos/jp.png",
        "/logos/VAURSE LOGO.png",
        "/logos/em.png",
        "/logos/jp.png",
        "/logos/VAURSE LOGO.png",
        "/logos/em.png",
        "/logos/jp.png",
        "/logos/VAURSE LOGO.png",
    ];

    return (
        <div className="relative overflow-hidden w-full">
            <Marquee pauseOnHover className={`[--duration:60s]`}>
                {images.map((src, index) => (
                    <img key={index} src={src} alt={`sponsor-${index}`} className="w-24 mx-2" />
                ))}
                {/* Duplicate the array to create a continuous loop effect */}
                {images.map((src, index) => (
                    <img key={`duplicate-${index}`} src={src} alt={`sponsor-${index}`} className="w-24  mx-2" />
                ))}
            </Marquee>
        </div>
    );
};

export default Slider;
