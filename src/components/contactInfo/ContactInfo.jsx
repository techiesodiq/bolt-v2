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

const { address, email, phone } = data.contact;

const ContactInfo = () => {
  return (
    <InfoContainer>
      <InfoBox>
        <InfoImg src={map} />
        <InfoTitle>{address.title}</InfoTitle>
        <InfoAddress>{address.officeAddress}</InfoAddress>
        <InfoDescription>{address.description}</InfoDescription>
      </InfoBox>
      <InfoBox>
        <InfoImg src={mail} />
        <InfoTitle>{email.title}</InfoTitle>
        <InfoAddress>{email.emailAddress}</InfoAddress>
        <InfoDescription>{email.description}</InfoDescription>
      </InfoBox>
      <InfoBox>
        <InfoImg src={mobile} />
        <InfoTitle>{phone.title}</InfoTitle>
        <InfoAddress>{phone.phoneNumber}</InfoAddress>
        <InfoDescription>{phone.description}</InfoDescription>
      </InfoBox>
    </InfoContainer>
  );
};

export default ContactInfo;
