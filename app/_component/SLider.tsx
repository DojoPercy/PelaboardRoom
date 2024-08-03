"use client";
import React from "react";

interface SliderProps {
    duration: number; 
}

const Slider: React.FC<SliderProps> = ({ duration }) => {
    return (
        <div className="relative overflow-hidden w-full">
            <div
                className="flex space-x-3 animate-slider"
                style={{ animationDuration: `${duration}s` }}
            >
                <img src="/logos/em.png" alt="sponsor" className="w-[9rem]" />
                <img src="/logos/jp.png" alt="sponsor" className="w-[5rem]" />
                <img src="/logos/VAURSE LOGO.png" alt="sponsor" className="w-[8rem]" />
             
                <img src="/logos/em.png" alt="sponsor" className="w-[9rem]" />
                <img src="/logos/jp.png" alt="sponsor" className="w-[5rem]" />
                <img src="/logos/VAURSE LOGO.png" alt="sponsor" className="w-[8rem]" />
                <img src="/logos/em.png" alt="sponsor" className="w-[9rem]" />
                <img src="/logos/jp.png" alt="sponsor" className="w-[5rem]" />
                <img src="/logos/VAURSE LOGO.png" alt="sponsor" className="w-[8rem]" />
                <img src="/logos/em.png" alt="sponsor" className="w-[9rem]" />
                <img src="/logos/jp.png" alt="sponsor" className="w-[5rem]" />
                <img src="/logos/VAURSE LOGO.png" alt="sponsor" className="w-[8rem]" />
                <img src="/logos/em.png" alt="sponsor" className="w-[9rem]" />
                <img src="/logos/jp.png" alt="sponsor" className="w-[5rem]" />
                <img src="/logos/VAURSE LOGO.png" alt="sponsor" className="w-[8rem]" />
            </div>
        </div>
    );
};

export default Slider;
