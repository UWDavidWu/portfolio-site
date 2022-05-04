import { motion } from "framer-motion";

const Workexperience = ({ work, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.5, duration: 1 }}
    >
      <div className="work-item">
        <div className="work-logo">
          <img src={work.img} width={96} height={96} alt="" />
        </div>
        <div className="work-timeline">{work.year}</div>
        <div className="work-description">
          <div className="work-company">{work.company}</div>
          <div className="work-title">{work.title}</div>
        </div>
      </div>
    </motion.div>
  );
};

export default Workexperience;
