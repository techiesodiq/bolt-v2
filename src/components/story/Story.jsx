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
  Paragraph,
  ParagraphBox,
  Title,
} from "./story.style";
import { about } from "../../data/text";

const { decription, title } = about;

const brighter = title.split("brighter");

const Story = () => {
  return (
    <AboutContainer>
      <AboutBox>
        <Title>
          {brighter[0]} <span style={{ color: "#013EBD" }}>brighter</span>{" "}
          {brighter[1]}
        </Title>
        <ParagraphBox>
          <Paragraph>{decription}</Paragraph>
        </ParagraphBox>
      </AboutBox>
      {/* <MobileAbout>
        <MobileTitle>{mobile}</MobileTitle>
        <div>
          <MobileDescription>{description1}</MobileDescription>
          <MobileDescription>{description2}</MobileDescription>
        </div>
      </MobileAbout> */}
      <AboutImg src={map} alt="world map" />
      <MobileContainer>
        <MobileImg src={story} alt="Connection Box" />
      </MobileContainer>
    </AboutContainer>
  );
};

export default Story;
