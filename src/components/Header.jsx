import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
} from "react-icons/ai";

import Hero from "./Hero";
import { useEffect,useState } from "react";



import { motion, useAnimation } from "framer-motion";

function FadeInWhenVisible({ children }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
      }}
    >
      {children}
    </motion.div>
  );
}

  

const Header = () => {
  useEffect(() => {
    document.querySelectorAll('.hero-icon').forEach((icon) => {
      icon.style.left=`${Math.random()*100}%`
      icon.style.top=`${Math.random()*100}%`
  });
  },[])
  const initialWidth = window.innerWidth/2

  
  const [MousePosition, setMousePosition] = useState({
    left: 0,
})

  function handleMouseMove(event) { 
    const x_movement = -((event.clientX - initialWidth)*0.4)
    setMousePosition({left: x_movement}); 
  }
  
  return (
    <section id="header" onMouseMove={handleMouseMove}>
   
      <div id="header-greeting"><span>Hey!</span> <span>I am</span></div>
      <div id="header-name"><span>David</span> <span>Wu</span></div>


      <img id="hero-img" src={require('../static/img/hero.png')} alt=""/>
     

    
      <FadeInWhenVisible><Hero trans={MousePosition.left} /></FadeInWhenVisible>

      <div className="social-icons">
        <motion.a
          href="https://github.com/UWDavidWu"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{scale:1.2,}}
          whileTap={{ scale: 0.9 }}
        >
          
    <AiFillGithub color="lightblue" size="3rem" />
          
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/uwdavid/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{scale:1.2,}}
          whileTap={{ scale: 0.9 }}
        >
          <AiFillLinkedin color="lightblue" size="3rem" />
        </motion.a>
        <motion.a href="#contact" whileHover={{scale:1.2,}}
        whileTap={{ scale: 0.9 }}>
          <AiFillMail color="lightblue" size="3rem" />
        </motion.a>
      </div>
    </section>
  );
};

export default Header;
