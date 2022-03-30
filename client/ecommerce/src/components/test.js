
   
import React from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem';
import "./_cart.css";
import ReactStars from "react-rating-stars-component";
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
 import { withRouter, useHistory}  from "react-router-dom";
 import Link from '@mui/material/Link';
 import {Route} from "react-router-dom";
 import { styled } from '@mui/material/styles';


function Cart({ cart, onRemoveFromCart, onEmptyCart, onUpdateCartQty}) {


  
  const handleEmptyCart = () => {
    onEmptyCart();
  }


	const ColorButton = styled(Button)(({ theme }) => ({
		color: theme.palette.getContrastText("#673ab7"),
		backgroundColor: 	"#673ab7",
		'&:hover': {
		  backgroundColor: 	"#673ab7",
		},
	  }));

  

  const renderEmptyMessage = () => {
      if (cart.total_unique_items > 0) {
        return;
      }
  
      return (
        <Typography variant="h6" style={{  color:"#212121" }} className="cart__none">
         No dream watches have been added to cart! 
        
      
      </Typography>
      );
  }

  const renderItems = () => (
    cart.line_items.map((lineItem) => (
   
        <CartItem
        
          item={lineItem}
          onUpdateCartQty={onUpdateCartQty}
          onRemoveFromCart={onRemoveFromCart}
          key={lineItem.id}
          className="cart__inner"
        />
  
    ))
)

const renderAllPrices = () => (
  cart.line_items.map((lineItem) => (
 
    <div >
    <Typography  style={{  color:"#212121" }}  >
    {lineItem.name} {" "} x  {" "} 
    {lineItem.quantity}  
   <Typography fontWeight ={600}  style={{  color:"red" }} > {lineItem.line_total.formatted_with_symbol} </Typography>
     </Typography>
    <Typography  style={{  color:"#212121" }}  > </Typography>
</div>

  ))
)

  const renderTotal = () => (
      <div className="cart__total">
          <Typography  fontWeight ={600}  style={{  color:"#212121" }}  className="cart__total-title"> Total Cost </Typography>
          <Typography fontWeight ={600}  style={{  color:"red" }}  className="cart__total-price">{cart.subtotal.formatted_with_symbol} </Typography>
      </div>
  )


  return (
    <div  >




 <Typography className = "banner" bgcolor ="#212121"   textAlign="right" color = "White" padding ="70px"> 
   <h2> Checkout </h2></Typography>  

   <Box padding ="10px"></Box>
 <Container > 

 
    <Card className="test" >

<Box>
      { renderEmptyMessage() }
      </Box>
      <Box>
      { renderItems() }
      </Box>
      <Box>


      {renderAllPrices()}

      </Box>
      <Box className="red">
      { renderTotal() }
      </Box>
      <div className="cart__footer">
      <ButtonGroup>
        <ColorButton  	variant = "outlined" color = "secondary" className="cart__btn-empty" onClick={handleEmptyCart}>Empty Cart</ColorButton>
        <ColorButton 	variant = "outlined" color ="secondary" className="cart__btn-checkout"
        >        
      Check Out
      </ColorButton> 

        </ButtonGroup>
      </div>
      </Card>



</Container>
    </div>
  );
};

export default withRouter(Cart);

Cart.propTypes = {
  cart: PropTypes.object,
  onRemoveFromCart: () => {},
  onUpdateCartQty: () => {},
  onEmptyCart: () => {},
};