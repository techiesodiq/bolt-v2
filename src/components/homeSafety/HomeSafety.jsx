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

const { img1, img2, safetyStatus, title } = home.safety;
const HomeSafety = () => {
  return (
    <SafetyContainer>
      <SafetyTitle>{title}</SafetyTitle>
      <SafetyWrapper>
        <LeftBox>
          {safetyStatus.map((safe, index) => (
            <TextWrapper key={index}>
              <SafetySubTitle>{safe.title}</SafetySubTitle>
              <SafetyDescription>{safe.description}</SafetyDescription>
            </TextWrapper>
          ))}
        </LeftBox>
        <RightBox>
          <SafetyKitImg src={img1} alt="safetykit" />
          <ImgGrid>
            <SafetyKitImg src={img2} alt="safetykit" />
            <SafetyKitImg src={img2} alt="safetykit" />
          </ImgGrid>
        </RightBox>
      </SafetyWrapper>
    </SafetyContainer>
  );
};

export default HomeSafety;
