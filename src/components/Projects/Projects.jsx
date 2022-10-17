import { projects } from "../../static/constants";
import SectionHeader from "../SectionHeader";
import Icon from "../Icon";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { FadeInFromBottom, FadeInWhenVisible } from "../Animation";
import "./Projects.css"

const Projects = () => {
  return (
    <SectionHeader text="projects" id="projects">
      <div className="project-container">
        {projects.map((project, index) => (
          <div className="project" key={index}>
              <img src={project.img} alt="" className="project-img" />
              <div className="project-content">
                <FadeInFromBottom>
                  <h2 className="project-name">{project.name}</h2>
                </FadeInFromBottom>
                <FadeInFromBottom delay={0.1}>
                  <div className="project-description">
                    {project.description}
                  </div>
                </FadeInFromBottom>
                <FadeInWhenVisible delay={0.2}>
                  <div className="project-detail">
                    <div className="project-cta">
                      <Icon Icon={FiGithub} link={project.github} />
                      <h5>{project.tech}</h5>
                      <Icon Icon={FiExternalLink} link={project.link} />
                    </div>
                  </div>
                </FadeInWhenVisible>
              </div>
            
          </div>
        ))}
      </div>
    </SectionHeader>
  );
};

export default Projects;
