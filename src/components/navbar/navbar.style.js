import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavContainer = styled.nav`
  width: 100%;
  background: #ffffff;
  padding: 20px 96px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 10px 0px 10px rgba(206, 206, 206, 0.25);
  position: sticky;
  top: 0;
  z-index: 100;

  @media screen and (max-width: 768px) {
    padding: 20px 0;
  }
`;

export const NavImage = styled.img`
  width: 120px;
  height: 44.03px;

  @media screen and (max-width: 768px) {
    margin-left: 16px;
  }
`;

export const NavMenu = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 32px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 72px;
    left: ${({ close }) => (close ? 0 : "-100%")};
    align-items: center;
    background: #fff;
    transition: all 0.5s ease;
    gap: 0;
    z-index: 999;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    font-size: 24px;
    justify-content: center;
    align-items: center;
    margin-right: 16px;
    cursor: pointer;
  }
`;

export const NavList = styled.li`
  line-height: 140%;

  @media screen and (max-width: 768px) {
    width: 100%;
    text-align: center;
    padding: 16px 50px;
  }
`;
export const NavListLink = styled(NavLink)`
  color: rgba(16, 24, 40, 0.7);
  font-size: ${({ theme }) => theme.fontSize.body2};
  font-weight: ${({ theme }) => theme.fontWeight.counter};
  cursor: pointer;

  &.active {
    color: ${({ theme }) => theme.bgColor.primary};
    font-weight: ${({ theme }) => theme.fontWeight.header};
  }

  &:hover {
    color: ${({ theme }) => theme.bgColor.primary};
    font-weight: ${({ theme }) => theme.fontWeight.header};
  }

  @media screen and (max-width: 768px) {
    padding: 16px 50px;
    &.active {
      border: 0;
    }
  }
`;
