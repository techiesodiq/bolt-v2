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
import Form from "../components/form/Form";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <PageContainer>
      <ContactContainer>
        <ContactTouch />
        <Form />
        <ImgContainer>
          <ContactImg
            src={contactImg}
            as={motion.img}
            initial={{ y: -100, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { duration: 1 },
            }}
            viewport={{ once: true }}
          />
        </ImgContainer>
        <ContactInfo />
      </ContactContainer>
    </PageContainer>
  );
};

export default Contact;
