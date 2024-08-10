import React from 'react'
import Slider from './SLider'

const CompanyMarquee = () => {
  return (
    <div className='flex flex-col py-5 space-x-5'>
        <span className='px-2 lg:px-40 text-themeBlue font-semibold text-[20px]'>
            Top Sponsors
        </span>
        <div className="w-full py-4">
            <Slider duration={100} />
        </div>

    </div>
  )
}

export default CompanyMarquee