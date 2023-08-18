import React from "react";
import {
  CareerContainer,
  CareerHeader,
  Image,
  ImgWrapper,
  JobBox,
  JobText,
  JobTitle,
  Paragraph,
  SubTitle,
  TextField,
  Title,
} from "./career.style";
import { career } from "../../data/text";

const { description, img, options, subTitle, title } = career;

const Career = () => {
  return (
    <CareerContainer>
      <CareerHeader>
        <Title>{title}</Title>
        <Paragraph>{description}</Paragraph>
      </CareerHeader>
      <ImgWrapper>
        {img.map((item, index) => (
          <Image src={item} alt="fun" />
        ))}
      </ImgWrapper>
      <SubTitle>{subTitle}</SubTitle>

      {options.map((option, index) => (
        <JobBox>
          <TextField key={index}>
            <JobTitle>{option.title}</JobTitle>
            <JobText>{option.description}</JobText>
          </TextField>
        </JobBox>
      ))}
    </CareerContainer>
  );
};

export default Career;
