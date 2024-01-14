import React, { useState } from "react";
import "./style.css";
import Maison from "../../data/maisonTyp";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

interface Props {
  Maison: Maison;
}

const MaisonDeTaill = ({ Maison }: Props) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEngenstre = () => {
    setOpen(true);
  };

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={Maison.picture}
        />
        <CardContent className="maisonList">
          <Typography gutterBottom variant="h5" component="div">
            <h1>{Maison.nom}</h1>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {Maison.ville}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleClose}>
            annuler
          </Button>
          <Button size="small" onClick={handleEngenstre}>
            Engenstre
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default MaisonDeTaill;
