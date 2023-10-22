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
import map from "../../asset/map-pin.svg";
import { Paragraph, Title } from "../style/theme";
import data from "../../data/text.json";
import mail from "../../asset/mail.svg";
import mobile from "../../asset/phone.svg";
import { motion } from "framer-motion";
import { Button } from "../hero/hero.style";

const { title, subtitle, header, address, email, phone } = data.home.contact;

const Touch = () => {
  return (
    <TouchContainer
      layout
      as={motion.div}
      initial={{ y: "100%", opacity: 0 }}
      whileInView={{ y: 0, opacity: 1, transition: { duration: 0.8 } }}
      viewport={{ once: true }}
    >
      <TouchBox
        as={motion.div}
        intial={{ x: 200, opacity: 0 }}
        whileInView={{
          x: 0,
          opacity: 1,
          transition: { delay: 1, duration: 0.8 },
        }}
        viewport={{ once: true }}
      >
        <Box mmb="10px">
          <TouchPara color="#013EBD" fw="500" fs="16px" mfs="16px" lh="16px">
            {title}
          </TouchPara>
        </Box>
        <Box>
          <TouchTitle fs="36px" style={{ fontFamily: "ClashRegular" }}>
            {header}
          </TouchTitle>
        </Box>
        <Box mb="10px" mmb="32px">
          <TouchPara color="#013EBD">{subtitle}</TouchPara>
        </Box>
        <Box display="none">
          <Button to="/contact">Contact Us</Button>
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
