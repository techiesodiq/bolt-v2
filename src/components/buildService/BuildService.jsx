import React from "react";
import service1 from "../../asset/service.png";
import service2 from "../../asset/service2.png";
import service3 from "../../asset/service3.png";
import data from "../../data/text.json";
import story from "../../asset/story.png";
import {
  FixedSizeBox,
  FullImgContainer,
  HomeContainer,
  HomeDescription,
  HomeTextBox,
  HomeTitle,
  MobileImgContainer,
} from "./buildService.style";
import { OfferImg } from "../serviceOffer/serviceOffer.style";
import { MobileImg } from "../story/story.style";

const { building, curb, home, installation, mdu, room } = data.service.fibre;

const BuildService = () => {
  return (
    <>
      <HomeContainer bg="#F9FAFB">
        <HomeTextBox>
          <HomeTitle>{home.title}</HomeTitle>
          <HomeDescription>{home.description}</HomeDescription>
        </HomeTextBox>
        <FullImgContainer>
          <OfferImg src={service1} />
        </FullImgContainer>
        <MobileImgContainer>
          <MobileImg src={story} />
        </MobileImgContainer>
      </HomeContainer>
      <HomeContainer>
        <FixedSizeBox>
          <FullImgContainer>
            <OfferImg src={service2} />
          </FullImgContainer>
          <MobileImgContainer>
            <MobileImg src={story} />
          </MobileImgContainer>
          <HomeTextBox style={{ maxWidth: "484px" }}>
            <HomeTitle>{building.title}</HomeTitle>
            <HomeDescription>{building.description}</HomeDescription>
          </HomeTextBox>
        </FixedSizeBox>
      </HomeContainer>
      <HomeContainer bg="#FFFFFF">
        <HomeTextBox>
          <HomeTitle>{installation.title}</HomeTitle>
          <HomeDescription>{installation.description}</HomeDescription>
        </HomeTextBox>
        <FullImgContainer>
          <OfferImg src={service3} />
        </FullImgContainer>
        <MobileImgContainer>
          <MobileImg src={story} />
        </MobileImgContainer>
      </HomeContainer>
      <HomeContainer bg="#F9FAFB">
        <FixedSizeBox>
          <FullImgContainer>
            <OfferImg src={service1} />
          </FullImgContainer>
          <MobileImgContainer>
            <MobileImg src={story} />
          </MobileImgContainer>
          <HomeTextBox style={{ maxWidth: "484px" }}>
            <HomeTitle>{mdu.title}</HomeTitle>
            <HomeDescription>{mdu.description}</HomeDescription>
          </HomeTextBox>
        </FixedSizeBox>
      </HomeContainer>
      <HomeContainer bg="#FFFFFF">
        <HomeTextBox>
          <HomeTitle>{curb.title}</HomeTitle>
          <HomeDescription>{curb.description}</HomeDescription>
        </HomeTextBox>
        <FullImgContainer>
          <OfferImg src={service3} />
        </FullImgContainer>
        <MobileImgContainer>
          <MobileImg src={story} />
        </MobileImgContainer>
      </HomeContainer>
      <HomeContainer bg="#F9FAFB">
        <FixedSizeBox>
          <FullImgContainer>
            <OfferImg src={service1} />
          </FullImgContainer>
          <MobileImgContainer>
            <MobileImg src={story} />
          </MobileImgContainer>
          <HomeTextBox style={{ maxWidth: "484px" }}>
            <HomeTitle>{room.title}</HomeTitle>
            <HomeDescription>{room.description}</HomeDescription>
          </HomeTextBox>
        </FixedSizeBox>
      </HomeContainer>
    </>
  );
};

export default BuildService;
