import { motion } from "framer-motion";

const Icon = ({Icon, link}) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale:1.2 }}
      whileTap={{ scale: 0.9 }}
    >
      
    <Icon size="3rem" />
      
    </motion.a>
  )
}

export default Icon