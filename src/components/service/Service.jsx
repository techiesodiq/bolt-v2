import React from "react";
import {
  CardTitle,
  CardWrapper,
  HeaderWrapper,
  ServiceCard,
  ServiceContainer,
  ServiceTextWrapper,
  SeviceImg,
} from "./service.style";
import { Box, Paragraph, Title } from "../style/theme";
import { home } from "../../data/text.js";
import ServiceParagraph from "./ServiceParagraph";

const { subtitle, solutions } = home.service;

const Service = () => {
  return (
    <ServiceContainer>
      {/* <ServiceBg>
        <ImageBg src={background} />
      </ServiceBg> */}
      <HeaderWrapper style={{ zIndex: 1 }}>
        <Title
          lh="44px"
          fs="36px"
          mlh="28px"
          style={{ fontFamily: "ClashSemiBold" }}
        >
          We offer the best{" "}
          <span style={{ color: "#013EBD" }}>fibre optic</span> solutions
        </Title>
        <Box mt="20px" style={{ zIndex: 1 }}>
          <Paragraph>{subtitle}</Paragraph>
        </Box>
      </HeaderWrapper>
      <CardWrapper>
        {solutions.map((solution, index) => (
          <ServiceCard key={index}>
            <SeviceImg src={solution.image} alt="stack of blocks" />
            <ServiceTextWrapper>
              <CardTitle>{solution.title}</CardTitle>
              <ServiceParagraph paragraph={solution.description} />
            </ServiceTextWrapper>
          </ServiceCard>
        ))}
      </CardWrapper>
    </ServiceContainer>
  );
};

export default Service;
