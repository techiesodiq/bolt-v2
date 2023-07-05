import React from "react";
import data from "../../data/text.json";
import customerReview from "../../asset/customer-review 1.svg";
import collaboration from "../../asset/collaboration (2) 1.svg";
import vector from "../../asset/Vector.svg";
import respect from "../../asset/respect (2) 1.svg";
import execution from "../../asset/execution 1.svg";
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

const { mission, value, vision } = data.about.description;
const { title, description } = data.about.review;

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
            <ReviewTitle>{title}</ReviewTitle>
            <ReviewText>{description}</ReviewText>
          </ReviewTextCard>
        </ReviewCard>
        <ReviewCard>
          <ReviewImg src={collaboration} />
          <ReviewTextCard>
            <ReviewTitle>{title}</ReviewTitle>
            <ReviewText>{description}</ReviewText>
          </ReviewTextCard>
        </ReviewCard>
        <ReviewCard>
          <ReviewImg src={vector} />
          <ReviewTextCard>
            <ReviewTitle>{title}</ReviewTitle>
            <ReviewText>{description}</ReviewText>
          </ReviewTextCard>
        </ReviewCard>
        <ReviewCard>
          <ReviewImg src={respect} />
          <ReviewTextCard>
            <ReviewTitle>{title}</ReviewTitle>
            <ReviewText>{description}</ReviewText>
          </ReviewTextCard>
        </ReviewCard>
        <ReviewCard>
          <ReviewImg src={customerReview} />
          <ReviewTextCard>
            <ReviewTitle>{title}</ReviewTitle>
            <ReviewText>{description}</ReviewText>
          </ReviewTextCard>
        </ReviewCard>
      </ReviewContainer>
    </AboutContainer>
  );
};

export default Mission;
