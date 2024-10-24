import React from 'react'
import HighLightText from './HighLightText'

const LearningLanguageSection = () => {
  return (
    <div className='mt-[130px]'>
      <div className='flex flex-col gap-5'>
        <div className='text-4xl font-semibold text-center'>
            Your Swiss Knife for
            <HighLightText text={"learning any language"}/>
        </div>
        <div className="text-center text-richblack-700 font-medium lg:w-[75%] mx-auto leading-6 text-base mt-3">
              Using spin making learning multiple languages easy. with 20+
              languages realistic voice-over, progress tracking, custom schedule
              and more.
            </div>
        
      </div>
    </div>
  )
}

export default LearningLanguageSection
