import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { projects } from '../static/constants';





const Projects = () => {
    const theme = useTheme();

    return (
        <section id="projects">
        <Grid container spacing={2} justify='centter'>
            {projects.map(({  name, description, tech, img})=>(
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
                            {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {tech} 
                        </Typography>
                        <Typography variant="h6" component="div">
                            {description}
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

export default Projects
