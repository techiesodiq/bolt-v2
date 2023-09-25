import React from "react";
import {
  Border,
  CareerHeader,
  Image,
  ImgWrapper,
  JobBox,
  JobText,
  JobTitle,
  MarginBottom,
  Paragraph,
  SubTitle,
  TextField,
  Title,
} from "./career.style";
import { career } from "../../data/text";

const { description, img, options, subTitle, title } = career;

const Career = () => {
  return (
    <>
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

      <MarginBottom>
        {options.map((option, index) => (
          <JobBox>
            <TextField key={index} to="/career/requirement">
              <JobTitle>{option.title}</JobTitle>
              <JobText>{option.description}</JobText>
            </TextField>
            <Border />
          </JobBox>
        ))}
      </MarginBottom>
    </>
  );
};

export default Career;
