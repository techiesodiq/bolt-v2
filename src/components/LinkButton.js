import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { theme } from "../theme";

const LinkButton = ({ to, text }) => {
  return (
    <Button
      variant="contained"
      component={Link}
      color="primary"
      to={to}
      sx={{
        width: "120%",
        fontSize: theme.typography.button.fontSize,
        fontWeight: theme.typography.button.fontWeight,
        textTransform: "capitalize",
        px: 4,
        py: 1,
      }}
    >
      {text}
    </Button>
  );
};

export default LinkButton;
