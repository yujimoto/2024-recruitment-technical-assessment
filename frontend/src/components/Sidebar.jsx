import React from 'react'
import yourIconUrl from '../assets/unilectives.svg';
import bookopen from '../assets/bookopen.svg'
import shieldcheck from '../assets/shieldcheck.svg'
import arrowright from '../assets/barsarrowdown.svg'
import usercircle from '../assets/usercircle.svg'
import moon from '../assets/moon.svg'
import loginSVG from '../assets/login.svg'
const Sidebar = () => {
  return (
    <div className='sidebar-wrapper'>
        <div className="sidebar-top-wrapper">
            <a href=""><img src={yourIconUrl}  className='logo-img' alt="" /></a>
            <a href=""> <img src={bookopen}  style={{marginTop:20}}  className='sidebar-icons'  alt="" /></a>
            <a href=""> <img src={shieldcheck} className='sidebar-icons'  alt="" /></a>
          
           
        </div>
        <div className="sidebar-bottom-wrapper">
        <a href=""> <img src={arrowright} className='sidebar-icons'  alt="" /></a>
        <a href=""> <img src={usercircle} className='sidebar-icons'  alt="" /></a>
        <a href=""> <img src={moon} className='sidebar-icons'  alt="" /></a>
        <a href=""> <img src={loginSVG} className='sidebar-icons'  alt="" /></a>
        </div>
    </div>
  )
}

export default Sidebar