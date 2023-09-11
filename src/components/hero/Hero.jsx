import React from "react";
import {
  HeroContainer,
  HeroImage,
  LeftHeroBox,
  LeftHeroHeader,
  LeftHeroPara,
  RightHeroBox,
} from "./hero.style";
import { home } from "../../data/text";
import Button from "../../ui/button/Button";

const { description, button, image } = home.hero;

const Hero = () => {
  return (
    <HeroContainer>
      <LeftHeroBox>
        <LeftHeroHeader>
          Transform your <span style={{ color: "#013EBD" }}>Business</span>{" "}
          operations with the best{" "}
          <span style={{ color: "#013EBD" }}>Fiber Solution</span>
        </LeftHeroHeader>
        <LeftHeroPara>{description}</LeftHeroPara>
        <Button>{button}</Button>
      </LeftHeroBox>
      <RightHeroBox>
        <HeroImage src={image} />
      </RightHeroBox>
    </HeroContainer>
  );
};

export default Hero;
