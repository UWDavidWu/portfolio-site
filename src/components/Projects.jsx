
import { projects } from '../static/constants';
import Project from './Project';
import SectionHeader from './SectionHeader';


const Projects = () => {

    return (
          <section id="projects">
            <SectionHeader text={"projects"}/>
 
              <div className="project-container">
                {projects.map( (project, index) => (
                  
                  
                  <Project project={project} />
                  
                  )
                )}
              </div>

          </section>
      );
    }
    

export default Projects
