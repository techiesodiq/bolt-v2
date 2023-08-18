import React from "react";
// import map from "../../asset/worldMap.png";
// import story from "../../asset/story.png";
import {
  AboutBox,
  AboutContainer,
  Paragraph,
  ParagraphBox,
  Title,
} from "./story.style";
import { about } from "../../data/text";

const { paragraph, header } = about;

const brighter = header.split("brighter");

const Story = () => {
  return (
    <AboutContainer>
      <AboutBox>
        <Title>
          {brighter[0]} <span style={{ color: "#013EBD" }}>brighter</span>{" "}
          {brighter[1]}
        </Title>
        <ParagraphBox>
          <Paragraph>{paragraph}</Paragraph>
        </ParagraphBox>
      </AboutBox>
      {/* <MobileAbout>
        <MobileTitle>{mobile}</MobileTitle>
        <div>
          <MobileDescription>{description1}</MobileDescription>
          <MobileDescription>{description2}</MobileDescription>
        </div>
      </MobileAbout> */}
    </AboutContainer>
  );
};

export default Story;
