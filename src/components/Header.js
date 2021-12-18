import useEffect from 'react'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Header = () => {

    return (
      <div id='header'>
        <Typography gutterBottom variant="h1" component="div">
        Welcome
      </Typography>
      <Typography  gutterBottom variant="h1" component="div">
       David Wu
      </Typography>
      </div>
      
    )
}

export default Header
