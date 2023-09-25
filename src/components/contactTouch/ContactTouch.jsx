import React from "react";
import data from "../../data/text.json";
import {
  TitleBox,
  TouchContainer,
  TouchDescription,
  TouchHeading,
  TouchTitle,
} from "./contactTouch.style";
import { motion } from "framer-motion";

const { description, subtitle, title } = data.contact.contact;

const ContactTouch = () => {
  return (
    <TouchContainer>
      <TouchHeading
        as={motion.p}
        initial={{ y: "100%", opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: { duration: 1 },
        }}
        viewport={{ once: true }}
      >
        {title}
      </TouchHeading>
      <TitleBox>
        <TouchTitle
          as={motion.h2}
          initial={{ y: "-100%", opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { duration: 1 },
          }}
          viewport={{ once: true }}
        >
          {subtitle}
        </TouchTitle>
        <TouchDescription
          as={motion.p}
          initial={{ y: "100%", opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { duration: 1 },
          }}
          viewport={{ once: true }}
        >
          {description}
        </TouchDescription>
      </TitleBox>
    </TouchContainer>
  );
};

export default ContactTouch;
