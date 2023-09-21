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
import { AnimatePresence, motion } from "framer-motion";

const { description, button, image } = home.hero;

const Hero = () => {
  return (
    <HeroContainer
      layout
      as={motion.div}
      initial={{ y: "-150%" }}
      animate={{ y: 0 }}
      transition={{ delay: 2, duration: 1 }}
    >
      <AnimatePresence>
        <LeftHeroBox
          as={motion.div}
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: "0%", opacity: 1 }}
          transition={{ delay: 3, duration: 2 }}
        >
          <AnimatePresence>
            <LeftHeroHeader
              as={motion.h1}
              initial={{ y: "-100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 3 }}
            >
              Transform your <span style={{ color: "#013EBD" }}>Business</span>{" "}
              operations with the best{" "}
              <span style={{ color: "#013EBD" }}>Fiber Solution</span>
            </LeftHeroHeader>
          </AnimatePresence>
          <LeftHeroPara>{description}</LeftHeroPara>
          <Button>{button}</Button>
        </LeftHeroBox>
      </AnimatePresence>
      <RightHeroBox
        as={motion.div}
        initial={{ y: "-150%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 4, duration: 1 }}
      >
        <HeroImage src={image} />
      </RightHeroBox>
    </HeroContainer>
  );
};

export default Hero;
