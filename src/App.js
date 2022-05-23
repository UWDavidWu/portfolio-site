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
import TopNav from "./components/TopNav";
import { useScrollDirection } from "react-use-scroll-direction";

function App() {
  useEffect(() => {
    window.onbeforeunload = () => window.scrollTo(0, 0); //refresh to top of the page
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        });
      });
    }, []);
  });

  
  const [direction, setDirection] = useState("up");
  const { isScrollingUp, isScrollingDown } = useScrollDirection();

  useEffect(() => {
    isScrollingDown && setDirection("down");
    isScrollingUp && setDirection("up");
  }, [isScrollingDown, isScrollingUp]);

  const [ref, inView] = useInView({
    triggerOnce: false,
    rootMargin: "-200px",
  });


  //determine if at the bottom of the page
  const [isBottom, setIsBottom] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const pctScrolled = Math.floor(
        (window.pageYOffset /
          (document.body.offsetHeight - window.innerHeight)) *
          100
      );
      pctScrolled > 98 ? setIsBottom(true) : setIsBottom(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <MediaContextProvider>
        <TopNav display={direction === 'up'} />
        <Navbar display={!inView && !isBottom} />
        <main>
          <div ref={ref}>
            <Header />
          </div>
          <Projects />

          <Workexperiences />

          <Contact />
        </main>
        <Footer />
      </MediaContextProvider>
    </>
  );
}

export default App;
