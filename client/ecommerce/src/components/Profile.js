import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
 import Box from '@mui/material/Box';
 import Container from '@mui/material/Container';
 import Select from '@mui/material/Select';
 import FormControl from '@mui/material/FormControl';
 import Slider from  '@mui/material/Slider';
 import FormLabel from '@mui/material/FormLabel';
 import MenuItem from '@material-ui/core/MenuItem';
 import TextField from '@material-ui/core/TextField';
 import "./Profile.css" ;
 import { ProfileList } from './ProfileList';


export const Profile = ({user}) => {
  return (
    <div className = "main-div">
      <Container>
      <Card className="main-card">
        <Grid container spacing={10}>
      <Grid item md={4}>
      <Box>

      {user.picture && 
      <CardMedia
       
     className="img1"
  component = "img"
    image={user.picture}
    alt="test"
         
     />
      }


      </Box>
   

      </Grid>
      <Grid item md={8}>
      <Typography fontSize="30px" color="#673ab7" variant="h1">
         <h1>  Hello {user.name}! </h1> 
            </Typography>

            <Typography  variant="subtitle1" fontSize = "20px" gutterBottom color="#673ab7">
Your username: {user.email} 
      </Typography>
      <Typography  variant="subtitle1" fontSize = "20px" gutterBottom color="#673ab7">
Your email address: {user.email} 
      </Typography>
      <ProfileList/>

  

      </Grid>

        </Grid>


      </Card>
    

      </Container>
    </div>
  )
}
