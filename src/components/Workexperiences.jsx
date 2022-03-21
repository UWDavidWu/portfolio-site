
import { Visibility } from '@mui/icons-material';
import { workexperiences } from '../static/constants';


const Workexperiences = () => {

  return (
    <section id="workExperience">
      <h1 className='header text-base sm:text-4xl md:text-7xl lg:text-7xl xl:text-7xl'>&lt;workExperience /&gt;</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {workexperiences.map(({  company, title, year, responsibility, tech, img})=>(
            <div className='work-item'>
                <div className='companyLogo'>
                  <img src={img} width={80} height={96} alt="" />
                </div>
                <div className='workDescription'>
                    <h3 >{company}</h3>
                    <div >{title}</div>
                    <div>.</div>
                    <div>{year}</div>


                 
                </div>

            </div>

        ))
        

        }
</div>
    </section>
);
}

export default Workexperiences