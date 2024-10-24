import React from 'react'
import HighLightText from './HighLightText'
import knowYourProgress from "../../../assets/Images/Know_your_progress.png";
import compareWithOthers from "../../../assets/Images/Compare_with_others.png";
import planYourLessons from "../../../assets/Images/Plan_your_lessons.png";
import CTAButton from "./Button"

const LearningLanguageSection = () => {
  return (
    <div className='mt-[130px] mb-20'>
      <div className='flex flex-col gap-5 items-center'>
        <div className='text-4xl font-semibold text-center'>
            Your Swiss Knife for
            <HighLightText text={"learning any language"}/>
        </div>
        <div className="text-center text-richblack-700 font-medium lg:w-[75%] mx-auto leading-6 text-base mt-3">
              Using spin making learning multiple languages easy. with 20+
              languages realistic voice-over, progress tracking, custom schedule
              and more.
        </div>

        <div className='flex flex-row items-center justify-center mt-5'>
                <img src={knowYourProgress} alt="knowYourProgress" className='object-contain -mr-32'/>
                <img src={compareWithOthers} alt="compareWithOthers" className='object-contain'/>
                <img src={planYourLessons} alt="planYourLessons" className='object-contain -ml-36'/>
        </div>

        <div className='w-fit '>
            <CTAButton active={true} linkto={"/signup"}>
                <div>
                    Learn More
                </div>
            </CTAButton>
        </div>
        
      </div>
    </div>
  )
}

export default LearningLanguageSection
