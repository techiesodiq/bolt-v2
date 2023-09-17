import React from "react";
import { Container } from "./requirement.style";
import { technician } from "../../data/text";

const Requirement = () => {
  return (
    <Container>
      <div className="left-div">
        <h2 className="title">{technician.title}</h2>
        <div className="title-wrapper">
          {technician.titleOptions.map((option, index) => (
            <h4 key={index}>
              {option.title}: <span> {option.description}</span>{" "}
            </h4>
          ))}
        </div>
      </div>
      <div className="right-div"></div>
    </Container>
  );
};

export default Requirement;
