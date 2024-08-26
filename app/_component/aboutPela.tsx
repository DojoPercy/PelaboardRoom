"use client";
import React, { useState, useEffect, useRef } from 'react';
import CounterIn from './counter';

const splitTextIntoSpans = (text: string, inView: boolean, currentIndex: number) => {
  let charIndex = 0;
  return text.split(/(\s+)/).map((word, wordIndex) => (
    <span key={wordIndex} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
      {word.split('').map((letter, index) => {
        const overallIndex = charIndex;
        charIndex += 1;
        return (
          <span
            key={index}
            className={`letter-animation ${inView && overallIndex <= currentIndex ? 'text-black' : 'text-slate-500'}`}
            style={{
              color: inView && overallIndex <= currentIndex ? 'inherit' : '#0000ff',
              opacity: inView && overallIndex <= currentIndex ? 1 : 0.5,
              whiteSpace: letter === ' ' ? 'pre' : 'normal',
            }}
          >
            {letter}
          </span>
        );
      })}
    </span>
  ));
};

const AboutPela: React.FC = () => {
  const [inView, setInView] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const inViewport = rect.top <= window.innerHeight && rect.bottom >= 0;
        if (inViewport) {
          setInView(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (inView && currentIndex < totalText.length) {
      timer = setTimeout(() => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 20); 
    }

    return () => {
      clearTimeout(timer);
    };
  }, [inView, currentIndex]);

  const text1 = "The Premier Energy Leadership Awards (#PELADubai2024) will be held from ";
  const text2 = "October 14-16, 2024";
  const text3 = ", honoring top leaders and innovators in the energy sector. This event recognizes those driving positive change and sustainability in energy.";

  const totalText = text1 + text2 + text3;

  return (
    <div className='flex flex-col '>
        <div className="bg-lighterGray my-11 py-16" ref={ref}>
      <div className="flex justify-center lg:justify-between items-center flex-col lg:flex-row px-2 lg:px-40  space-y-8">
        <span className="text-[1.2rem] font-[700] font-montserrat lg:text-[1.925rem] w-[70%] text-start">
          {splitTextIntoSpans(totalText.slice(0, text1.length), inView, currentIndex)}
          <h2 className={`inline text-[1.3rem] lg:text-[2.025rem] bg-clip-text text-gradient text-transparent ${inView ? 'bg-date-gradient' : 'text-slate-500'}`}>
            {splitTextIntoSpans(totalText.slice(text1.length, text1.length + text2.length), inView, currentIndex - text1.length)}
          </h2>
          {splitTextIntoSpans(totalText.slice(text1.length + text2.length), inView, currentIndex - text1.length - text2.length)}
        </span>
        <img src="/logo.png" alt="pela" className="lg:w-[16rem] w-[16rem]" />
      </div>
    </div>
    <CounterIn/>
    </div>
  );
};

export default AboutPela;
