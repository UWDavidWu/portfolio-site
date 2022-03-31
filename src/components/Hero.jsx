import TechIcon from "./TechIcon"
import { heroIcons } from '../static/constants';

const Hero = ({trans}) => {
    
  return (
    <div id='hero'
        style={{transform: `translateX(${trans}px)`,transition: "all 1s ease-out"}}
      >
        {heroIcons.map( ($) => (
            <TechIcon  Icon={$.icon[0]} Name={$.name} />
        ))}
    </div>
  )
}

export default Hero