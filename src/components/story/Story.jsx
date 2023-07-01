import React from "react";
import map from "../../asset/worldMap.png";
import story from "../../asset/story.png";
import {
  AboutBox,
  AboutContainer,
  AboutImg,
  CenterBox,
  CenterDetails,
  CenterHeader,
  CenterTitle,
  MobileAbout,
  MobileContainer,
  MobileDescription,
  MobileImg,
  MobileTitle,
} from "./story.style";
import data from "../../data/text.json";

const {
  description,
  header,
  title,
  story: { description1, description2, title: mobile },
} = data.about.hero;

const Story = () => {
  return (
    <AboutContainer>
      <AboutBox>
        <CenterBox gap="12px" direction="column">
          <CenterTitle>{title}</CenterTitle>
          <CenterHeader>{header}</CenterHeader>
        </CenterBox>
        <CenterBox>
          <CenterDetails>{description}</CenterDetails>
        </CenterBox>
      </AboutBox>
      <MobileAbout>
        <MobileTitle>{mobile}</MobileTitle>
        <div>
          <MobileDescription>{description1}</MobileDescription>
          <MobileDescription>{description2}</MobileDescription>
        </div>
      </MobileAbout>
      <AboutImg src={map} alt="world map" />
      <MobileContainer>
        <MobileImg src={story} alt="Connection Box" />
      </MobileContainer>
    </AboutContainer>
  );
};

export default Story;
