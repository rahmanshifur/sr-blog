import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Stack,
  Grid,
  Container,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import bgImg from "../../assets/image/bg-img.jpg";

const AllPost = () => {
  const posts = [
    { id: 1, title: "Post One", image: bgImg },
    { id: 2, title: "Post Two", image: bgImg },
    { id: 3, title: "Post Three", image: bgImg },
    { id: 4, title: "Post Four", image: bgImg },
    { id: 5, title: "Post Five", image: bgImg },
  ];

  return (
    <Container>
    <Grid container spacing={2}>
      {posts.map((post) => (
        <Grid item key={post.id} size={{ xs: 12, md: 3 }}>
          <Card sx={{}}>
            <CardMedia
              component="img"
              height="240"
              image={post.image}
              alt={post.title}
            />
            <CardContent>
              <Typography  sx={{fontWeight:'bold',fontSize:'18px'}}>
                {post.title}
              </Typography>
            </CardContent>
            <CardActions>
              <Stack direction="row" spacing={1} width="100%">
                <Button
                  variant="contained"
                  color="error"
                  fullWidth
                  startIcon={<DeleteIcon />}
                >
                  Delete
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#fbc02d",
                    ":hover": { background: "#f9a825" },
                  }}
                  fullWidth
                  startIcon={<EditIcon />}
                >
                  Update
                </Button>
              </Stack>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
    </Container>
  );
};

export default AllPost;
