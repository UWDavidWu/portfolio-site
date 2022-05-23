import SiteLogo from "../static/img/site-logo.jpg";
import { social_links } from "../static/constants";
import Icon from "./Icon/Icon";
import { FadeInFromTop } from "./Animation/Animation";


const TopNav = ({ display }) => {
  return (
    <>
      {display && (
        <FadeInFromTop duration={1}>
          <img className="site-logo" src={SiteLogo} />{" "}
          <div className="social-icons">
          {social_links.map((socialIcon) =>(
            <Icon Icon={socialIcon.icon[0]} link={socialIcon.href}/>
          ))}
          <a  href="../static/files/test.jpg" download>
            <button className="button-86">Resume</button>{" "}
          </a>
          
        </div>
          
        </FadeInFromTop>
      )}
    </>
  );
};

export default TopNav;
