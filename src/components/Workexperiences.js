

import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';


export default function Workexperiences() {
  const theme = useTheme();

  return (
    <Grid container spacing={2} justify='centter'>
        <Grid item xs={12} md={6} lg={3}>
           <Card>
               <CardMedia
               component="img"
               height="194"
               image='../../public/static/img/logo/Solactive_logo.png'
               alt="Paella dish" 
               />
               <CardContent>

               </CardContent>

           </Card>
        </Grid>
        <Grid item xs={12} md={6}  lg={3}>
            <Paper style={{ height:75, width:'100%'}} variant="outlined" />
        </Grid>
        <Grid item item xs={12} md={6} lg={3}>
            <Paper style={{ height:75, width:'100%'}} variant="outlined" />
        </Grid>
        <Grid item item xs={12} md={6} lg={3}>
            <Paper style={{ height:75, width:'100%'}} variant="outlined" />
        </Grid>
    </Grid>
  );
}