import React from "react";
import { Btn } from "./button.style";

const Button = ({ children, onClick }) => {
  return <Btn onClick={onclick}>{children}</Btn>;
};

export default Button;
