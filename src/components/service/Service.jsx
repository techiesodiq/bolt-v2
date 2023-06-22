import React from "react";
import {
  Card,
  CardContent,
  MediaImage,
  ServiceContainer,
  SeviceImg,
} from "./service.style";
import { Box, FlexBox, Paragraph, Title } from "../style/theme";
import data from "../../data/text.json";
import serviceImg from "../../asset/service1.png";
import mobileSevice from "../../asset/serviceMobile.png";

const {
  title,
  subtitle,
  solutions: { solution1, solution2, solution3, solution4 },
} = data.home.service;

const Service = () => {
  return (
    <ServiceContainer>
      <Box width="930px">
        <Title lh="44px" fs="36px" mlh="28px">
          {title}
        </Title>
        <Box mt="20px">
          <Paragraph>{subtitle}</Paragraph>
        </Box>
      </Box>
      <FlexBox gap>
        <Box alignSelf="flex-start">
          <FlexBox gap={"3%"}>
            <Card>
              <CardContent>
                <Box mb="8px" mmb="8px">
                  <Title fs="20px" lh="32px" mlh="22px" mfs="20px">
                    {solution1.header}
                  </Title>
                </Box>
                <Paragraph fs="16px" lh="27px" mlh="27px" mfs="16px">
                  {solution1.description}
                </Paragraph>
                <MediaImage src={serviceImg} />
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <Box mb="8px" mmb="8px">
                  <Title fs="20px" lh="32px" mlh="22px" mfs="20px">
                    {solution2.header}
                  </Title>
                </Box>
                <Paragraph fs="16px" lh="27px" mlh="27px" mfs="16px">
                  {solution2.description}
                </Paragraph>
                <MediaImage src={mobileSevice} />
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <Box mb="8px" mmb="8px">
                  <Title fs="20px" lh="32px" mlh="22px" mfs="20px">
                    {solution3.header}
                  </Title>
                </Box>
                <Paragraph fs="16px" lh="27px" mlh="27px" mfs="16px">
                  {solution3.description}
                </Paragraph>
                <MediaImage src={mobileSevice} />
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <Box mb="8px" mmb="8px">
                  <Title fs="20px" lh="32px" mlh="22px" mfs="20px">
                    {solution4.header}
                  </Title>
                </Box>
                <Paragraph fs="16px" lh="27px" mlh="27px" mfs="16px">
                  {solution4.description}
                </Paragraph>
                <MediaImage src={mobileSevice} />
              </CardContent>
            </Card>
          </FlexBox>
        </Box>
        <Box ml="60px">
          <SeviceImg src={serviceImg} />
        </Box>
      </FlexBox>
    </ServiceContainer>
  );
};

export default Service;
