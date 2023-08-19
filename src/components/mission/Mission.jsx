import React from "react";
import { about } from "../../data/text";
import customerReview from "../../asset/customer-review 1.svg";
import collaboration from "../../asset/collaboration (2) 1.svg";
import vector from "../../asset/Vector.svg";
import {
  BorderBottom,
  Image,
  ImgWrapper,
  MarginContainer,
  MissionBox,
  MissionContainer,
  MissionDescription,
  MissionTitle,
  ReviewCard,
  ReviewContainer,
  ReviewImg,
  ReviewText,
  ReviewTextCard,
  ReviewTitle,
  ValueContainer,
  ValueDescription,
  VisionContainer,
} from "./mission.style";
import { AboutContainer } from "../story/story.style";
import data from "../../data/text.json";

const { mission, vision, value } = about;
const { description } = data.about.review;

const Mission = () => {
  return (
    <AboutContainer>
      <MarginContainer>
        <MissionContainer>
          <MissionBox alignItems="flex-start">
            <MissionTitle>{mission.title}</MissionTitle>
            <BorderBottom />
            <MissionDescription>{mission.description}</MissionDescription>
          </MissionBox>
          <ImgWrapper>
            <Image
              src={mission.studyImg}
              style={{ position: "relative", bottom: -100 }}
            />
            <Image src={mission.shakeImg} />
          </ImgWrapper>
        </MissionContainer>
        <VisionContainer>
          <ImgWrapper style={{ justifyContent: "start" }}>
            <Image src={mission.studyImg} />
            <Image
              src={mission.shakeImg}
              style={{ position: "relative", top: -100 }}
            />
          </ImgWrapper>
          <MissionBox
            alignItems="flex-start"
            style={{ justifySelf: "end", marginTop: "200px" }}
          >
            <MissionTitle>{vision.title}</MissionTitle>
            <BorderBottom />
            <MissionDescription>{vision.description}</MissionDescription>
          </MissionBox>
        </VisionContainer>
        <ValueContainer>
          <MissionTitle>{value.title}</MissionTitle>
          <ValueDescription>{value.description}</ValueDescription>
        </ValueContainer>
        {/* break */}
        <ReviewContainer>
          <ReviewCard>
            <ReviewImg src={customerReview} />
            <ReviewTextCard>
              <ReviewTitle>Peole</ReviewTitle>
              <ReviewText>{description}</ReviewText>
            </ReviewTextCard>
          </ReviewCard>
          <ReviewCard>
            <ReviewImg src={collaboration} />
            <ReviewTextCard>
              <ReviewTitle>Safety</ReviewTitle>
              <ReviewText>{description}</ReviewText>
            </ReviewTextCard>
          </ReviewCard>
          <ReviewCard>
            <ReviewImg src={vector} />
            <ReviewTextCard>
              <ReviewTitle>Innovation</ReviewTitle>
              <ReviewText>{description}</ReviewText>
            </ReviewTextCard>
          </ReviewCard>
        </ReviewContainer>
      </MarginContainer>
    </AboutContainer>
  );
};

export default Mission;
