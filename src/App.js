import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact";
import Workexperiences from "./components/WorkExperience/Workexperiences";
import { useEffect, useState } from "react";

import TopNav from "./components/TopNav/TopNav";
import { useScrollDirection } from "react-use-scroll-direction";
import Technologies from "./components/Technologies/Technologies";

function App() {
  const fullvh = Math.max(
    document.documentElement.clientHeight,
    window.innerHeight || 0
  );

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

  const [displayNav, setDisplayNav] = useState(false);
  const [isBottom, setIsBottom] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);

    position > 0.8 * fullvh ? setDisplayNav(true) : setDisplayNav(false);
    const pctScrolled = Math.floor(
      (window.pageYOffset / (document.body.offsetHeight - window.innerHeight)) *
        100
    );
    pctScrolled > 98 ? setIsBottom(true) : setIsBottom(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //determine if at the bottom of the page

  return (
    <>



        <TopNav
          pos={scrollPosition === 0} //add shadow after scrolling
          display={direction === "up" || !displayNav}
        />
        <Navbar display={true } />
        <main>
          <Header />

          <Projects />

          <Workexperiences />

          <Contact />
          <Technologies />

        </main>
        <Footer />

    </>
  );
}

export default App;
