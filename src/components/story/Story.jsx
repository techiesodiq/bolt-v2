import React from "react";
import { motion } from "framer-motion";
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
        <Title
          as={motion.h2}
          initial={{ y: "-150%", opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { duration: 1 } }}
        >
          {brighter[0]} <span style={{ color: "#013EBD" }}>brighter</span>{" "}
          {brighter[1]}
        </Title>
        <ParagraphBox
          as={motion.div}
          initial={{ y: "-150%", backgroundColor: "#363131" }}
          animate={{
            y: 0,
            backgroundColor: "#fffdf6",
            transition: { duration: 1 },
          }}
        >
          <Paragraph
            as={motion.div}
            initial={{ x: "-120%", opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: { duration: 1 } }}
          >
            {paragraph}
          </Paragraph>
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
