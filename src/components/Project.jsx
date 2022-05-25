import { useInView } from "react-intersection-observer";
import Icon from "./Icon/Icon";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { FadeInFromBottom,FadeInWhenVisible,Hover } from "./Animation/Animation";


const Project = ({ project }) => {
  const { ref: Ref, inView: elementVisable } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div ref={Ref} className="project">
      <Hover className="card">
        <img src={project.img} alt="" className="project-img" />
        <div className="project-content">
          <FadeInFromBottom><h2 className="project-name">{project.name}</h2></FadeInFromBottom>
          <FadeInFromBottom delay={0.1}><h2 className="project-description">{project.description}</h2></FadeInFromBottom>
          <FadeInWhenVisible delay={0.2}><div className="project-detail">
            <div className="project-tech">html css js</div>
            <div className="project-cta">
              <Icon Icon={FiGithub} link={"#1"} />
              <Icon Icon={FiExternalLink} link={"#1"} />
            </div>
          </div>
          </FadeInWhenVisible>
        </div>
      </Hover>
    </div>
  );
};

export default Project;
