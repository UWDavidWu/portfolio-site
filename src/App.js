import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Workexperiences from "./components/Workexperiences";
import simpleParallax from 'simple-parallax-js';
import { useEffect, useState } from "react"
import  Exp from "./components/Exp";
import TechIcon from "./components/TechIcon";
import { useInView } from "react-intersection-observer";
import SectionContainer from "./components/SectionContainer"


function App() {
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  },[]);
  });


  

  const [currentSection, setCurrentSection] = useState(null)
  const [scrolly, setScrolly] = useState(0)
  const [display, setDisplay] = useState(false)

  //trackscrolly
  useEffect(() => {
    const handleScroll = () => {
      setScrolly(window.scrollY)
      //set display to true if scroll y is greater than 100vh
      if(window.scrollY > 100){
        setDisplay(true)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])



  //console log currentSection on currentsection change
  useEffect(() => {
    console.log(currentSection)
  }, [currentSection])


  const handleSection = (section) => {
    setCurrentSection(section)
  }

  return (
    <div className="App">
      <div id="parallax_wrapper">
      <Navbar currentSection={currentSection}/>
      
      <SectionContainer children={<Header />} ind={"header"} SectionInView={handleSection} />
      <SectionContainer children={<Projects />} ind={"projects"} SectionInView={handleSection} />
      <SectionContainer children={<Workexperiences />} ind={"workExperience"} SectionInView={handleSection} />
      <SectionContainer children={<Contact />} ind={"contact"} SectionInView={handleSection} />
      <Footer />
      </div>
    </div>
  );
}

export default App;
