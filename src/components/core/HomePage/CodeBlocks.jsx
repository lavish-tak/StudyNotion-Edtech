import React from 'react'
import CTAButton from './Button';
import HighLightText from './HighLightText';
import { FaArrowRight } from "react-icons/fa6";
const CodeBlocks = ({position,heading,subheading,ctabtn1,ctabtn2,bgGradient,codeColor}) => {
    return (
    <div className={`flex ${position} my-20 justify-between gap-10` }>
      {/** */}
      <div className='w-[50%] flex flex-col gap-8'>
          {heading}
          <div className='text-richblack-300 font-bold'>
            {subheading}
            
          </div>
          <div className='flex gap-7 mt-7'>
            <CTAButton active={ctabtn1.active} linkto={ctabtn1.linkto}>
                <div className='flex gap-2 items-center'>
                    {ctabtn1.btnText}
                    <FaArrowRight />
                </div>

            </CTAButton>
            <CTAButton active={ctabtn2.active} linkto={ctabtn2.linkto}>
                <div className='flex gap-2 items-center'>
                    {ctabtn2.btnText}
                     
                </div>

            </CTAButton>
          </div>
      </div>
    </div>
  )
}

export default CodeBlocks
