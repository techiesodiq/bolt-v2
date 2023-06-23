import React from "react";
import {
  Box,
  RightBox,
  RightContainer,
  TouchBox,
  TouchContainer,
  TouchPara,
  TouchTitle,
} from "./touch.style";
import Button from "../../ui/button/Button";
import map from "../../asset/map-pin.svg";
import { Paragraph, Title } from "../style/theme";
import data from "../../data/text.json";
import mail from "../../asset/mail.svg";
import mobile from "../../asset/phone.svg";

const { title, subtitle, header, address, email, phone } = data.home.contact;

const Touch = () => {
  return (
    <TouchContainer>
      <TouchBox>
        <Box mmb="10px">
          <TouchPara color="#013EBD" fw="500" fs="16px" mfs="16px" lh="16px">
            {title}
          </TouchPara>
        </Box>
        <Box>
          <TouchTitle>{header}</TouchTitle>
        </Box>
        <Box mb="10px" mmb="32px">
          <TouchPara>{subtitle}</TouchPara>
        </Box>
        <Box display="none">
          <Button>Contact Us</Button>
        </Box>
      </TouchBox>
      <RightContainer>
        <RightBox>
          <TouchBox>
            <img src={map} alt="map" style={{ marginTop: "6px" }} />
          </TouchBox>
          <TouchBox>
            <Title fs="20px" lh="30px" fw="600" mfw="600" mfs="18px" mlh="30px">
              {address.title}
            </Title>
            <Paragraph fs="16px" mfs="15px" lh="24px">
              {address.officeAddress}
            </Paragraph>
          </TouchBox>
        </RightBox>
        <RightBox>
          <TouchBox>
            <img src={mail} alt="map" style={{ marginTop: "6px" }} />
          </TouchBox>
          <TouchBox>
            <Title fs="20px" lh="30px" fw="600" mfw="600" mfs="18px" mlh="30px">
              {email.title}
            </Title>
            <Paragraph fs="16px" mfs="15px" lh="24px">
              {email.emailAddress}
            </Paragraph>
          </TouchBox>
        </RightBox>
        <RightBox>
          <TouchBox>
            <img src={mobile} alt="map" style={{ marginTop: "6px" }} />
          </TouchBox>
          <TouchBox>
            <Title fs="20px" lh="30px" fw="600" mfw="600" mfs="18px" mlh="30px">
              {phone.title}
            </Title>
            <Paragraph fs="16px" mfs="15px" lh="24px">
              {phone.phoneNumber}
            </Paragraph>
          </TouchBox>
        </RightBox>
      </RightContainer>
    </TouchContainer>
  );
};

export default Touch;
