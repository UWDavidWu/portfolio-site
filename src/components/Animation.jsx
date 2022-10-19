import { motion } from "framer-motion";


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
  
  export function ColorChange({ delay=0, duration=0.5, children }) {
    return (
      <motion.div
      // alternate the color
        
        animate={{ color: ['#ffffff', '#C69BF5']}}
        transition={{ ease: "linear",delay:delay, repeatDelay:2, duration: 0.5, repeat: Infinity ,repeatType: "reverse" }}
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


