
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { motion } from "framer-motion";

function FadeInWhenVisible({ delay = 0, children }) {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: delay }}
    >
      {children}
    </motion.span>
  );
}

const TechIcon = ({ Icon, Name, Level }) => {
  return (
    <div className="hero-icon">
      <div className="hero-icon-icon">
        <Icon />
        <Icon />
      </div>

      <div
        className="hero-icon-detail"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div className="hero-icon-name">{Name}</div>
        <div className="star">
          {[...Array(Level)].map((e, i) => (
            <FadeInWhenVisible key={i} delay={i * 0.5}>
              <AiFillStar />
            </FadeInWhenVisible>
          ))}
          {[...Array(3 - Level)].map((e, i) => (
            <FadeInWhenVisible key={i} delay={0.5 * (Level + i)}>
              <AiOutlineStar />
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechIcon;
