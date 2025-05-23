import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Stack,
  Paper,
} from "@mui/material";

function AddNewPostForm() {
  const [formData, setFormData] = useState({
    image: null,
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === "image" ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
  };

  return (
    <Box
      minHeight={{xs:'75vh',sm:"100vh"}}
      display="flex"
      alignItems="center"
      justifyContent="center"
      // bgcolor="#f0f2f5"
      p={2}
    >
      <Paper elevation={3} sx={{ p: 4, width: "100%", maxWidth: 500 }}>
        <Typography variant="h5" align="center" gutterBottom sx={{ fontWeight: 600, color: "#1976d2" }}>
          Add New Post
        </Typography>

        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <div>
              <Typography variant="body2" sx={{ fontWeight: 500 }}>
                Upload Image
              </Typography>
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleChange}
                style={{
                  marginTop: "5px",
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: 6,
                  width: "100%",
                }}
              />
            </div>

            <TextField
              name="title"
              label="Title"
              fullWidth
              value={formData.title}
              onChange={handleChange}
            />

            <TextField
              name="description"
              label="Description"
              multiline
              rows={4}
              fullWidth
              value={formData.description}
              onChange={handleChange}
            />

            <Button
              variant="contained"
              type="submit"
              fullWidth
              sx={{ backgroundColor: "#1976d2", fontWeight: 600 }}
            >
              Submit Post
            </Button>
          </Stack>
        </form>
      </Paper>
    </Box>
  );
}

export default AddNewPostForm;
