import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillThunderbolt,
} from "react-icons/ai";


const Header = () => {
  return (
    <section id="header">
      
      <text id="header-greeting">{'Me = RecentGraduate("David Wu") Me.find_opportunity()'} </text>
      

      <div className="social-icons">
        <a
          href="https://github.com/UWDavidWu"
          target="_blank"
          rel="noopener noreferrer"
        >
          
    <AiFillGithub color="lightblue" size="3rem" />
          
        </a>
        <a
          href="https://www.linkedin.com/in/uwdavid/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin color="lightblue" size="3rem" />
        </a>
        <a href="#">
          <AiFillThunderbolt color="lightblue" size="3rem" />{" "}
        </a>
      </div>
    </section>
  );
};

export default Header;
