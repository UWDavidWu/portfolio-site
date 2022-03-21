import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Workexperiences from "./components/Workexperiences";
import simpleParallax from 'simple-parallax-js';
import { useEffect } from "react"



function App() {
  useEffect(() => {
    // const images = document.getElementsByClassName('paraImg');
    // new simpleParallax(images, {orientation: 'down',});
  //   new simpleParallax(images, {
  //     delay: 0,
  //     orientation: 'down',
  //     scale: 1.3,
  //     overflow: true,
  //     customContainer: '.container',
  //     customWrapper: '.wrapper'
  // });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
  
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });
  return(
  <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>)
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
      <Header />
    </div>
  );
}

export default App;
