import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import Login from './Login'

const Navbar = () => {
  const [open, setOpen] = useState(false);


  const toggleDrawer = (state) => () => {
    setOpen(state);
  };

  const navItems = [
    {label:"Login", path:"/Login"},
    {label:"Sign Up", path:"/Sign"},
    { label: "Home", path: "/" },
    { label: "Become a Driver", path: "/Become_a_Driver" },
    { label: "Careers", path: "/careers" },
    { label: "Contact Us", path: "/Contect_Us" },
    { label: "About Us", path: "/About_Us" },
    
  
  ];

  return (
    <>
      <div className="nav">
        
      <AppBar position="static" color="Black">
        <Toolbar>
        
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)} style={{color:'white',height:'100%'}} >
        <List sx={{ width: 250 }}>
          {navItems.map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton component={Link} to={item.path} onClick={toggleDrawer(false)}>
                <ListItemText primary={item.label}  />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      
      </div>
    </>
  );
};

export default Navbar;
















// import React from "react";
// import AppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import { Link } from "react-router-dom";
// import { Box } from "@mui/material";

// const Navbar = () => {

//   return (
    
//     <AppBar position="static">
//       <Toolbar>
//         <Typography variant="h6" sx={{ flexGrow: 1 }}>
//           MyApp
//         </Typography>

//         <Box>
//          <Link></Link> <Button color="inherit" to="/">
//             Home
//           </Button>
//           <Button color="inherit" to="/Become_a_Driver">
//             Become a Driver
//           </Button>
//           <Button color="inherit" to="/Career">
//             Career
//           </Button>
//           <Button color="inherit" to="/Contect_Us">
//             Contact Us
//           </Button>
//           <Button color="inherit" to="/About_Us">
//             About Us
//           </Button>
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;