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
import { motion } from "framer-motion";

const { mission, vision, value } = about;

const Mission = () => {
  return (
    <AboutContainer>
      <MarginContainer>
        <MissionContainer>
          <MissionBox
            alignItems="flex-start"
            as={motion.div}
            initial={{ x: "-100%", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: true }}
          >
            <MissionTitle>{mission.title}</MissionTitle>
            <BorderBottom />
            <MissionDescription>{mission.description}</MissionDescription>
          </MissionBox>
          <ImgWrapper>
            <Image
              as={motion.img}
              initial={{ y: "-100%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
              src={mission.studyImg}
              style={{ position: "relative", bottom: -100 }}
              viewport={{ once: true }}
            />
            <Image
              as={motion.img}
              initial={{ y: "100%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
              src={mission.shakeImg}
              viewport={{ once: true }}
            />
          </ImgWrapper>
        </MissionContainer>
        <VisionContainer>
          <ImgWrapper style={{ justifyContent: "start" }}>
            <Image
              src={vision.studyImg}
              as={motion.img}
              initial={{ y: "-100%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true }}
            />
            <Image
              src={vision.shakeImg}
              style={{ position: "relative", top: -100 }}
              as={motion.img}
              initial={{ y: "100%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true }}
            />
          </ImgWrapper>
          <MissionBox
            alignItems="flex-start"
            style={{ justifySelf: "end", marginTop: "200px" }}
            as={motion.div}
            initial={{ x: "200", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: true }}
          >
            <MissionTitle>{vision.title}</MissionTitle>
            <BorderBottom />
            <MissionDescription>{vision.description}</MissionDescription>
          </MissionBox>
        </VisionContainer>
        <ValueContainer
          as={motion.div}
          initial={{ x: "100%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1, transition: { duration: 1 } }}
          viewport={{ once: true }}
        >
          <MissionTitle>{value.title}</MissionTitle>
          <ValueDescription>{value.description}</ValueDescription>
        </ValueContainer>
        {/* break */}
        <ReviewContainer>
          <ReviewCard
            as={motion.div}
            initial={{ x: "200", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: true }}
          >
            <ReviewImg src={customerReview} />
            <ReviewTextCard>
              <ReviewTitle>People</ReviewTitle>
              <ReviewText>
                People are our most valuable core value, fostering a culture of
                respect, empowerment, and continuous growth within our
                organization.
              </ReviewText>
            </ReviewTextCard>
          </ReviewCard>
          <ReviewCard
            as={motion.div}
            initial={{ x: "100%", opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: { duration: 1, delay: 0.7 },
            }}
            viewport={{ once: true }}
          >
            <ReviewImg src={collaboration} />
            <ReviewTextCard>
              <ReviewTitle>Safety</ReviewTitle>
              <ReviewText>
                ensuring the well-being of our employees, customers, and the
                communities we serve is paramount for us.
              </ReviewText>
            </ReviewTextCard>
          </ReviewCard>
          <ReviewCard
            as={motion.div}
            initial={{ x: "100%", opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: { duration: 1, delay: 1.4 },
            }}
            viewport={{ once: true }}
          >
            <ReviewImg src={vector} />
            <ReviewTextCard>
              <ReviewTitle>Innovation</ReviewTitle>
              <ReviewText>
                guiding us to uphold honesty, transparency, and ethical conduct
                in all our endeavours.
              </ReviewText>
            </ReviewTextCard>
          </ReviewCard>
        </ReviewContainer>
      </MarginContainer>
    </AboutContainer>
  );
};

export default Mission;
