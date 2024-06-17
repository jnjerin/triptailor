import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const Layout = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Triptailor</Typography>
        </Toolbar>
      </AppBar>
      <Drawer open={isDrawerOpen} onClose={toggleDrawer}>
        <List>
          <ListItem button>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Itineraries" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Reviews" />
          </ListItem>
        </List>
      </Drawer>
      <main>{children}</main>
    </div>
  );
};

export default Layout;