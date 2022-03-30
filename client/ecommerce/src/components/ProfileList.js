import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import AddCardIcon from '@mui/icons-material/AddCard';
import SearchIcon from '@mui/icons-material/Search';
import AssignmentIcon from '@mui/icons-material/Assignment';

export const ProfileList = () => {
  return (
    <div> <List sx={{ width: '100%', maxWidth: 360, bgcolor: "white", padding:"20px"}}>
    <ListItem>
      <ListItemAvatar >
        <Avatar  >
          <AssignmentIcon style={{  color:"#673ab7",  fontSize:"25px" }} />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary="View Orders" secondary="Check recent orders" secondaryTypographyProps={{color: "#673ab7", fontSize:"15px"}}/>
    </ListItem>
    <ListItem>
      <ListItemAvatar  >
        <Avatar>
          <AddCardIcon style={{  color:"#673ab7",  fontSize:"25px" }}  />
        </Avatar>
      </ListItemAvatar>
      <ListItemText  primary="Payment" secondary="Check payment details" secondaryTypographyProps={{color: "#673ab7", fontSize:"15px"}} />
    </ListItem>
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <SearchIcon  style={{  color:"#673ab7",  fontSize:"25px" }} />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary="Tracking" secondary="Track your item" secondaryTypographyProps={{color: "#673ab7", fontSize:"15px"}} />
    </ListItem>
  </List></div>
  )
}
