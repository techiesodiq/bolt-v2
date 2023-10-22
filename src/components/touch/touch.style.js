import { styled } from "styled-components";
import { Container } from "../style/theme";

export const TouchContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  padding: 96px 96px 48px;
  align-items: flex-start;
  background: rgba(1, 62, 189, 0.03);

  @media screen and (max-width: 768px) {
    display: block;
    padding: 32px 16px 16px;
  }
`;
export const TouchBox = styled.div``;

export const Box = styled.div`
  margin-bottom: ${({ mb }) => mb};

  @media screen and (max-width: 768px) {
    display: ${({ display }) => (display ? display : "block")};
    margin-bottom: ${({ mmb }) => mmb};
  }
`;

export const TouchPara = styled.p`
  font-weight: ${({ fw }) => (fw ? fw : "400")};
  font-size: ${({ fs }) => (fs ? fs : "20px")};
  line-height: ${({ lh }) => (lh ? lh : "170%")};

  color: ${({ color }) => (color ? color : "#475467")};

  @media screen and (max-width: 768px) {
    font-size: ${({ mfs }) => (mfs ? mfs : "14px")};
    line-height: ${({ mlh }) => (mlh ? mlh : "170%")};
  }
`;

export const TouchTitle = styled.h1`
  font-weight: ${({ fw }) => (fw ? fw : "700")};
  font-size: ${({ fs }) => (fs ? fs : "48px")};
  line-height: ${({ lh }) => (lh ? lh : "72px")};
  letter-spacing: -0.02em;
  color: #013ebd;

  @media screen and (max-width: 768px) {
    font-weight: ${({ mfw }) => (mfw ? mfw : "600")};
    font-size: ${({ mfs }) => (mfs ? mfs : "24px")};
    line-height: ${({ mlh }) => (mlh ? mlh : "30px")};
  }
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;

  @media screen and (max-width: 768px) {
    gap: 18px;
  }
`;

export const RightBox = styled.div`
  display: flex;
  gap: 18px;
`;
