import SectionHeader from "./SectionHeader";
import { selfIntro } from "../static/constants";


const Contact = () => {

  return (
    <SectionHeader text="About Me" id="contact">
      <div className="self-intro">
        <img
          className="selfie"
          src={require("../static/img/selfie.png")}
          alt="selfie"
        />

        <p id="intro-text">{selfIntro}</p>
      </div>
    </SectionHeader>
  );
};

export default Contact;
