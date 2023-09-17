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
      margin-bottom: 64px;

      h4 {
        color: #1b1436;
        font-feature-settings: "clig" off, "liga" off;
        font-family: Montserrat;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: 20px; /* 111.111% */
        letter-spacing: -1px;
        margin-right: 8px;
      }

      span {
        color: #1b1436;
        font-feature-settings: "clig" off, "liga" off;
        font-family: Montserrat;
        font-size: 18px;
        font-style: normal;
        font-weight: 300;
        line-height: 20px; /* 111.111% */
        letter-spacing: -1px;
        margin-left: 8px;
      }
    }

    .job-wrapper {
      .title-wrapper {
        display: grid;
        gap: 12px;
        margin-bottom: 24px;
      }

      h3 {
        color: #1b1436;
        font-family: "ClashSemiBold";
        font-size: 24px;
        line-height: 32px; /* 133.333% */
        letter-spacing: -0.48px;
      }

      h5 {
        color: #1b1436;
        font-feature-settings: "clig" off, "liga" off;
        font-family: Montserrat;
        font-size: 18px;
        font-weight: 600;
        line-height: 20px; /* 111.111% */
        letter-spacing: -1px;
      }
      p {
        color: #6b7280;
        font-family: Inter;
        font-size: 20px;
        font-style: normal;
        font-weight: 300;
        line-height: 150%; /* 30px */
        margin-bottom: 24px;
      }
    }
    .duties {
      margin-bottom: 64px;
      h3 {
        color: #1b1436;
        font-family: "ClashSemiBold";
        font-size: 24px;
        font-style: normal;
        line-height: 32px; /* 133.333% */
        letter-spacing: -0.48px;
        margin-bottom: 24px;
      }

      p {
        color: #6b7280;
        font-family: Inter;
        font-size: 20px;
        font-style: normal;
        font-weight: 300;
        line-height: 150%; /* 30px */
      }

      ul {
        display: grid;
        gap: 16px;
        margin-left: 18px;
        margin-bottom: 30px;

        li {
          color: #6b7280;
          font-family: Inter;
          font-size: 20px;
          font-style: normal;
          font-weight: 300;
          line-height: 24px;

          &::marker {
            margin-right: 20px;
          }
        }
      }
    }
  }
  .right-div {
    border-radius: 8px;
    background: #fff;
    box-shadow: 0px 7px 64px 0px rgba(0, 0, 0, 0.07);
  }
`;
