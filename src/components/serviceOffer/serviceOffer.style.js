import { styled } from "styled-components";
import { Container } from "../style/theme";
import { Link } from "react-router-dom";

export const ServiceBox = styled(Container)`
  justify-content: center;
  display: grid;
  padding-top: 112px;
  margin-bottom: 112px;
  text-align: center;

  @media screen and (max-width: 640px) {
    flex-direction: column;
  }
`;

export const Title = styled.h2`
  color: #101828;
  font-family: "ClashRegular";
  font-size: 48px;
  line-height: 65px; /* 135.417% */
  letter-spacing: -0.96px;
  margin-bottom: 50px;
`;

export const SolutionBox = styled.div`
  display: flex;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
`;

export const SolutionCard = styled.div`
  display: grid;
  text-align: center;
  padding: 53px 45px;
  border-radius: 24px;
  border: 0.7px solid #013ebd;
  background: #fffdf6;
  min-height: 500px;
  /* max-width: 604px; */

  max-width: 48.4%;
  align-content: space-between;
`;

export const CardTitle = styled.h3`
  color: #101828;
  font-family: ClashRegular;
  font-size: 32px;
  line-height: 44px; /* 137.5% */
  letter-spacing: -0.64px;
  margin-bottom: 20px;
`;

export const CardParagraph = styled.p`
  color: #475467;
  font-family: Inter;
  font-size: 20px;
  font-weight: 400;
  line-height: 170%;
  margin-bottom: 43px;
`;

export const CardLink = styled(Link)`
  color: #013ebd;
  font-family: Inter;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px; /* 125% */
  text-decoration-line: underline;
`;
