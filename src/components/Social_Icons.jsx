import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
} from "react-icons/ai";

import { motion, useAnimation } from "framer-motion";

const Social_Icons = () => {
  return (
    <div className="social-icons">
    <motion.a
      href="https://github.com/UWDavidWu"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{scale:1.2,}}
      whileTap={{ scale: 0.9 }}
    >
      
<AiFillGithub color="lightblue" size="3rem" />
      
    </motion.a>
    <motion.a
      href="https://www.linkedin.com/in/uwdavid/"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{scale:1.2,}}
      whileTap={{ scale: 0.9 }}
    >
      <AiFillLinkedin color="lightblue" size="3rem" />
    </motion.a>
    <motion.a href="#contact" whileHover={{scale:1.2,}}
    whileTap={{ scale: 0.9 }}>
      <AiFillMail color="lightblue" size="3rem" />
    </motion.a>
  </div>
  )
}

export default Social_Icons