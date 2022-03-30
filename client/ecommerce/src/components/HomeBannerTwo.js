
import "./HomeBannerTwo.css"

import { styled } from '@mui/material/styles';
import  React, {useState, useEffect}from 'react';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import SentimentDissatisfiedTwoToneIcon from '@mui/icons-material/SentimentDissatisfiedTwoTone';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import { withRouter, useHistory}  from "react-router-dom";
import Footer from "./Footer";



export const HomeBannerTwo = () => {

    const image1 = 'https://www.linkpicture.com/q/download_2_-removebg-preview.png';
    const image2 = 'https://i.postimg.cc/nrmrmP3t/png-clipart-audemars-piguet-royal-oak-chronograph-watch-audemars-piguet-royal-oak-offshore-chronogra.png'
    const image3 = 'https://i.postimg.cc/1RBjh3Bw/png-transparent-patek-philippe-co-patek-philippe-calibre-89-automatic-watch-nautilus-watch-watch-acc.png'
    const image4 = 'https://www.linkpicture.com/q/png-clipart-audemars-piguet-baselworld-watch-luxury-goods-clock-watch-watch-accessory-accessories-removebg-preview-1.png'
  
    const ColorButton = styled(Button)(({ theme }) => ({
		color: theme.palette.getContrastText("#673ab7"),
		backgroundColor: 	"#673ab7",
        borderColor:"#673ab7",
		'&:hover': {
          backgroundColor: 	"#FFFFF",
          color: "white",
          borderColor:"#673ab7",
		},
	  }));
  return (
      <div> 
    <div className="bannerHome2">
    <Container>
     <Grid container spacing={6}> 
  
     <Grid item sm={6} md={6}>
     <Grid className="brandImg2" container spacing={2}> 
     <Grid item xs={12} sm={6} >  
         <img  src={image1} height="300px" width="340px" alt ="broke bro" />
         </Grid>
         <Grid item xs={12} sm={6} >  
         <img  src={image4} height="300px" width="300px" alt ="broke bro" />
         </Grid>
     
         </Grid>
         </Grid>
    
          <Grid item sm={6} md={6}>
          <Box padding="20px">
          <Typography textAlign="right" fontSize="25px" color="white" variant="h1" >
       <h1>  Top Brands </h1> 
          </Typography>
          </Box>
          <Box textAlign="left" >
          <Typography textAlign="right" color="white" fontSize="25px" variant="h1" paddingBottom="20px" >
            Here at The Watch Club we take quality seriously. Thats why we only work supply the very best. 
          </Typography>
          <Typography textAlign="right" color="white" fontSize="25px" variant="h1" >
     
         
          Rolex,
          Omega, Cartier, Audemar Piguet, Patek Phillipe
        
          </Typography>

          
          <Box padding="20px" textAlign="right" >
          
    
            
            <ColorButton   variant="outlined">
              ABOUT US
            </ColorButton>
            </Box>
          </Box>
          
      
         
    
          </Grid>
          </Grid>
      
      

    </Container>
    
  </div>
  <Footer/>
  </div>


  )
}
