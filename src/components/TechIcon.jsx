
const TechIcon = ({Icon, Position, Name}) => {
  return (
    <div className="hero-icon" style={{position:"relative"}} >
        <div className="hero-icon-sub"><Icon size="3rem" /></div>
        <div className="hero-icon-main"><Icon size="3rem" /></div>
        <div className="hero-icon-name">{Name}</div>
    </div>
  )
}

export default TechIcon