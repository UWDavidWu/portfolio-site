

import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { SocialIcons, Div3 } from './public_styles';

const Footer = () => {
    return (
        <div>
            
                <SocialIcons>
                    <AiFillGithub size="3rem" />
                </SocialIcons>
                <AiFillInstagram size="3rem" />
                <AiFillLinkedin size="3rem" />
            
            
        </div>
    )
}

export default Footer
