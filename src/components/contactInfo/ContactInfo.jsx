import React from "react";
import {
  InfoAddress,
  InfoBox,
  InfoContainer,
  InfoDescription,
  InfoImg,
  InfoTitle,
} from "./contactInfo.style";
import data from "../../data/text.json";
import mail from "../../asset/mail.svg";
import mobile from "../../asset/phone.svg";
import map from "../../asset/map-pin.svg";
import { motion } from "framer-motion";

const { address, email, phone } = data.contact;

const ContactInfo = () => {
  return (
    <InfoContainer>
      <InfoBox
        as={motion.div}
        initial={{ x: "100%", opacity: 0 }}
        whileInView={{
          x: 0,
          opacity: 1,
          transition: { duration: 1 },
        }}
        viewport={{ once: true }}
      >
        <InfoImg src={map} />
        <InfoTitle>{address.title}</InfoTitle>
        <InfoAddress>{address.officeAddress}</InfoAddress>
      </InfoBox>
      <InfoBox
        as={motion.div}
        initial={{ x: "100%", opacity: 0 }}
        whileInView={{
          x: 0,
          opacity: 1,
          transition: { duration: 1, delay: 0.7 },
        }}
        viewport={{ once: true }}
      >
        <InfoImg src={mail} />
        <InfoTitle>{email.title}</InfoTitle>
        <InfoAddress>{email.emailAddress}</InfoAddress>
      </InfoBox>
      <InfoBox
        as={motion.div}
        initial={{ x: "100%", opacity: 0 }}
        whileInView={{
          x: 0,
          opacity: 1,
          transition: { duration: 1, delay: 1.4 },
        }}
        viewport={{ once: true }}
      >
        <InfoImg src={mobile} />
        <InfoTitle>{phone.title}</InfoTitle>
        <InfoAddress>{phone.phoneNumber}</InfoAddress>
      </InfoBox>
    </InfoContainer>
  );
};

export default ContactInfo;
