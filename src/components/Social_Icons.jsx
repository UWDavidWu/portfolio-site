import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
} from "react-icons/ai";
import Icon from "./Icon/Icon";


const Social_Icons = () => {
  return (
    <div className="social-icons">
      <Icon  Icon={AiFillGithub} link="https://github.com/UWDavidWu" />
      <Icon Icon={AiFillLinkedin}  link="https://www.linkedin.com/in/david-wu-a8a8a817b/"  />
      <Icon Icon={AiFillMail} link="wu.dinghang@outlook.com"  />
  </div>
  )
}

export default Social_Icons