import React from "react";
import data from "../../data/text.json";
import {
  TitleBox,
  TouchContainer,
  TouchDescription,
  TouchHeading,
  TouchTitle,
} from "./contactTouch.style";

const { description, subtitle, title } = data.contact.contact;

const ContactTouch = () => {
  return (
    <TouchContainer>
      <TouchHeading>{title}</TouchHeading>
      <TitleBox>
        <TouchTitle>{subtitle}</TouchTitle>
        <TouchDescription>{description}</TouchDescription>
      </TitleBox>
    </TouchContainer>
  );
};

export default ContactTouch;
