import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import bgImg from "../../assets/image/bg-img.jpg";
import { useNavigate } from "react-router-dom";

export default function CustomCard({ cardImg, title, desc }) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/post/22");
  };
  return (
    <Card sx={{ maxWidth: { xs: 346, sm: 275 } }}>
      <CardMedia
        sx={{ height: 180, objectFit: "cover" }}
        image={cardImg || bgImg}
        title="green iguana"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ cursor: "pointer" }}
        >
          {title || "No title"}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {desc ||
            "Lorem ipsum dolor sit amet asa consectetur adipisicing elit. Perspiciatis, molestiae."}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => handleNavigate()}>
          Read Article
        </Button>
      </CardActions>
    </Card>
  );
}
