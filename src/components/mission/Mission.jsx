import React from "react";
import data from "../../data/text.json";
import {
  BorderBox,
  FullContainer,
  MissionBox,
  MissionContainer,
  MissionDescription,
  MissionTitle,
} from "./mission.style";
import { AboutContainer } from "../story/story.style";

const { mission, value, vision } = data.about.description;

const Mission = () => {
  return (
    <AboutContainer>
      <MissionContainer>
        <MissionBox alignItems="flex-start">
          <BorderBox direction="left">
            <MissionTitle direction="left">{mission.titile}</MissionTitle>
          </BorderBox>
          {/* <MissionTitle direction="left">Our Mission</MissionTitle> */}
          <MissionDescription>{mission.description}</MissionDescription>
        </MissionBox>
      </MissionContainer>
      <FullContainer>
        <MissionBox alignItems="center" style={{ background: "#FFFEFA" }}>
          <MissionDescription>{vision.description}</MissionDescription>
          <BorderBox direction="right">
            <MissionTitle direction="left">{vision.titile}</MissionTitle>
          </BorderBox>
          {/* <MissionTitle direction="left">Our Mission</MissionTitle> */}
        </MissionBox>
      </FullContainer>
    </AboutContainer>
  );
};

export default Mission;
