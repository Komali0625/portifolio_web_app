import React from 'react';
import { Typography, Grid, Card, CardContent, CardActions, Button } from '@mui/material';

const projects = [
  { title: 'Quiz App', description: 'An interactive quiz application.', link: '#' },
  { title: 'To-Do List', description: 'A simple to-do list app.', link: '#' },
  { title: 'E-commerce Page', description: 'A responsive e-commerce landing page.', link: '#' },
];

const Projects = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Projects
      </Typography>
      <Grid container spacing={3}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card elevation={3}>
              <CardContent>
                <Typography variant="h5">{project.title}</Typography>
                <Typography>{project.description}</Typography>
              </CardContent>
              <CardActions>
                <Button href={project.link}>View</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Projects;
