"use client";
import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faStar, faUserFriends } from '@fortawesome/free-solid-svg-icons';

import { useInView } from 'react-intersection-observer';

const Counter = ({ end, duration, className, unit }: { end: number; duration: number; className: string ; unit?:String}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 10);

    const timer = setInterval(() => {
      start += increment;
      if (start > end) {
        start = end;
        clearInterval(timer);
      }
      setCount(Math.ceil(start));
    }, 10);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <span className={className}>{`${count.toLocaleString()}${unit || ""}`}</span>;
};

const CounterIn: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className='flex justify-center items-center py-5 lg:space-x-16 space-x-6'>
    <div className='flex flex-col justify-center items-center'>
      <FontAwesomeIcon icon={faBolt} className="h-8 w-8 text-gold" />
      <span className='font-[300] text-[30px] lg:text-[50px] text-dark '>10K</span>
      <span className='font-[300] text-[10px] lg:text-[20px] text-themeGreen'>Energy Leaders</span>
    </div>
    <div className='flex flex-col justify-center items-center'>
      <FontAwesomeIcon icon={faStar} className="h-8 w-8 text-themeGreen" />
      <span className='font-[300] text-[30px] lg:text-[50px] text-dark '>200</span>
      <span className='font-[300] text-[10px] lg:text-[20px] text-themeGreen'>Top Companies</span>
    </div>
    <div className='flex flex-col justify-center items-center'>
      <FontAwesomeIcon icon={faUserFriends} className="h-8 w-8 text-themeGreen" />
      <span className='font-[300] text-[30px] lg:text-[50px] text-dark '>$20b</span>
      <span className='font-[300] text-[10px] lg:text-[20px] text-themeGreen'>Investment</span>
    </div>
  </div>
  );
};

export default CounterIn;
