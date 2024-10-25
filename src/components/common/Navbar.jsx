import React from 'react'
import { Link, matchPath, useLocation } from 'react-router-dom'
import logo from '../../assets/Logo/Logo-Full-Light.png'
import {NavbarLinks} from '../../data/navbar-links'
import { useSelector } from 'react-redux'

const Navbar = () => {

   const {token} = useSelector((state)=> state.auth);
   const {user} = useSelector((state)=>state.user);
   const {totalItems} = useSelector((state)=>state.cart);

   const location = useLocation()
    
   const matchRoute = (route) =>{
    return matchPath({path:route},location.pathname)
   }

  return (
    <div className='h-14 border-b-[1px] border-b-richblack-400'>

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
                                link.title == "Catalog" ? (<div></div>) :
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

            </div>


        </div>
      
    </div>
  )
}

export default Navbar
