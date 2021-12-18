import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { workexperiences } from '../static/constants';


export default function Workexperiences() {
  const theme = useTheme();

  return (
      <section id="workExperience">
            <Grid container spacing={2} justify='centter'>
                {workexperiences.map(({ company, title, img, responsibility, tech, startDate, endDate })=>(
                    <Grid item xs={12} md={6} lg={3}>
                    <Card>
                        <CardMedia
                        component="img"
                        //width="200"
                        //height="200"
                        image={img}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {company}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {title} <br/>   
                                {startDate} - {endDate}
                            </Typography>
                            <Typography variant="h6" component="div">
                                {responsibility} + {tech}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
        
                    </Card>
                </Grid>
                
                ))

                }
                
                
            </Grid>
    </section>
  );
}

