import React from 'react'
import '../Topbar/index.scss'
import linkedinlogo from '../../../assets/linkdinlogo.png'
import { AiFillHome, AiOutlineUserSwitch, AiOutlineSearch, AiOutlineMessage, AiOutlineBell, } from 'react-icons/ai';
import {BsBriefcase} from "react-icons/bs"



const Topbar = () => {
  return (
      <div className='topbar'>
          
          <img src={linkedinlogo} />
          <div className='react-icons'>
          <AiOutlineSearch size={25} className='react-icon' />
          <AiFillHome size={25} className='react-icon'/>
              <AiOutlineUserSwitch size={25} className='react-icon'/>
              <AiOutlineMessage size={25} className='react-icon'/>    
              <BsBriefcase size={25} className='react-icon'/>
            <AiOutlineBell size={25} className='react-icon'/>  
              </div>
          
          </div>
  )
}

export default Topbar