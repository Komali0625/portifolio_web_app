import React from 'react';
import { Typography, LinearProgress, Box } from '@mui/material';

const skills = [
  { name: 'HTML', level: 90 },
  { name: 'CSS', level: 85 },
  { name: 'JavaScript', level: 80 },
  { name: 'React.js', level: 75 },
];

const Skills = () => {
  return (
    <Box sx={{ marginTop: 3 }}>
      <Typography variant="h4" gutterBottom>
        Skills
      </Typography>
      {skills.map((skill, index) => (
        <Box key={index} sx={{ marginY: 2 }}>
          <Typography>{skill.name}</Typography>
          <LinearProgress variant="determinate" value={skill.level} />
        </Box>
      ))}
    </Box>
  );
};

export default Skills;
