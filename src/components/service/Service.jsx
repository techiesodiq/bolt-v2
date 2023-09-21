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
import { motion } from "framer-motion";

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
          as={motion.h2}
          initial={{ x: "-100%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
        >
          We offer the best{" "}
          <span style={{ color: "#013EBD" }}>fibre optic</span> solutions
        </Title>
        <Box mt="20px" style={{ zIndex: 1 }}>
          <Paragraph
            as={motion.p}
            initial={{ y: "-100%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { duration: 2 } }}
            viewport={{ once: true }}
          >
            {subtitle}
          </Paragraph>
        </Box>
      </HeaderWrapper>
      <CardWrapper
        as={motion.ul}
        whileInView={{ transition: { staggerChildren: 0.5, delay: 1 } }}
      >
        {solutions.map((solution, index) => (
          <ServiceCard
            as={motion.div}
            initial={{ opacity: 0, scale: 0.3 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: { staggerChildren: 1, duration: 1 },
            }}
            viewport={{ once: true }}
            key={index}
          >
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
