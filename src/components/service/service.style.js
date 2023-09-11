import { styled } from "styled-components";
import { Container } from "../style/theme";

export const ServiceContainer = styled(Container)`
  /* position: relative; */
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  text-align: center;
  z-index: 1;
  /* padding: 0; */
  padding-bottom: 65px;
  justify-content: center;
  align-items: center;
  background: #fffdf6;

  @media screen and (max-width: 768px) {
    padding-top: 32px;
    padding-bottom: 35px;
  }
`;

export const ServiceBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
export const ImageBg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const HeaderWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  max-width: 930px;
  width: 100%;
  z-index: 1;
  margin-top: 109px;
  margin-bottom: 48px;
`;

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  /* grid-auto-rows: minmax(327px, auto); */
  column-gap: 20px;
  row-gap: 48px;
  z-index: 1;
  text-align: left;
  justify-content: center;
`;

export const ServiceCard = styled.div`
  background: #fff;
  max-width: 297px;
  padding: 16px;
  /* min-height: 327px; */
  height: 100%;

  @media screen and (max-width: 640px) {
    width: 100%;
    margin-top: 32px;
  }
`;

export const ServiceTextWrapper = styled.div`
  display: grid;
  gap: 4;
  margin-top: 11px;
  /* min-height: 0px; */
  width: 100%;
  /* justify-content: flex-start;
  align-items: flex-start; */
  /* align-self: self-start;
  justify-self: self-start; */
  @media screen and (max-width: 640px) {
    max-width: 100%;
  }
`;

export const CardTitle = styled.h3`
  color: #013ebd;
  font-family: "ClashSemiBold";
  font-size: 15px;
  line-height: 130%;
`;

export const CardParagraph = styled.p`
  color: #252d39;
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 160%;
`;

export const SeviceImg = styled.img`
  max-width: 100%;
  z-index: 1;
  height: 153px;
  /* @media screen and (max-width: 640px) {
    height: 240px;
    margin-top: 32px;

    @media screen and (max-width: 640px) {
      display: none;
    }
  } */
`;

export const MediaImage = styled.img`
  display: none;

  @media screen and (max-width: 640px) {
    display: block;
    max-width: 100%;
    height: 240px;
    width: 100%;
  }
`;
