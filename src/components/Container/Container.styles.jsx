import styled from "styled-components";
import Container from "./Container";

export const StyledContainer = styled(Container)`
  width: 1200px;
  margin: 0 auto;
  min-height: 100svh;
  display: flex;
  flex-direction: column;

  @media (max-width: 1200px) {
    width: 100%;
    padding: 1em;
  }
`;
