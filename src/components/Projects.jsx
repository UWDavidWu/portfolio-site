
import { projects } from '../static/constants';
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillThunderbolt,
} from "react-icons/ai";

import { useInView } from 'react-intersection-observer';


const Projects = () => {
  const { ref: myRef, inView: elementVisable, entry } = useInView();


    return (
          <section id="projects">
            <div class="header text-base sm:text-lg md:text-xl lg:text-2xl xl:text-7xl">&lt;Projects /&gt;</div>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 mt-6">
              {projects.map( ({name, img}) => (
                <div ref={myRef} className="project">
                  <img src={img} alt="" className="project-img w-full "/>
                  <span className={`${elementVisable? "motion" :''}`}></span>
                  <h2 className='project-name'>{name}</h2>

                  <div className="project-tech">
                    <AiFillGithub color="blue" size="3rem" />
                    <AiFillThunderbolt color="blue" size="3rem" />
                    <AiFillLinkedin color="blue" size="3rem" />
                  </div>
                </div>
                )
              )}
            </div>
          </section>
      );
    }
    

export default Projects
