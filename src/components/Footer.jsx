import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#455a64',
        py: 1,
        mt: 'auto',
        textAlign: 'center',
        borderTop: '1px solid #e0e0e0',
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#FFF', }}>
          <span style={{ color: '#FF6D00' }}>Sr</span>Blog
        </Typography>
        <Typography variant="body2" color="text.secondary" >
          Crafted with curiosity and coffee ☕ — Discover thoughts, tips, and stories on <strong >SrBlog</strong>.
        </Typography>
        <Typography variant="caption" color="text.disabled" display="block" >
          © {new Date().getFullYear()} SrBlog. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
