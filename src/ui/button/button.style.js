import { styled } from "styled-components";

export const Btn = styled.button`
  border-radius: 4px;
  background: ${({ theme }) => theme.bgColor.primary};
  padding: 12px 53px;
  font-size: ${({ theme }) => theme.fontSize.button};
  color: #fff;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  &:hover {
    background-color: #fff;
    color: ${({ theme }) => theme.bgColor.primary};
    border: 2px solid ${({ theme }) => theme.bgColor.primary};
  }
`;
