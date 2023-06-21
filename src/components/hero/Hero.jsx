import React from "react";
import hero from "../../asset/hero.png";
import {
  HeroContainer,
  HeroImage,
  LeftHeroBox,
  LeftHeroHeader,
  LeftHeroPara,
  RightHeroBox,
} from "./hero.style";
import heroText from "../../data/text.json";
import Button from "../../ui/button/Button";

const { title, subtitle } = heroText.home.hero;

const Hero = () => {
  return (
    <HeroContainer>
      <LeftHeroBox>
        <LeftHeroHeader>{title}</LeftHeroHeader>
        <LeftHeroPara>{subtitle}</LeftHeroPara>
        <Button>Contact Us</Button>
      </LeftHeroBox>
      <RightHeroBox>
        <HeroImage src={hero} />
      </RightHeroBox>
    </HeroContainer>
  );
};

export default Hero;
