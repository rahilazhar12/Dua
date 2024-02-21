import React from 'react'
import { Link } from 'react-router-dom'


const LogoPic = () => {
  return (
    <>
    <div className='contanier'>
    <div>
    <Link  href='/logo'>
    <img src='./images/2logo.png'/>
    </Link>
    <Link to="/"><button className='ms-5 py-2 text-white bg-success rounded'>Go to Back</button></Link>
    </div> 
    
    </div>
    </>
  )
}

export default LogoPic