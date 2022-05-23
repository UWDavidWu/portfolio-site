import { motion } from "framer-motion";
import { FadeInFromBottom } from "./Animation/Animation";

const Workexperience = ({ work, index }) => {
  return (
    <FadeInFromBottom>
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
          </FadeInFromBottom>
  );
};

export default Workexperience;
