import SiteLogo from "../static/img/site-logo.jpg";
import { social_links } from "../static/constants";
import Icon from "./Icon/Icon";
import { motion } from "framer-motion";

const TopNav = ({ pos, display }) => {
  return (
    <>
      {display && (
        <motion.header
        style={ pos? {boxShadow : 'none' } : {boxShadow:'0 10px 30px -10px black'} }  

        initial={{ opacity: 0, y:-20 }}
        whileInView={{ opacity: 1, y:0 }}
        transition={{ duration: 0.5 }}
      > 
          <img className="site-logo" src={SiteLogo} />{" "}
          <div className="social-icons">
          {social_links.map((socialIcon) =>(
            <Icon Icon={socialIcon.icon[0]} link={socialIcon.href}/>
          ))}

          
        </div>
          
        </motion.header>
      )}
    </>
  );
};

export default TopNav;
