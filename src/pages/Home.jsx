import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import HighLightText from '../components/core/HomePage/HighLightText';
import CTAButton from '../components/core/HomePage/Button'
import Banner from '../assets/Images/banner.mp4';
import CodeBlocks from '../components/core/HomePage/CodeBlocks';


const Home = () => {
  return (
    <div>
     {/*section1*/} 
      <div className='relative mx-auto flex flex-col w-11/12 items-center
      text-white justify-between'>
        <Link to={"/signup"}>
        <div className='group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold
        text-richblack-200 transition-all duration-200
        hover:scale-95 w-fit'>
            <div className='flex flex-row items-center gap-2 rounded-full
            px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900'>
                <p>Become an Instructor</p>
                <FaArrowRight />
            </div>
        </div>
        </Link>
        <div className='text-center font-semibold text-4xl mt-7' >
            Empower Your future with
            <HighLightText text={"Coding Skills"}/>
        </div>
        <div className="mt-4 w-[90%] text-center text-lg font-bold text-richblack-300">
          With our online coding courses, you can learn at your own pace, from
          anywhere in the world, and get access to a wealth of resources,
          including hands-on projects, quizzes, and personalized feedback from
          instructors.
        </div>
        <div className='flex flex-row gap-7 mt-8'>
          <CTAButton active={true} linkto={"/login"} >
            Learn More
          </CTAButton>

          <CTAButton active={false} linkto={"/login"}>
            Book a Demo
          </CTAButton>
        </div>
        <div className="mx-3 my-7 shadow-[10px_-5px_50px_-5px] shadow-blue-200">
          <video
            className="shadow-[20px_20px_rgba(255,255,255)]"
           muted 
           loop
           autoPlay
           >
              <source src={Banner} type='video/mp4'/>
           </video>
        </div>
        {/*codesection1 */}
          <div >
            <CodeBlocks
            position={`lg:flex-row`}
            heading={<div className='text-4xl font-semibold'>
                Unlock Your 
                <HighLightText text={"Coding Potential"}/> 
                {" "}
                 with our online courses
            </div>}
            subheading={
                "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
              }
              ctabtn1={
                {
                    btnText:"Try it Yourself",
                    linkto:"/signup",
                    active:true
                }
              }
              ctabtn2={
                {
                    btnText:"learn more",
                    linkto:"/login",
                    active:false
                }
              }
              codeColor={"text-yellow-25"}
              codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
              bgGradient={<div className="codeblock1 absolute"></div>}
            />
          </div>
          {/*codeSection2 */}
          <div>
          <CodeBlocks
            position={"lg:flex-row-reverse"}
            heading={
              <div className="w-[100%] text-4xl font-semibold lg:w-[50%]">
                Start
                <HighLightText text={"coding in seconds"} />
              </div>
            }
            subheading={
              "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
            }
            ctabtn1={{
              btnText: "Continue Lesson",
              link: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              link: "/signup",
              active: false,
            }}
            codeColor={"text-white"}
            codeblock={`import React from "react";\n import CTAButton from "./Button";\nimport TypeAnimation from "react-type";\nimport { FaArrowRight } from "react-icons/fa";\n\nconst Home = () => {\nreturn (\n<div>Home</div>\n)\n}\nexport default Home;`}
            bgGradient={<div className="codeblock2 absolute"></div>}
          />
        </div>
        
      </div>

     {}



     {}


     {}

    </div>
  )
}

export default Home
