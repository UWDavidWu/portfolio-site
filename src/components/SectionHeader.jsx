import { useInView } from "react-intersection-observer"


const SectionHeader = ({text}) => {

    const { ref: Ref, inView: elementVisable } = useInView();

  return (
    <div 
    ref = {Ref}
    className={`${elementVisable? "header header-inview" :'header'}`}
     >&lt;{text} /&gt;</div>
  )
}

export default SectionHeader