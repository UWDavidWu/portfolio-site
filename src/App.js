import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Workexperiences from "./components/Workexperiences";
import simpleParallax from "simple-parallax-js";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import MediaContextProvider from "./components/MediaContext";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";


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

  const [display, setDisplay] = useState(false)
  useEffect(() => {
    const handleScroll = () => window.scrollY > 100 ? setDisplay(true) : setDisplay(false)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, []);

  const [ref, inView] = useInView({
    triggerOnce: false,
    rootMargin: "-200px"
  })



  return (
    <>
        <MediaContextProvider>
          <Navbar display={!inView}/>
          <div ref={ref}>
          <Header  />
          </div>
          <Projects />
          
          <Workexperiences />

          <Contact />

          <Footer />
        </MediaContextProvider>

    </>
  );
}

export default App;
