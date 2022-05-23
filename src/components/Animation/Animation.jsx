
import { motion, useAnimation } from "framer-motion";


export function FadeInFromBottom({ delay=0, duration=0.5, children }) {
    return (
      <motion.div
        initial={{ opacity: 0, y:50 }}
        whileInView={{ opacity: 1, y:0 }}
        viewport={{ once: true }} 
        transition={{ duration: duration, delay:delay}}
      >
        {children}
      </motion.div>
    );
  }
  
  export function FadeInWhenVisible({ delay=0.5,children }) {
    return (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay:delay }}
        >
          {children}
        </motion.div>
      );
    }

  export  function FadeInFromTop({ delay=0, duration=0.5, children }) {
        return (
          <motion.header
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: duration, delay: delay }}
          >
            {children}
          </motion.header>
        );
      }