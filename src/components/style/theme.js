import styled, { createGlobalStyle } from "styled-components";

export const theme = {
  bgColor: {
    primary: "#013EBD",
    secondary: "#F8EFD0",
  },
  textColor: {
    header: "#101828",
    body: "#475467",
  },
  fontSize: {
    header1: "56px",
    header2: "48px",
    header3: "38px",
    body1: "20px",
    body2: "18px",
    body3: "16px",
    button: "16px",
    counter: "64px",
  },
  lineHeight: {
    header1: "68px",
    header2: "54px",
    header3: "44px",
    body1: "170%",
    body2: "27px",
    body3: "170%",
    button: "auto",
    counter: "48px",
  },
  letterSpacing: {
    header: "-2%",
    body: "0",
    counter: "-1%",
  },
  fontWeight: {
    header: "bold",
    body: "regular",
    counter: "600",
  },
};

export const Globalstyle = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  outline: 0;
  text-decoration: none;
  border: 0;
  /* overflow: hidden; */
}
`;

export const Container = styled.div`
  padding: 0 96px;

  @media screen and (max-width: 768px) {
    padding: 0 16px;
  }
`;

export const PageContainer = styled.div`
  position: relative;
`;
