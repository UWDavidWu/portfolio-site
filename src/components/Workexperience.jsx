import { motion, useAnimation } from "framer-motion";

function FadeInWhenVisible({ children }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
      }}
    >
      {children}
    </motion.div>
  );
}

const Workexperience = ({ work }) => {
  return (
    <FadeInWhenVisible>
      <div className="work-item">
        <div className="work-logo">
          <img src={work.img} width={80} height={96} alt="" />
        </div>
        <div className="work-timeline">{work.year}</div>
        <div className="work-description">
          <div className="work-company">{work.company}</div>
          <div className="work-title">{work.title}</div>
        </div>
      </div>
    </FadeInWhenVisible>
  );
};

export default Workexperience;
