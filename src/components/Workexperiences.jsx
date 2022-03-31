
import { Visibility } from '@mui/icons-material';
import { workexperiences } from '../static/constants';
import SectionHeader from './SectionHeader';
import Workexperience from './Workexperience';


const Workexperiences = () => {

  return (
    <section id="workExperience">
      <SectionHeader text={"Work"} />
     
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {workexperiences.map(( work)=>(
            <Workexperience work={work} />
        ))
        

        }
</div>
    </section>
);
}

export default Workexperiences