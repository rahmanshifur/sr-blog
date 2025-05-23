import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import bgImg from "../assets/image/bg-img.jpg";
import CustomCard from "../components/ui/CustomCard";

function Home() {
  return (
    <Box>
      <Box
        sx={{
          maxWidth: "100%",
          position: "relative",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src={bgImg}
          alt="Background"
          sx={{
            width: "100%",
            height: { xs: "250px", sm: "350px" }, // mobile: 300px, tablet+: 400px
            objectFit: "cover",
            display: "block",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -35%)",
            textAlign: "center",
            px: 2,
          }}
        >
          <Typography
            className="heading-animation"
            sx={{
              color: "white",
              fontSize: { xs: "22px", sm: "28px", md: "36px" },
              fontWeight: "bold",
              textShadow: "1px 1px 4px rgba(4, 5, 0, 0.6)",
            }}
          >
            Welcome to my Blogs
          </Typography>
          <Typography sx={{fontSize:{xs:'10px', sm:'12px'}}}>Explore the latest trends, tools, and breakthroughs in artificial intelligence, machine learning, and automation on our AI blog page.</Typography>
        </Box>
      </Box>
      <Container mt={2.5} sx={{ mx:'auto'}}>
        <Typography sx={{my:3, fontSize:{xs:'20px', sm:'26px'}, fontWeight:'bold', textAlign:'center'}}>Recent Posts</Typography>
        <Grid container spacing={2}  sx={{ display:"flex", justifyContent:{xs:'center',sm:'flex-start'}}}>
          <Grid item md={3}>
            <CustomCard />
          </Grid>
          <Grid item md={3}>
            <CustomCard />
          </Grid>
          <Grid item md={3}>
            <CustomCard />
          </Grid>
          <Grid item md={3}>
            <CustomCard />
          </Grid>
          <Grid item md={3}>
            <CustomCard />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Home;
