import { FadeInFromBottom, ColorChange } from "./Animation";
import resume from "../static/David_Wu.pdf";


const Header = () => {
  const intro = [
"David Wu","Recent Grad","Dev Ready"];
  return (
    <section id="header">

    {/* <video className='videoTag' autoPlay loop muted>
        <source src={backgound} type='video/mp4' />
    </video> */}

      <div className="intro">
        {intro.map((item, index) => (
          <FadeInFromBottom key={index} delay={0.9 + 0.2 * index}>
            <ColorChange delay={1 + 1.5 * index}>

              {item}
 
            </ColorChange>
          </FadeInFromBottom>
        ))}
        <FadeInFromBottom delay={1.5}>
          <a href={resume} download>
            <button className="download">&#x2913; Download Resume</button>{" "}
          </a>
        </FadeInFromBottom>
      </div>

    </section>
  );
};

export default Header;
