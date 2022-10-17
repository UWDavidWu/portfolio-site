import SiteLogo from "../../static/img/site-logo.png";
import { social_links } from "../../static/constants";
import Icon from "../Icon";
import { motion, AnimatePresence } from "framer-motion";
import "./TopNav.css";

const TopNav = ({ pos, display }) => {
  return (
    <AnimatePresence>
      {display && (
        <motion.header
          style={
            pos
              ? { boxShadow: "none" }
              : { boxShadow: "0 10px 30px -10px black" }
          }
          initial={{ y: -80 }}
          animate={{ y: 0 }}
          exit={{ y: -80 }}
          transition={pos ? { duration: 0.5 } : { duration: 0.3 }}
        >
          <img className="site-logo" src={SiteLogo} />
          <div className="social-icons">
            {social_links.map((socialIcon, index) => (
              <Icon key={index} Icon={socialIcon.icon[0]} link={socialIcon.href} />
            ))}
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
};

export default TopNav;
