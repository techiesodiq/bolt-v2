import React from "react";
import { PageContainer } from "../components/style/theme";
import Story from "../components/story/Story";
import Mission from "../components/mission/Mission";

const About = () => {
  return (
    <PageContainer>
      <Story />
      <Mission />
    </PageContainer>
  );
};

export default About;
