import { styled } from "styled-components";
import { Container } from "../style/theme";

export const ServiceContainer = styled(Container)`
  background: #fffdf6;
  text-align: left;
  padding-top: 109px;
  padding-bottom: 120px;

  @media screen and (max-width: 768px) {
    padding-top: 32px;
    padding-bottom: 35px;
  }
`;

export const Card = styled.div`
  width: 48.5%;
  margin-top: 48px;

  @media screen and (max-width: 640px) {
    width: 100%;
    margin-top: 32px;
  }
`;

export const CardContent = styled.div`
  max-width: 294px;
  /* min-height: 0px; */
  width: 100%;
  @media screen and (max-width: 640px) {
    max-width: 100%;
  }
`;

export const SeviceImg = styled.img`
  max-width: 100%;
  margin-top: 48px;
  width: 560px;
  height: 492px;
  flex-shrink: 0;
  @media screen and (max-width: 640px) {
    height: 240px;
    margin-top: 32px;
  }
`;
