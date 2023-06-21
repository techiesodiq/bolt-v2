import { styled } from "styled-components";
import { Container } from "../style/theme";
import { Link } from "react-router-dom";

export const FooterContainer = styled(Container)`
  background: #ffffff;
  border-top: 0.5px solid rgba(102, 112, 133, 0.3);
  padding-top: 62px;
  padding-bottom: 54px;

  @media screen and (max-width: 768px) {
    padding: 48px 16px;
    background: linear-gradient(
      180deg,
      #eaf1ff 0%,
      rgba(255, 254, 250, 0) 100%
    );
    border-top: 0.5px solid rgba(102, 112, 133, 0.3);
  }
`;
export const FooterBox = styled.div`
  display: block;
`;

export const FooterLogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: ${({ pt }) => (pt ? pt : 0)};

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const FooterImg = styled.img``;

export const FooterIconContainer = styled.div`
  display: flex;
  gap: 24px;
`;

export const FooterIcon = styled.div`
  display: flex;
  height: 36px;
  width: 36px;
  border-radius: 50%;
  background: rgb(1, 62, 189, 0.2);
  align-items: center;
  justify-content: center;
  color: #013ebd;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const FooterMenu = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 32px;
  padding: ${({ pt }) => pt} 0 ${({ pb }) => pb};
  border-bottom: ${({ border }) => border} solid rgba(102, 112, 133, 0.3);

  @media screen and (max-width: 768px) {
    flex-direction: ${({ direction }) => direction};
    padding: 30px 0 19px;
  }
`;

export const FooterList = styled.li`
  line-height: 21px;
`;

export const FooterLink = styled(Link)`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  color: ${({ color }) => color};

  &:hover {
    color: ${({ theme }) => theme.bgColor.primary};
    font-weight: ${({ theme }) => theme.fontWeight.header};
  }
`;

export const FooterPara = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 21px;
  color: #667085;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    height: 36px;
    width: 36px;
    border-radius: 50%;
    background: rgb(1, 62, 189, 0.2);
    align-items: center;
    justify-content: center;
    color: #013ebd;
  }
`;
