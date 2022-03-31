import { AiFillGithub, AiFillLinkedin, AiFillThunderbolt } from 'react-icons/ai';
import { MdWork } from "react-icons/md"
import { useEffect, useState } from "react"
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"

import { AiFillHome, AiFillFile} from 'react-icons/ai';
import {IoMdContact} from 'react-icons/io'
import {RiContactsFill} from 'react-icons/ri'
import {DiCss3} from 'react-icons/di'


const Navbar = () => {
  
    return (

      <nav>
          <a href="#header"><AiFillHome /></a>
          <a href="#projects"><AiFillFile /></a>
          <a href="#workExperience"><MdWork /></a>   
          <a href="#technologies"><DiCss3 /></a>   
          <a href="#contact"><RiContactsFill /></a>

      </nav>
        
    )
}

export default Navbar
