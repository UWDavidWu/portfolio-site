import { AiFillGithub, AiFillLinkedin, AiFillThunderbolt } from 'react-icons/ai';
import { MdWork } from "react-icons/md"
import { useEffect, useState } from "react"
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"

import { AiFillHome, AiFillFile} from 'react-icons/ai';
import {IoMdContact} from 'react-icons/io'
import {RiContactsFill} from 'react-icons/ri'


const Navbar = () => {
  
    return (

      <nav>
          <a href="#header"><AiFillHome /></a>
          <a href="#projects"><AiFillFile /></a>
          <a href="#workExperience"><MdWork /></a>     
          <a href="#contact"><RiContactsFill /></a>

      </nav>

        // <>
        //   <section class="banner" id="sec">.
        //     <header>
        //       <a href="#banner" class="logo">Logo</a>
        //       <div id="toggle" onclick="toggle()"></div>
        //     </header>
        //     <div class="content">
        //       <h2>Hello World,I'm <span>David Wu</span></h2>
        //       <a href="#projects">Know More</a>
        //     </div>
        //     <ul class="sci">
        //       <li><a href="https://github.com/UWDavidWu" target="_blank" rel="noopener noreferrer"><AiFillGithub size="3rem"/></a></li>
        //       <li><a href="https://www.linkedin.com/in/uwdavid/" target="_blank" rel="noopener noreferrer"><AiFillLinkedin size="3rem"/></a></li>
        //       <li><a href="#"><AiFillThunderbolt size="3rem"/> </a></li>
        //     </ul>
        // </section>
        //   <div id="navigation">
        //       <ul>
        //           <li><a href="#sec">Home</a></li>
        //           <li><a href="#projects">Projects</a></li>
        //           <li><a href="#workExperience">Work_Experiences</a></li>
        //           <li><a href="#contact">Contact</a></li>
        //       </ul>
        //   </div>
        // </>     
        
    )
}

export default Navbar
