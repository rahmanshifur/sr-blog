import React, { useRef, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Link,
  useTheme,
  useMediaQuery,
} from "@mui/material";

const SignUpPage = () => {
  const fileInputRef = useRef(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    imageFile: null,
  });

  const handleAvatarClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({ ...prev, imageFile: file }));

      const reader = new FileReader();
      reader.onload = () => {
        setImageUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      minHeight={{ xs: "75vh", sm: "100vh" }}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Container maxWidth="xs">
        <Box
          sx={{
            padding: 4,
            boxShadow: 3,
            borderRadius: 2,
            backgroundColor: "#fff",
          }}
        >
          <Typography gutterBottom textAlign="center" sx={{ fontSize:isMobile?'20px':'24px', fontWeight:500}}>
            Create an Account
          </Typography>

          {/* Avatar Upload */}
          <Box display="flex" justifyContent="center" my={2}>
            <Avatar
              src={imageUrl || ""}
              sx={{
                bgcolor: "#455a64",
                width: 72,
                height: 72,
                cursor: "pointer",
              }}
              onClick={handleAvatarClick}
            >
              {!imageUrl && "Add"}
            </Avatar>
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleImageChange}
              hidden
            />
          </Box>

          {/* Form */}
          <Box component="form" onSubmit={handleSubmit} noValidate>
            <Typography variant="subtitle1">Full Name</Typography>
            <TextField
              fullWidth
              size="small"
              variant="outlined"
              name="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
            />

            <Typography variant="subtitle1" mt={2}>
              Email Address
            </Typography>
            <TextField
              fullWidth
              size="small"
              variant="outlined"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
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
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
            />

            <Button
              type="submit"
              fullWidth
              size="small"
              variant="contained"
              sx={{ mt: 4, backgroundColor: "#455a64" }}
            >
              Sign Up
            </Button>

            <Typography variant="body2" textAlign="center" mt={2}>
              Already have an account?{" "}
              <Link href="/login" underline="hover">
                Log in
              </Link>
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default SignUpPage;
