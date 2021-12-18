import { AiFillGithub, AiFillLinkedin, AiFillThunderbolt } from 'react-icons/ai';

const Navbar = () => {
    return (
        
            <ul id="navbar">
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#workExperience">workExperience</a>
                </li>
                <li>
                    <a href="#">Timeline</a>
                </li>
                
                <li id="social">
                    <a href="https://github.com/UWDavidWu" target="_blank" rel="noopener noreferrer">
                        <AiFillGithub size="3rem"/> 
                    </a>
                    <a href="https://www.linkedin.com/in/uwdavid/" target="_blank" rel="noopener noreferrer">
                        <AiFillLinkedin size="3rem"/> 
                    </a> 
                    <a href="https://www.linkedin.com/in/uwdavid/" target="_blank" rel="noopener noreferrer">
                        <AiFillThunderbolt size="3rem"/> 
                    </a> 
                    
                </li>
                
            </ul>
        
    )
}

export default Navbar
