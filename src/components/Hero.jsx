import TechIcon from "./TechIcon"
import { heroIcons } from '../static/constants';

const Hero = ({left, top, down}) => {
    
  return (
    <div id='hero'
        style={{transform: `translate3d(${left}px,${top}px,0px)`,transition: "all 1s ease-out"}}
      >
        {heroIcons.map( ($) => (
            <TechIcon  Icon={$.icon[0]} Name={$.name} period={$.period}/>
        ))}
    </div>
  )
}

export default Hero