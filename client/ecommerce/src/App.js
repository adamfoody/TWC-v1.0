import './App.css';
import NavBar from './components/NavBar';
import {Route, Switch} from "react-router-dom";
import { BrowserRouter, Link } from 'react-router-dom';
import  Home  from './components/Home';
import Product from './components/Product';
import About from './components/About';
import {Auth0Provider} from '@auth0/auth0-react';
import {useAuth0} from '@auth0/auth0-react';
import Login from './components/Login';
import React, {useState, useEffect} from 'react';
import ExternalApi from "./components/ExternalApi";
import commerce from './lib/Commerce.js';
import CartNav from "./components/CartNav";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faShoppingBag, faTimes } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import Contact from './components/Contact';
import Sell from './components/Sell';
import SellForm from './components/SellForm';
import Checkout from './components/Checkout';
import Spinner from './components/Spinner';
import { ThemeProvider, createTheme } from '@mui/material/styles'; 
import { ProductPage } from './components/ProductPage';
import 'animate.css';
import Card from '@mui/material/Card';
import { Profile } from './components/Profile';







function App() {

  const [products, setProducts] = useState([]);

  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [userMetadata, setUserMetadata] = useState(null);
  const theme = createTheme({

    


    typography: { 
      allVariants: {
        fontFamily: 'BlinkMacSystemFont',
        textTransform: 'none',
        fontSize: 16,
      },
    },
  });
 
 

  const fetchProducts = () => {
    commerce.products.list().then((products) => {
      setProducts(products.data);
    
    }).catch((error) => {
      console.log('There was an error fetching the products', error)
    });
  }
  





  
  useEffect(() => {
    fetchProducts();
    fetchCart();
    const getUserMetadata = async () => {
      const domain = "YOUR_DOMAIN";
  
      try {
        const accessToken = await getAccessTokenSilently({
          audience: `https://dev-a8av2d02.us.auth0.com/api/v2/`,
          scope: "read:current_user",
        });
  
        const userDetailsByIdUrl = `https://dev-a8av2d02.us.auth0.com/api/v2/users/${user.sub}`;
  
        const metadataResponse = await fetch(userDetailsByIdUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
  
        const { user_metadata } = await metadataResponse.json();
  
        setUserMetadata(user_metadata);
      } catch (e) {
        console.log(e.message);
      }
    };
  
    getUserMetadata();
  }, [getAccessTokenSilently, user?.sub]);
    
  
 

  const [cart, setCart] = useState({});

  const fetchCart = () => {
    commerce.cart.retrieve().then((cart) => {
      setCart(cart);
    }).catch((error) => {
      console.log('There was an error fetching the cart', error);
    });
  }

  const handleAddToCart = (productId, quantity) => {
  
  commerce.cart.add(productId, quantity).then((item) => {
    setCart(item.cart);
  }) 
}


{/** 
  incase I break my handleaddtocart... 
  
  .catch((error) => {
    console.error('There was an error adding the item to the cart', error);
  });

*/}

const handleUpdateCartQty = (lineItemId, quantity) => {
  commerce.cart.update(lineItemId, { quantity }).then((resp) => {
    setCart(resp.cart);
  }).catch((error) => {
    console.log('There was an error updating the cart items', error);
  });
}

const handleRemoveFromCart = (lineItemId) => {
  commerce.cart.remove(lineItemId).then((resp) => {
    setCart(resp.cart);
  }).catch((error) => {
    console.error('There was an error removing the item from the cart', error);
  });
}

const handleEmptyCart = () => {
  commerce.cart.empty().then((resp) => {
    setCart(resp.cart);

   
  

    Swal.fire({
      title: 'Removed Watch from Cart!',
      icon: 'error',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
    
  }).catch((error) => {
    console.error('There was an error emptying the cart', error);
  });
}

  
  const {isLoading} = useAuth0();


  if(isLoading) return <div> <Spinner/> </div>

  

  return (

    <ThemeProvider theme={theme}>


<BrowserRouter>
  <NavBar />
 

 

  <Switch>
  <Route exact path= "/" render={props=> <Home  products={products}  onAddToCart={handleAddToCart} {...props} />} />
  <Route exact path= "/about" render={props=> <About {...props} />} />
  <Route exact path= "/contact" render={props=> <Contact {...props} />} />
  <Route exact path= "/sell" render={props=> <Sell  {...props} />} />
  <Route exact path= "/sellform" render={props=> <SellForm userMetadata = {userMetadata} user={user} {...props} />} />
  <Route exact path= "/product" render={props=> <Product products={products}   onAddToCart={handleAddToCart}  {...props} />} />
  <Route exact path= "/login" render={props=> <Login  {...props} />} />
  <Route exact path= "/checkout" render={props=> <Checkout {...props} />} />
  {isAuthenticated &&
  <Route exact path= "/account" render={props=> <Profile user={user} {...props} />} />
  }

  <Route exact path= "/productpage/:id" render={props=> <ProductPage    onAddToCart={handleAddToCart} {...props} />} />



  <Route exact path= "/navcart" render={props=> <CartNav    cart={cart}
        onUpdateCartQty={handleUpdateCartQty}
        onRemoveFromCart={handleRemoveFromCart}
        onEmptyCart={handleEmptyCart}  {...props} />} />

<Route path="/external-api" component={ExternalApi} />
  </Switch>





</BrowserRouter>


</ThemeProvider>

  );
}

export default App;
