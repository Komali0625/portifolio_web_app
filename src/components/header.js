import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="sticky" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My Portfolio
        </Typography>
        <Button color="inherit" href="#about">
          About
        </Button>
        <Button color="inherit" href="#skills">
          Skills
        </Button>
        <Button color="inherit" href="#projects">
          Projects
        </Button>
        <Button color="inherit" href="#contact">
          Contact
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
