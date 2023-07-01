import { styled } from "styled-components";
import { Container } from "../style/theme";

export const MissionContainer = styled(Container)`
  position: relative;
  background: #f9fafb;

  @media screen and (max-width: 640px) {
    margin-top: 40px;
  }
`;

export const MissionBox = styled.div`
  padding: 96px 0;
  display: flex;
  gap: 50px;
  align-items: ${(alignItems) => alignItems};
  justify-content: space-between;

  @media screen and (max-width: 640px) {
    display: flex;
    padding: 24px 0;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

export const FullContainer = styled.div`
  padding: 0 96px;
  background-color: #fffefa;

  @media screen and (max-width: 640px) {
    padding: 0 16px;
  }
`;

export const MissionTitle = styled.h1`
  color: #101828;
  font-size: 36px;
  line-height: 48px;
  letter-spacing: -0.72px;

  @media screen and (max-width: 640px) {
    font-size: 20px;
    font-weight: 600;
    line-height: 22px;
  }
`;

export const MissionDescription = styled.p`
  color: rgba(16, 24, 40, 0.7);
  font-size: 16px;
  line-height: 170%;
  max-width: 528px;
`;

export const BorderBox = styled.div`
  height: 84px;
  /* display: block; */
  display: flex;
  align-items: center;
  ${({ direction }) => `padding-${direction}`}: 16px;
  ${({ direction }) => `border-${direction}`}: 2px solid #013EBD;

  @media screen and (max-width: 640px) {
    height: auto;
    border: 0;
    padding: 0;
    text-align: center;
    order: -1;
  }
`;
