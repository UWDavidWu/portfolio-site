import { useInView } from 'react-intersection-observer';

const Project = ({project}) => {

    const { ref: Ref, inView: elementVisable } = useInView({
        "threshold": 0.2,
        "triggerOnce": false
      });

    return (
    
        <div ref={Ref} className="project">
            <img src={project.img} alt="" className="project-img w-full "/>
            {/* <span className={`${elementVisable? "motion" :''}`}></span> */}
            
            <div style={{position:"absolute",left:"20%",display:"flex", flexDirection:"column"}}>
                <h2 className='project-name'>{project.name}</h2>
                <h2 className="project-description">{project.description}</h2>
            </div>  
                <div className='project-tech'>
                    {project.icons.map( Icon => (
                        <Icon color="lightblue" size="3rem"/>
                        )
                    )}
                </div>
            
        </div>
    )
}

export default Project