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

const { image1, image2, options, title } = home.safety;
const HomeSafety = () => {
  return (
    <SafetyContainer>
      <SafetyTitle>{title}</SafetyTitle>
      <SafetyWrapper>
        <LeftBox>
          {options.map((safe, index) => (
            <TextWrapper key={index}>
              <SafetySubTitle>{safe.title}</SafetySubTitle>
              <SafetyDescription>{safe.description}</SafetyDescription>
            </TextWrapper>
          ))}
        </LeftBox>
        <RightBox>
          <SafetyKitImg src={image1} alt="safetykit" />
          <ImgGrid>
            <SafetyKitImg src={image2} alt="safetykit" />
            <SafetyKitImg src={image2} alt="safetykit" />
          </ImgGrid>
        </RightBox>
      </SafetyWrapper>
    </SafetyContainer>
  );
};

export default HomeSafety;
