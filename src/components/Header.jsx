import Hero from "./Hero";
import { useEffect,useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Social_Icons from "./Social_Icons";




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

  

const Header = ({}) => {
  useEffect(() => {
    document.querySelectorAll('.hero-icon').forEach((icon) => {
      icon.style.left=`${Math.random()*100}%`
      icon.style.top=`${Math.random()*100}%`
  });
  },[])
  const initialWidth = window.innerWidth/2
  const initialHeight = window.innerHeight/2

  
  const [MousePosition, setMousePosition] = useState({
    left: 0,
    top: 0,
})

  const [scrollY, setScrollY] = useState(0)

  const handleScroll = () => {
    setScrollY(window.scrollY)
  }


  const handleMouseMove = (event) => { 
    const x_movement = -((event.clientX - initialWidth)*0.4)
    const y_movement = ((event.clientY - initialHeight)*0.4)
    setMousePosition({left: x_movement, top: y_movement}) 
  }


  

  
  return (
    <section  id="header" onMouseMove={handleMouseMove} >
   
      <div className="hero-container">
        <div >David Wu</div>
        <div >Recent Graduate</div>
      </div>
     

    
      <FadeInWhenVisible>
        <Hero left={MousePosition.left} top={MousePosition.top} down={scrollY}/>
      </FadeInWhenVisible>

      <Social_Icons />
    </section>
  );
};

export default Header;
