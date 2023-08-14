import React from "react";
import { CardParagraph } from "./service.style";

const ServiceParagraph = ({ paragraph }) => {
  const sorted = paragraph.replace("FTTH", "").replace("FTTR", "").trim();
  const filter = paragraph.split(" ");
  return (
    <>
      {paragraph.startsWith("FTTH") || paragraph.startsWith("FTTR") ? (
        <CardParagraph>
          <span style={{ color: "#013EBD", fontWeight: 500 }}>
            {filter[0]}{" "}
          </span>{" "}
          {sorted}
        </CardParagraph>
      ) : (
        <CardParagraph>{paragraph}</CardParagraph>
      )}
    </>
  );
};

export default ServiceParagraph;
