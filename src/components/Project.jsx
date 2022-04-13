import { useInView } from "react-intersection-observer";

import { AiFillGithub } from "react-icons/ai";
import { DiHeroku } from "react-icons/di";

const Project = ({ project }) => {
  const { ref: Ref, inView: elementVisable } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  return (
    <div ref={Ref} className="project">
      <img src={project.img} alt="" className="project-img" />
      {/* <span className={`${elementVisable? "motion" :''}`}></span> */}

      <div className="project-text">
        <h2 className="project-name">{project.name}</h2>
        <h2 className="project-description">{project.description}</h2>

        <div className="project-cta">
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <AiFillGithub color="lightblue" size="3rem" />
          </a>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <DiHeroku color="lightblue" size="3rem" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
