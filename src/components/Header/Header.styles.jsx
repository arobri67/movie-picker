import styled from "styled-components";
import Header from "./Header";

export const StyledHeader = styled(Header)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  a {
    font-size: 1.8rem;
    font-weight: 500;
    text-decoration: none;
  }
  a:visited {
    color: var(--secondary-color);
    font-weight: 400;
  }
  a:hover {
    color: var(--tertiary-color);
    font-weight: 600;
  }

  @media (max-width: 425px) {
    > img {
      width: 75%;
    }
    > a {
      display: none;
    }
  }
`;
