import React from "react";
import { PageContainer } from "../components/style/theme";
import ContactTouch from "../components/contactTouch/ContactTouch";
import contactImg from "../asset/contactImg.png";
import {
  ContactContainer,
  ContactImg,
  ImgContainer,
} from "../components/contactTouch/contactTouch.style";
import ContactInfo from "../components/contactInfo/ContactInfo";

const Contact = () => {
  return (
    <PageContainer>
      <ContactContainer>
        <ContactTouch />
        <ImgContainer>
          <ContactImg src={contactImg} />
        </ImgContainer>
        <ContactInfo />
      </ContactContainer>
    </PageContainer>
  );
};

export default Contact;
