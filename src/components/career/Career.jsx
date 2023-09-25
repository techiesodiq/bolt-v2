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
import { motion } from "framer-motion";

const { description, img, options, subTitle, title } = career;

const Career = () => {
  return (
    <>
      <CareerHeader>
        <Title
          as={motion.h2}
          initial={{ y: "-100%", opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { duration: 1 },
          }}
          viewport={{ once: true }}
        >
          {title}
        </Title>
        <Paragraph
          as={motion.h2}
          initial={{ y: "100%", opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { duration: 1 },
          }}
          viewport={{ once: true }}
        >
          {description}
        </Paragraph>
      </CareerHeader>
      <ImgWrapper>
        {img.map((item, index) => (
          <Image
            src={item}
            alt="fun"
            as={motion.img}
            initial={{ y: -100, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { duration: 1, delay: 0.9 },
            }}
            viewport={{ once: true }}
          />
        ))}
      </ImgWrapper>
      <SubTitle
        as={motion.h2}
        initial={{ y: "-100%", opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: { duration: 1 },
        }}
        viewport={{ once: true }}
      >
        {subTitle}
      </SubTitle>

      <MarginBottom>
        {options.map((option, index) => (
          <JobBox
            as={motion.div}
            key={index}
            initial={{ y: -100, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { duration: 1, delay: 0.9 },
            }}
            viewport={{ once: true }}
          >
            <TextField to="/career/requirement">
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
