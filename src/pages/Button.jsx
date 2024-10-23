import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({children,active,linkto}) => {
  return (
    <Link to={linkto}>
    <div >
        {children}
    </div>
    </Link>
  )
}

export default Button
