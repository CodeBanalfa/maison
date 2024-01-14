import React, { useState } from "react";
import Logo from "../../assts/image/maisonLogo.jpg";
import "./style.css";
import { Link } from "react-router-dom";
import { Home as HomeIcon } from "@mui/icons-material";
import InputIcon from "@mui/icons-material/Input";
import ReorderIcon from "@mui/icons-material/Reorder";
import maison from "../../data/maisonTyp";

interface Props {
  hiddenLinksChange: Function;
  maison: maison;
}

const Navbr = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const toggleNavbar = () => {
    setOpen(!open);
    // Appelez la fonction pour changer l'état des liens
    hiddenLinksChange(!open);
  };

  return (
    <>
      <div className={`Navbr ${open ? "open" : "close"}`}>
        <div className="leftSide">
          <img src={Logo} alt="{Logo}" />
        </div>
        <div className="rightSide">
          <Link to="/Home">
            <HomeIcon fontSize="large" />
          </Link>
          <Link to="/login">
            <InputIcon />
          </Link>
          <button onClick={toggleNavbar}>
            <ReorderIcon />
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbr;
function hiddenLinksChange(arg0: boolean) {
  throw new Error("Function not implemented.");
}
