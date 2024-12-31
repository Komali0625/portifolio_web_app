import React from 'react';
import { Typography, Box, Paper } from '@mui/material';

const testimonials = [
  { name: 'John Doe', feedback: 'Amazing work! Highly recommended.' },
  { name: 'Jane Smith', feedback: 'Great developer to work with!' },
];

const Testimonials = () => {
  return (
    <Box sx={{ marginTop: 3 }}>
      <Typography variant="h4" gutterBottom>
        Testimonials
      </Typography>
      {testimonials.map((testimonial, index) => (
        <Paper elevation={3} sx={{ padding: 2, marginY: 2 }} key={index}>
          <Typography variant="body1">{testimonial.feedback}</Typography>
          <Typography variant="subtitle1" color="text.secondary">
            - {testimonial.name}
          </Typography>
        </Paper>
      ))}
    </Box>
  );
};

export default Testimonials;
