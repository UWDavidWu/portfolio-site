import { motion, AnimatePresence } from "framer-motion";
import { navbar_content } from "../static/constants";

const Navbar = ({ display }) => {
  return (
    <AnimatePresence>
      {display && (
        <motion.nav
          className="bottom-nav"
          initial={{ translateX: "-50%", y: 80 }}
          animate={{ translateX: "-50%", y: 0 }}
          exit={{ translateX: "-50%", y: 80 }}
          transition={{ duration: 0.5 }}
        >
          {navbar_content.map((navbar_item, index) => (
            <motion.a
              key={index}
              href={navbar_item.href}
              initial={{ y: 10, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: { duration: 0.5, delay: 0.2  },
              }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              {navbar_item.icon}
            </motion.a>
          ))}
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
