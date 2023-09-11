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

const { title, options } = services;

const ServiceOffer = () => {
  return (
    <ServiceBox>
      <Title>{title}</Title>
      <SolutionBox>
        {options.map((option, index) => (
          <SolutionCard key={index}>
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
