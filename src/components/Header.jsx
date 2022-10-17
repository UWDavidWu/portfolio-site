import { FadeInFromBottom, ColorChange } from "./Animation";
const Header = () => {
  const intro = [
    ["Name", "David Wu"],
    ["Now", "Recent Grad"],
    ["Goal", "Dev Ready"],
  ];
  return (
    <section id="header">

      <div className="intro">
        {intro.map((item, index) => (
          <FadeInFromBottom key={index} delay={0.9 + 0.2 * index}>
            <ColorChange delay={1 + 1.5 * index}>
              <span className="intro-before">&lt;{item[0]}&gt;</span>
              {item[1]}
              <span className="intro-after">&lt;{item[0]}/&gt;</span>
            </ColorChange>
          </FadeInFromBottom>
        ))}
        <FadeInFromBottom delay={1.5}>
          <a href="/test.txt" download>
            <button className="download">&#x2913; Download Resume</button>{" "}
          </a>
        </FadeInFromBottom>
      </div>

    </section>
  );
};

export default Header;
