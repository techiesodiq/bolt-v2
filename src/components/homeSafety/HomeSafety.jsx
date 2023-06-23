import React from "react";
import { SafetyContainer } from "./homesafety.style";
import { Box, FlexBox, Paragraph, Title } from "../style/theme";
import data from "../../data/text.json";

const { title, subtitle, details1, details2, details3 } = data.home.safety;

const HomeSafety = () => {
  return (
    <SafetyContainer>
      <Box>
        <Box
          alignSelf="center"
          gap="20px"
          mb="44px"
          mmb="46px"
          width="930px"
          mp="0 16px"
        >
          <Title
            fs="36px"
            lh="44px"
            mfs="24px"
            mlh="28px"
            // style={{ textAlign: "center" }}
          >
            {title}
          </Title>
          <Paragraph
            fs="20px"
            lh="170%"
            mlh="30px"
            mfs="16px"
            // style={{ textAlign: "center" }}
          >
            {subtitle}
          </Paragraph>
        </Box>
        <FlexBox gap="101px">
          <Box
            br="16px"
            mbr="8px"
            gap="16px"
            pt="32px"
            pb="32px"
            mp="0 16px"
            mmb="46px"
          >
            <Title fw="600" fs="24px" lh="30px" mfs="20px" mlh="24px">
              {details1.header}
            </Title>
            <Paragraph fs="16px" lh="170%" mfs="16px" mlh="170%">
              {details1.description}
            </Paragraph>
          </Box>
          <Box
            br="16px"
            mbr="8px"
            gap="16px"
            pr="60px"
            pl="60px"
            pt="32px"
            pb="32px"
            mp="32px 16px"
            mmb="46px"
            style={{ background: "#013EBD" }}
          >
            <Title
              fw="600"
              fs="24px"
              lh="30px"
              mfs="20px"
              mlh="24px"
              color="#fff"
            >
              {details1.header}
            </Title>
            <Paragraph fs="16px" lh="170%" mfs="16px" mlh="170%" color="#fff">
              {details1.description}
            </Paragraph>
          </Box>
          <Box br="16px" mbr="8px" gap="16px" pt="32px" pb="32px" mp="0 16px">
            <Title fw="600" fs="24px" lh="30px" mfs="20px" mlh="24px">
              {details1.header}
            </Title>
            <Paragraph fs="16px" lh="170%" mfs="16px" mlh="170%">
              {details1.description}
            </Paragraph>
          </Box>
        </FlexBox>
      </Box>
    </SafetyContainer>
  );
};

export default HomeSafety;
