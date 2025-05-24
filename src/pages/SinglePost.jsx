import React, { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  TextField,
  Button,
  Divider,
  Avatar,
  Paper,
} from '@mui/material';
import bgImg from "../assets/image/bg-img.jpg";

const dummyComments = [
  { name: 'John Doe', comment: 'Great article!', date: '2024-05-20' },
  { name: 'Jane Smith', comment: 'Very helpful content.', date: '2024-05-21' },
];

const BlogSinglePage = () => {
  const [comments, setComments] = useState(dummyComments);
  const [newComment, setNewComment] = useState({ name: '', comment: '' });

  const handleSubmit = () => {
    if (newComment.name && newComment.comment) {
      const today = new Date().toISOString().split('T')[0];
      setComments([...comments, { ...newComment, date: today }]);
      setNewComment({ name: '', comment: '' });
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      {/* Blog Header */}
      <Typography variant="h4" fontWeight="bold" gutterBottom sx={{fontSize:{xs:'22px'}}}>
        Understanding the Future of Artificial Intelligence
      </Typography>
      <Typography variant="subtitle2" color="text.secondary" gutterBottom>
        By Admin • May 20, 2025
      </Typography>

      {/* Blog Image */}
      <Box
        component="img"
        src={bgImg||''} // Place an image inside public folder
        alt="AI"
        sx={{
          width: '100%',
          height: { xs: 200, sm: 400 },
          objectFit: 'cover',
          borderRadius: 2,
          my: 2,
        }}
      />

      {/* Blog Content */}
      <Typography variant="body1" sx={{ whiteSpace: 'pre-line', mb: 4, }}>
        AI is rapidly evolving and reshaping the world across industries. From healthcare to automation, 
        the integration of AI tools enhances efficiency and decision-making. In this blog, we explore key developments, 
        challenges, and opportunities AI presents today and in the near future.
      </Typography>

      <Divider sx={{ my: 4 }} />

      {/* Comments Section */}
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        Comments & Reviews
      </Typography>

      {comments.map((c, index) => (
        <Paper key={index} sx={{ p: 2, my: 2, }} elevation={1}>
          <Box display="flex" alignItems="center" gap={2}>
            <Avatar src={bgImg} />
            <Box>
              <Typography variant="subtitle1" mb={'-5px' }>{c.name}</Typography>
              <Typography variant="caption" color="text.secondary" >
                {c.date}
              </Typography>
            </Box>
          </Box>
             <Typography variant="body2" mt={1} ml={7}>
                {c.comment}
              </Typography>
        </Paper>
      ))}

      {/* Add Comment */}
      <Box mt={4}>
        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
          Leave a comment
        </Typography>
        <TextField
          label="Your Name"
          fullWidth
          size="small"
          value={newComment.name}
          onChange={(e) => setNewComment({ ...newComment, name: e.target.value })}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Your Comment"
          fullWidth
          multiline
          minRows={3}
          value={newComment.comment}
          onChange={(e) => setNewComment({ ...newComment, comment: e.target.value })}
          sx={{ mb: 2 }}
        />
        <Button variant="contained" sx={{background:'#455a64'}} onClick={handleSubmit}>
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default BlogSinglePage;
