import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ textAlign: 'center', marginY: 3 }}>
      <Typography variant="body2">
        © {new Date().getFullYear()} My Portfolio. All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
