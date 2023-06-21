import React from "react";
import {
  Box,
  TouchBox,
  TouchContainer,
  TouchPara,
  TouchTitle,
} from "./touch.style";
import Button from "../../ui/button/Button";

const Touch = () => {
  return (
    <TouchContainer>
      <TouchBox>
        <Box mmb="10px">
          <TouchPara color="#013EBD" fw="500" fs="16px" mfs="16px" lh="16px">
            Contact us
          </TouchPara>
        </Box>
        <Box>
          <TouchTitle>Get In touch </TouchTitle>
        </Box>
        <Box mb="10px" mmb="32px">
          <TouchPara>
            we would love to hear from you. Please fill this form
          </TouchPara>
        </Box>
        <Box display="none">
          <Button>Contact Us</Button>
        </Box>
      </TouchBox>
      <TouchBox></TouchBox>
    </TouchContainer>
  );
};

export default Touch;
