import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 120px;

  .left-div {
    max-width: 742px;

    .title {
      color: #1b1436;
      font-family: Clash Grotesk;
      font-size: 40px;
      font-style: normal;
      font-weight: 600;
      line-height: 150%; /* 60px */
      letter-spacing: -0.8px;
      margin-bottom: 11px;
    }

    .title-wrapper {
      display: grid;
      gap: 16px;
    }
  }
  .right-div {
    border-radius: 8px;
    background: #fff;
    box-shadow: 0px 7px 64px 0px rgba(0, 0, 0, 0.07);
  }
`;
