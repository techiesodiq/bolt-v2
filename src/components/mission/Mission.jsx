import React from "react";
import { about } from "../../data/text";
import customerReview from "../../asset/customer-review 1.svg";
import collaboration from "../../asset/collaboration (2) 1.svg";
import vector from "../../asset/Vector.svg";
import {
  BorderBox,
  FullContainer,
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
} from "./mission.style";
import { AboutContainer } from "../story/story.style";
import data from "../../data/text.json";

const { mission, vision, value } = about;
const { description } = data.about.review;

const Mission = () => {
  return (
    <AboutContainer>
      <MissionContainer>
        <MissionBox alignItems="flex-start">
          <BorderBox direction="left">
            <MissionTitle>{mission.titile}</MissionTitle>
          </BorderBox>
          {/* <MissionTitle direction="left">Our Mission</MissionTitle> */}
          <MissionDescription>{mission.description}</MissionDescription>
        </MissionBox>
      </MissionContainer>
      <FullContainer>
        <MissionBox alignItems="center" style={{ background: "#FFFEFA" }}>
          <MissionDescription>{vision.description}</MissionDescription>
          <BorderBox direction="right">
            <MissionTitle>{vision.titile}</MissionTitle>
          </BorderBox>
          {/* <MissionTitle direction="left">Our Mission</MissionTitle> */}
        </MissionBox>
      </FullContainer>
      <ValueContainer>
        <MissionTitle>{value.titile}</MissionTitle>
        <MissionDescription style={{ maxWidth: "800px" }}>
          {mission.description}
        </MissionDescription>
      </ValueContainer>

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
    </AboutContainer>
  );
};

export default Mission;
