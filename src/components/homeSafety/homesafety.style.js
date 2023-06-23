import styled from "styled-components";
import { Container } from "../style/theme";

export const SafetyContainer = styled(Container)`
  padding-top: 96px;
  padding-bottom: 48px;
  text-align: center;

  @media screen and (max-width: 640px) {
    padding: 32px 0;
    text-align: left;
  }
`;
