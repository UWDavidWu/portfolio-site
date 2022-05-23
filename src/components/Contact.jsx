import SectionHeader from "./SectionHeader";
import { selfIntro } from "../static/constants";



const Contact = () => {
  return (
    <section id="contact">
      <SectionHeader text={"About Me"} />
      
        
        <div className="self-intro" style={{paddingBottom:"4rem"}}>
<div>
          <img
            src={require("../static/img/selfie.png")}
            width="300"
            height="300"
            alt="selfie"
          />
</div>
          <p id="intro-text">{selfIntro}</p>
        </div>
        
    </section>
  );
};

export default Contact;
