import React from "react";

import { services } from "../../data/text";
import {
  CardLink,
  CardParagraph,
  CardTitle,
  ServiceBox,
  SolutionBox,
  SolutionCard,
  Title,
} from "./serviceOffer.style";
import { motion } from "framer-motion";

const { title, options } = services;

const ServiceOffer = () => {
  return (
    <ServiceBox>
      <Title
        as={motion.h2}
        initial={{ y: "-150%", opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { duration: 1 } }}
      >
        {title}
      </Title>
      <SolutionBox>
        {options.map((option, index) => (
          <SolutionCard
            key={index}
            as={motion.div}
            initial={{ x: "-100%", opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: { duration: 0.8, delay: index % 2 === 0 ? 0 : 1 },
            }}
            viewport={{ once: true }}
          >
            <div>
              <CardTitle>{option.title}</CardTitle>
              <CardParagraph>{option.description}</CardParagraph>
            </div>
            <CardLink>{option.button}</CardLink>
          </SolutionCard>
        ))}
      </SolutionBox>
    </ServiceBox>
  );
};

export default ServiceOffer;
