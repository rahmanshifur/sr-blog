import React, { useState, useRef } from 'react';
import {
  Avatar,
  Box,
  Button,
  Modal,
  TextField,
  Typography,
  IconButton,
  Stack,
  Divider,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const ProfilePage = () => {
  const [open, setOpen] = useState(false);
  const [preview, setPreview] = useState(null);
  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    oldPassword: '',
    newPassword: '',
    image: '', // holds the File object
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image' && files?.[0]) {
      const file = files[0];
      setFormData((prev) => ({ ...prev, image: file }));
      setPreview(URL.createObjectURL(file));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated Profile:', formData);
    handleClose();
  };

  return (
    <Box sx={{ p: 4, maxWidth: 500, mx: 'auto' }}>
      <Box
        sx={{
          p: 3,
          borderRadius: 3,
          bgcolor: 'background.paper',
          boxShadow: 3,
          textAlign: 'center',
        }}
      >
        <Avatar
          src={preview || formData.image || 'https://i.pravatar.cc/150'}
          sx={{ width: 100, height: 100, mx: 'auto', mb: 2 }}
        />
        <Typography variant="h5" gutterBottom>
          {formData.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {formData.email}
        </Typography>

        <Button
          variant="outlined"
          startIcon={<EditIcon />}
          sx={{ mt: 3 }}
          onClick={handleOpen}
        >
          Edit Profile
        </Button>
      </Box>

      {/* Edit Modal */}
      <Modal open={open} onClose={handleClose}>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            p: 4,
            bgcolor: 'background.paper',
            borderRadius: 3,
            width: 400,
            mx: 'auto',
            mt: '5%',
            boxShadow: 10,
          }}
        >
          <Typography variant="h6" gutterBottom textAlign="center">
            Update Profile
          </Typography>

          <Stack spacing={2} mt={2} alignItems="center">
            <input
              type="file"
              name="image"
              ref={fileInputRef}
              style={{ display: 'none' }}
              accept="image/*"
              onChange={handleChange}
            />
            <Avatar
              src={preview || formData.image || 'https://i.pravatar.cc/150'}
              sx={{
                width: 80,
                height: 80,
                cursor: 'pointer',
                border: '2px solid #ddd',
              }}
              onClick={handleAvatarClick}
              title="Click to change image"
            />
          </Stack>

          <Stack spacing={2} mt={3}>
            <TextField
              label="Full Name"
              name="name"
              fullWidth
              value={formData.name}
              onChange={handleChange}
            />
            <TextField
              label="Old Password"
              name="oldPassword"
              type="password"
              fullWidth
              value={formData.oldPassword}
              onChange={handleChange}
            />
            <TextField
              label="New Password"
              name="newPassword"
              type="password"
              fullWidth
              value={formData.newPassword}
              onChange={handleChange}
            />
          </Stack>

          <Divider sx={{ my: 2 }} />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            size="large"
          >
            Save Changes
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default ProfilePage;
