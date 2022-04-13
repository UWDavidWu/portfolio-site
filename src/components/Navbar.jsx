import { AiFillGithub, AiFillLinkedin, AiFillThunderbolt } from 'react-icons/ai';
import { MdWork } from "react-icons/md"
import { useEffect, useState } from "react"


import { AiFillHome, AiFillFile} from 'react-icons/ai';
import {IoMdContact} from 'react-icons/io'
import {RiContactsFill} from 'react-icons/ri'
import {DiCss3} from 'react-icons/di'


const Navbar = ({currentSection}) => {
  useEffect(() => {
    //add active class to element  with id currentSection
    const navbar = document.querySelector(".navbar");
    const navbarLinks = navbar.querySelectorAll(".navbar-link");
    if (currentSection == "header") {
      navbar.style.display = "none"
    } else{
      navbar.style.display = "flex"
      navbarLinks.forEach(link => {
        if (link.classList.contains(currentSection)) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    }
    
  },[currentSection])

    return (

      <nav className='navbar'>
          <a className= "navbar-link" href="#header"><AiFillHome /></a>
          <a className= "navbar-link projects" href="#projects"><AiFillFile /></a>
          <a className= "navbar-link workExperience"  href="#workExperience"><MdWork /></a>   
          <a className= "navbar-link technologies" href="#technologies"><DiCss3 /></a>   
          <a className= "navbar-link contact"  href="#contact"><RiContactsFill /></a>

      </nav>
        
    )
}

export default Navbar
