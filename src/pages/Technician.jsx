import React from "react";
import { Container } from "../components/style/theme";
import Requirement from "../components/requirement/Requirement";
import { FullContainer } from "../components/requirement/requirement.style";
import { technician } from "../data/text";

const Technician = () => {
  return (
    <Container>
      <Requirement />
      <FullContainer>
        <p>{technician.right}</p>
      </FullContainer>
    </Container>
  );
};

export default Technician;
