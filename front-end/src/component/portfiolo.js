import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

export default function MediaCard({ userId }) {
  const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 300, margin: "3%" }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://www.farrer.co.uk/globalassets/work-from-home.jpg?width=840&height=473&mode=crop"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Web developer
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo,
          temporibus!
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => navigate("/update")}>
          Edit
        </Button>

        <Button size="small" onClick={() => navigate(`/portfolio/${userId}`)}>
          Show
        </Button>
      </CardActions>
    </Card>
  );
}
