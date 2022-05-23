import Hero from "./Hero";
import { useEffect,useState } from "react";


import {FadeInFromBottom, FadeInWhenVisible} from "./Animation/Animation"




  

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

    
      <div className="intro">
      <FadeInFromBottom delay={0.7}> Hi, my name is</FadeInFromBottom>
      <FadeInFromBottom delay={0.8}>David Wu</FadeInFromBottom>
      <FadeInFromBottom delay={0.9}>l'm a Recent Graduate from uwaterloo. I've worked at different companies with hands on experiences. Now I'm preparing myself for a spot at a tech company.</FadeInFromBottom>
      </div>
      

     

      
      {/* <FadeInWhenVisible>
        <Hero data-tilt left={MousePosition.left} top={MousePosition.top} down={scrollY}/>
      </FadeInWhenVisible> */}
      

      {/* <Social_Icons /> */}
     
    </section>
  );
};

export default Header;


