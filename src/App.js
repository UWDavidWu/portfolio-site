import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Workexperiences from "./components/Workexperiences";
import simpleParallax from 'simple-parallax-js';
import { useEffect } from "react"
import  Exp from "./components/Exp";
import TechIcon from "./components/TechIcon";


function App() {
  useEffect(() => {

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
  
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });

      // document.mousemove(function(event) {
      //   document.querySelector(".hero-icon").css({"left" : event.pageX, "top" : event.pageY});
      // });
  });

  });



  return (
    <div className="App">
      <div id="preloader"></div>
      <Navbar />
      <Header />
      <Projects />
      <Workexperiences />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
