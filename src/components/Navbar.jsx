import { motion } from "framer-motion";
import { navbar_content } from "../static/constants";

const Navbar = ({display}) => {

    return (
      
      <nav style={ display ? {display : 'flex'}: {display : 'none'} }  >

        {navbar_content.map((navbar_item, index) => (
          <motion.a
            key={index}
            href={navbar_item.href}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 1 }}
          >
            {navbar_item.icon}
          </motion.a>
        ))}
      </nav>
    );
}

export default Navbar
