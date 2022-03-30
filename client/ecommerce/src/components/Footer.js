import Typography from '@mui/material/Typography';
import "./Footer.css";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const Footer = () => {

    const ColorButton = styled(Button)(({ theme }) => ({
        color: "white",
        backgroundColor: 	"#673ab7",
        borderColor:"#673ab7",
        '&:hover': {
          backgroundColor: 	"white",
          color: "#673ab7",
          borderColor:"white",
        },
      }));

  const date = new Date();
  const fullYear = date.getFullYear();
  return (
    <footer className="footer">
       <Typography textAlign="right" color="white" fontSize="20px" variant="h1" >
         <h1> Thinking about selling your watch?</h1>
          </Typography>
                
          <Box paddingLeft="30px" textAlign="right" >
          
    
            
            <ColorButton   variant="contained">
              SELL NOW
            </ColorButton>
            </Box>
    </footer>
  );
};

export default Footer;