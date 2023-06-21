import styled from "styled-components";
import { Container } from "../style/theme";

export const CounterContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: #fff;
  padding-top: 64px;
  padding-bottom: 64px;
  justify-content: flex-start;
  align-items: center;

  @media screen and (max-width: 768px) {
    gap: 12px;
  }
`;

export const CounterPara = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.counter};
  font-size: ${({ theme }) => theme.fontSize.body3};
  line-height: 20px;
  letter-spacing: -0.01em;
  color: rgba(16, 24, 40, 0.7);
  text-align: left;
`;

export const CounterBoxContainer = styled.div`
  display: flex;
  gap: 14px;
`;

export const CounterBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 103px;
  height: 118px;
  left: 376px;
  top: 875px;
  background: #f9fafb;
  border: 0.3px solid #013ebd;
  box-shadow: 10px 0px 10px rgba(206, 206, 206, 0.25);
  border-radius: 8px;
  font-weight: 600;
  font-size: 64px;
  line-height: 48px;
  letter-spacing: -0.01em;
  color: #013ebd;

  @media screen and (max-width: 768px) {
    width: 42.67px;
    height: 48.88px;
    box-shadow: 4.14244px 0px 4.14244px rgba(206, 206, 206, 0.25);
    border-radius: 3.31395px;
    font-size: 26.5116px;
    line-height: 20px;
  }
`;
