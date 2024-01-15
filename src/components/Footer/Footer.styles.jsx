import styled from "styled-components";
import Footer from "./Footer";

export const StyledFooter = styled(Footer)`
  margin-top: 5em;
  padding: 1em 0;

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 5em;
    justify-content: space-around;
  }
  li {
    font-size: 1.6rem;
    font-weight: 500;
  }

  @media (max-width: 430px) {
    ul {
      gap: 2.5em;
      justify-content: center;
    }
  }
`;
