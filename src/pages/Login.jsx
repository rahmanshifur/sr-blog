import React from "react";
import {
  Box,
  Button,
  Container,
  Link,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const Login = () => {
  const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          padding: 4,
          boxShadow: 3,
          borderRadius: 2,
          backgroundColor: "#fff",
        }}
      >
        <Typography
          gutterBottom
          textAlign="center"
          sx={{ fontSize: isMobile ? "20px" : "24px", fontWeight: 500 }}
        >
          Sign In to <span style={{ color: "#FF6D00" }}>Sr</span>Blog
        </Typography>

        <Box component="form" noValidate>
          <Typography variant="subtitle1" mt={3}>
            Email Address
          </Typography>
          <TextField
            fullWidth
            size="small"
            variant="outlined"
            type="email"
            name="email"
            placeholder="Enter your email"
          />

          <Typography variant="subtitle1" mt={2}>
            Password
          </Typography>
          <TextField
            fullWidth
            size="small"
            variant="outlined"
            type="password"
            name="password"
            placeholder="Enter your password"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 4, backgroundColor: "#455a64" }}
          >
            Sign In
          </Button>

          <Typography variant="body2" textAlign="center" mt={3}>
            Don’t have an account yet?{" "}
            <Link href="/sign-up" underline="hover">
              Sign up
            </Link>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
