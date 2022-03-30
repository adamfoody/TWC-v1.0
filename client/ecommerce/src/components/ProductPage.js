import React, {useState, useEffect}from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
 import Box from '@mui/material/Box';
 import Container from '@mui/material/Container';
 import Swal from 'sweetalert2';
 import { styled } from '@mui/material/styles';
import commerce from '../lib/Commerce.js';
import {useParams}  from "react-router-dom";
import Spinner from './Spinner.js';

export const ProductPage = ({ onAddToCart}) => {


    const handleAddToCart = () => {
   
        Swal.fire({
          icon: 'success',
          title: 'Added Watch to your Cart!',
       
        })
          onAddToCart(product.id, 1);
       
      }
  
      
      const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText("#673ab7"),
        backgroundColor: 	"#673ab7",
        borderColor:"#673ab7",
        '&:hover': {
          backgroundColor: 	"#673ab7",
        },
      }));


  

      const [product, setProduct] = useState({});

   
{/**
      const fetchProduct = async (id) => {
        commerce.products.retrieve(id).then((product) => setProduct(product));
       
         


      }

    */}


    const fetchProduct = async (id) => {
        const response = await commerce.products.retrieve(id);
        const {name, price, image, description, categories, categories1} = response;
        if(response.image.url){
        setProduct({
            id,
            name,
            description,
            image: image.url,
            price: price.formatted_with_symbol,
            categories: categories[0].name,
            categories1: categories[1].name,
         


        })}


    }

   



      useEffect(() => {
        const id = window.location.pathname.split("/");
        fetchProduct(id[2]);

      



        
       


    
    }, []);

    const createMarkup = (text) => {
      return { __html: text };
    };



 


      
  return (
    <div >

          

 <Container >
 {!product.image && 
  <Spinner/>
 }

 {product.image && 

   
    <Grid container spacing={2} padding="50px"  
> <Card>
        <Grid item xs={12} sm={12} >
    
        <Grid container spacing={2}>
        <Grid item xs = {12} md ={6}>
        <CardContent>
   
        <Box>

        <CardMedia
       
       component="img" 
      
       image={product.image}
       alt={product.name}
      
         
     />
     
   
        

    {/**     <p> {JSON.stringify(product.image)} </p>


   
   
*/}

  
        

        <Box> 
    
  
       
  
        </Box>

        

        </Box>

        </CardContent>
        </Grid>
        <Grid item xs = {12} md ={6}>
        <CardContent>
        <Box > 
        <Box paddingBottom="20px">
        <Typography style={{  color:"#673ab7" }}  textAlign="center" paddingTop ="20px"> 
   
<h1>
   {product.name} </h1>
  
   
</Typography>  
</Box>
 <Box paddingBottom="20px">
<Typography variant="body1" fontSize="17.5px" textAlign="center" paddingTop ="5px"  > 

   Size: {product.categories1}
   </Typography>  
   <Typography variant="body1" fontSize="17.5px" textAlign="center" paddingTop ="5px"  > 
   Brand: {product.categories}
   </Typography>  
 
</Box>

<Box paddingBottom="20px"> 
<Typography variant="body1" textAlign="left" paddingTop ="10px"  dangerouslySetInnerHTML={createMarkup(product.description)}> 
   
   </Typography>  

  </Box>

   <Box paddingBottom="20px"> 
  
   
   <Typography textAlign="center" fontWeight="bold" variant='h2' style={{  color:"red" }}>
<h2>     {product.price} </h2> 

  
      
      </Typography>
 </Box>

<Box textAlign="center"> 
      <ColorButton
  
     onClick={handleAddToCart}
   > Add To Basket </ColorButton>

</Box>

   
   

        </Box>
        <Box>
        

        <CardMedia>


        </CardMedia>

        </Box>

        </CardContent>
        </Grid>



        </Grid>


        </Grid>
        </Card>
      </Grid>
  
 }
    </Container>
 
    </div>
  )
}
