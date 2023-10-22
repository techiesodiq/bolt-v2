import React from "react";
import {
  ImgGrid,
  LeftBox,
  RightBox,
  SafetyContainer,
  SafetyDescription,
  SafetyKitImg,
  SafetySubTitle,
  SafetyTitle,
  SafetyWrapper,
  TextWrapper,
} from "./homesafety.style";

import { home } from "../../data/text.js";
import { motion } from "framer-motion";

const { image1, image2, image3, options, title } = home.safety;
const HomeSafety = () => {
  return (
    <SafetyContainer>
      <SafetyTitle
        as={motion.h2}
        initial={{ y: "-100%", opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: { duration: 1 },
        }}
        viewport={{ once: true }}
      >
        {title}
      </SafetyTitle>
      <SafetyWrapper>
        <LeftBox
          as={motion.div}
          animate={{ transition: { staggerChildren: 0.05 } }}
        >
          {options.map((safe, index) => (
            <TextWrapper
              as={motion.div}
              initial={{ x: "-100%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1, transition: { duration: 1 } }}
              key={index}
              viewport={{ once: true }}
            >
              <SafetySubTitle>{safe.title}</SafetySubTitle>
              <SafetyDescription>{safe.description}</SafetyDescription>
            </TextWrapper>
          ))}
        </LeftBox>
        <RightBox>
          <SafetyKitImg
            as={motion.img}
            initial={{ x: "-100%", opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: { delay: 1, duration: 1 },
            }}
            viewport={{ once: true }}
            src={image1}
            alt="safetykit"
          />
          <ImgGrid
            as={motion.div}
            initial={{ y: "-200", opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { delay: 0.5, duration: 1.5 },
            }}
            viewport={{ once: true }}
          >
            <SafetyKitImg src={image2} alt="safetykit" />
            <SafetyKitImg src={image3} alt="safetykit" />
          </ImgGrid>
        </RightBox>
      </SafetyWrapper>
    </SafetyContainer>
  );
};

export default HomeSafety;
