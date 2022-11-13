import SectionHeader from "./SectionHeader";



const Contact = () => {

  return (
    <SectionHeader text="About Me" id="contact">
      <div className="self-intro">
        <img
          className="selfie"
          src={require("../static/img/selfie.png")}
          alt="selfie"
        />

        <p id="intro-text">
        Hello! My name is David Wu. I'm a recent gradute from University of Waterloo with a Bachelor of Mathematics degree. <br />
        <br />I proposed and build account search tool in Python which was adopoted by all team members saving about 30 mins each day. I've also built a full-stack news web application which allowed user to search, like and share headlines. <br />
        <br />During development, i followed CI/CD guildlines using Github actions to automatically run tests and deploy docker image to AWS. <br />
        <br />Now I'm looking for a software developer position and passionate about taking my skills to the next level and contribute to a large organization.<br />
        </p>
      </div>
    </SectionHeader>
  );
};

export default Contact;
