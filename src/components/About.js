import React from 'react';
import { Typography, Paper } from '@mui/material';

const About = () => {
  return (
    <Paper elevation={3} sx={{ padding: 2, marginTop: 3 }}>
      <Typography variant="h4" gutterBottom>
        About Me
      </Typography>
      <Typography variant="body1">
        Hi! I'm [Your Name], a passionate web developer with a knack for creating
        interactive and modern web applications. I enjoy building clean, responsive designs.
      </Typography>
    </Paper>
  );
};

export default About;
