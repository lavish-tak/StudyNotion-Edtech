import React, { useEffect, useState } from 'react'
import { Link, matchPath, useLocation } from 'react-router-dom'
import logo from '../../assets/Logo/Logo-Full-Light.png'
import {NavbarLinks} from '../../data/navbar-links'
import { useSelector } from 'react-redux'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { apiConnector } from '../../services/apiConnector'
import { categories } from '../../services/apis'
import { IoIosArrowDropdownCircle } from "react-icons/io";

const Navbar = () => {

   const {token} = useSelector((state)=> state.auth);
   const {user} = useSelector((state)=>state.profile);
   const {totalItems} = useSelector((state)=>state.cart);

   const location = useLocation()

   const [subLinks,setSubLinks] = useState([])
   const [loading, setLoading] = useState(false)
   
   const fetchSubLinks = async()=>{
    try{
        const result = await apiConnector("GET",categories.CATEGORIES_API);

        setSubLinks(result.data.data)
    }catch(err){
        console.log("Error while fetching links")
    }
   }

   useEffect(()=>{
    setLoading(true);
        fetchSubLinks();
    setLoading(false);
   },[])
    
   const matchRoute = (route) =>{
    return matchPath({path:route},location.pathname)
   }

  return (
    <div className='h-14 flex border-b-[1px] border-b-richblack-400 items-center justify-center p-2'>

        <div className='w-11/12 flex justify-between items-center max-w-maxContent'>

            <Link to="/">
                <img src={logo} width={160} height={42} loading='lazy'/>
            </Link>

            {/**Navlinks*/}
            <nav>
                <ul className='flex gap-x-6 text-richblack-25'>
                    {
                        NavbarLinks.map((link,index)=>(
                            <li>
                                {
                                link.title == "Catalog" ? (<div className='relative flex hover:cursor-pointer items-center gap-2 group'>
                                    <p>{link.title}</p>
                                    <IoIosArrowDropdownCircle />

                        <div className="invisible absolute left-[50%] translate-x-[-50%] translate-y-[70%]
                        top-[50%] flex flex-col rounded-md bg-richblack-5 p-4 text-richblack-900
                        opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100
                        group-hover:cursor-pointer
                        lg:w-[300px]">
                        <div className="absolute left-[50%] top-0 translate-x-[80%] 
                        translate-y-[-40%] rotate-45 h-6 w-6 rounded bg-richblack-5">

                        </div>
                        
                        {/* {loading ? (
                          <p className="text-center">Loading...</p>
                        ) : subLinks?.length ? (
                          <>
                            {subLinks
                              ?.filter(
                                (subLink) => subLink?.courses?.length > 0
                              )
                              ?.map((subLink, i) => (
                                <Link
                                  to={`/catalog/${subLink.name
                                    .split(" ")
                                    .join("-")
                                    .toLowerCase()}`}
                                  className="rounded-lg bg-transparent py-4 pl-4 hover:bg-richblack-50"
                                  key={i}
                                >
                                  <p>{subLink.name}</p>
                                </Link>
                              ))}
                          </>
                        ) : (
                          <p className="text-center">No Courses Found</p>
                        )} */}
                        
                      </div>
                 </div>) :
                                (
                                    <Link to={link?.path}>

                                        <p className={`${matchRoute(link?.path) ? "text-yellow-25" : "text-richblack-25"} `}>
                                            {link?.title}
                                        </p>
                                      
                                    </Link>
                                )
                                }
                            </li>
                        ))
                    }
                </ul>
            </nav>

            {/*Login/signup/dashboard*/}
            <div className='flex gap-x-4 items-center'>
                {
                    user && user?.accountType != "Instructor" && (
                        <Link to="/dashboard/cart" className='relative'>
                            <AiOutlineShoppingCart />
                            {
                                totalItems>0 && (
                                    <span>
                                        {totalItems}
                                    </span>
                                )
                            }
                        </Link>
                    )
                }
                {
                    token === null && (
                        <Link to="/login">
                            <button className='border-richblack-700 bg-richblack-800 px-[12px] py-[8px]
                            text-richblack-100 rounded-md'>
                                Login
                            </button>
                        </Link>
                    )
                }
                {
                    token === null && (
                        <Link to="/signup">
                            <button className='border-richblack-700 bg-richblack-800 px-[12px] py-[8px]
                            text-richblack-100 rounded-md'>
                                Sign up
                            </button>
                        </Link>
                    )
                }
            </div>


        </div>
      
    </div>
  )
}

export default Navbar
