import React from "react";
import postConnection from "../../asset/postconnection.png";
import explanation from "../../asset/explaination.png";
import story from "../../asset/story.png";
import {
  FullImgContainer,
  OfferImg,
  ServiceBox,
  ServiceCard,
  ServiceDescription,
  ServiceTitle,
  ServiceTitleBox,
} from "./serviceOffer.style";
import data from "../../data/text.json";
import { MobileImg } from "../story/story.style";

const { description, title } = data.service.offer;

const ServiceOffer = () => {
  return (
    <>
      <ServiceBox>
        <ServiceCard>
          <ServiceTitleBox>
            <ServiceTitle>{title}</ServiceTitle>
            <ServiceDescription>{description}</ServiceDescription>
          </ServiceTitleBox>
        </ServiceCard>
        <ServiceCard>
          <FullImgContainer style={{ paddingBottom: "124px" }}>
            <OfferImg src={postConnection} style={{ paddingTop: "78px" }} />
            <OfferImg
              src={explanation}
              style={{
                paddingBottom: "62px",
                position: "relative",
                bottom: "-124px",
                maxHeight: "100%",
              }}
            />
          </FullImgContainer>
        </ServiceCard>
        <div
          style={{
            display: "flex",
            gap: "32px",
            marginTop: "32px",
            flexDirection: "column",
          }}
        >
          <MobileImg src={story} />
          <MobileImg src={story} />
        </div>
      </ServiceBox>
    </>
  );
};

export default ServiceOffer;
