import Hero from "./Hero";
import { useEffect, useState } from "react";

import { FadeInFromBottom, FadeInWhenVisible } from "./Animation/Animation";

const Header = ({}) => {
  useEffect(() => {
    document.querySelectorAll(".hero-icon").forEach((icon) => {
      icon.style.left = `${Math.random() * 100}%`;
      icon.style.top = `${Math.random() * 100}%`;
    });
  }, []);
  const initialWidth = window.innerWidth / 2;
  const initialHeight = window.innerHeight / 2;

  const [MousePosition, setMousePosition] = useState({
    left: 0,
    top: 0,
  });

  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  const handleMouseMove = (event) => {
    const x_movement = -((event.clientX - initialWidth) * 0.4);
    const y_movement = (event.clientY - initialHeight) * 0.4;
    setMousePosition({ left: x_movement, top: y_movement });
  };

  return (
    <section id="header" onMouseMove={handleMouseMove}>
      <div className="intro">
        <FadeInFromBottom delay={0.8}> David Wu</FadeInFromBottom>
        <FadeInFromBottom delay={0.9}>Recent Grad</FadeInFromBottom>
        <FadeInFromBottom delay={1}>
          Future star
        </FadeInFromBottom>
        <FadeInFromBottom delay={1}>
          <a href="../static/files/test.jpg" download>
            <button className="download">Resume</button>{" "}
          </a>
        </FadeInFromBottom>
      </div>
      {/* <FadeInWhenVisible>
        <Hero
          left={MousePosition.left}
          top={MousePosition.top}
          down={scrollY}
        />
      </FadeInWhenVisible> */}

      {/* <Social_Icons /> */}
    </section>
  );
};

export default Header;
