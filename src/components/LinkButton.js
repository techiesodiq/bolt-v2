import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const LinkButton = ({ sx, to, text }) => {
  return (
    <Button
      variant="contained"
      component={Link}
      color="primary"
      to={to}
      sx={sx}
    >
      {text}
    </Button>
  );
};

export default LinkButton;
