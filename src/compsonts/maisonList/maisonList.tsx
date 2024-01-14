import React, { useState } from "react";
import "./style.css";
import MaisonDeTaille from "../maisonDeTaill/MaisonDeTaill";
import { t } from "i18next";
import { Box, Button, Modal, Typography } from "@mui/material";
import Maison from "../../data/maisonTyp";

interface Props {
  Maisons: Maison[];
  handleMaisonChange: Function;
}

const MaisonList = ({ Maisons, handleMaisonChange }: Props) => {
  const [open, setOpen] = useState(false);
  const [selectedMaison, setSelectedMaison] = useState<Maison | null>(null);

  const handleOpen = (maison: Maison) => {
    setSelectedMaison(maison);
    setOpen(true);
  };

  const handleClose = (maison: Maison) => {
    setSelectedMaison(null);
    setOpen(false);
  };

  return (
    <>
      <div className="maisonList">
        {Maisons.map((maison) => (
          <div
            key={maison.id}
            className="maisonItem"
            onClick={() => handleOpen(maison)}
          >
            <img className="ImageName" src={maison.picture} alt={maison.nom} />
            <h1>{maison.nom}</h1>
            <p>{maison.ville}</p>
          </div>
        ))}
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby={t("maison." + selectedMaison?.nom)}
        aria-describedby={t("maison." + selectedMaison?.nom)}
      >
        <Box
          display="flex"
          flexWrap="wrap"
          gap="10px"
          rowGap="5px"
          justifyContent="left"
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {selectedMaison && <MaisonDeTaille Maison={selectedMaison} />}
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default MaisonList;
