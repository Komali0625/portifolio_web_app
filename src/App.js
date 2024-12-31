import React from 'react';
import { CssBaseline, ThemeProvider, Container, Box } from '@mui/material';
import theme from './theme';
import Header from './components/header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Container maxWidth="lg">
        <Box sx={{ mt: 4 }}>
          <About />
          <Skills />
          <Projects />
          <Testimonials />
          <Contact />
        </Box>
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default App;
