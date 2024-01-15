import styled from "styled-components";
import Main from "./Main";

export const StyledMain = styled(Main)`
  display: flex;
  flex-direction: column;
  margin-top: 5em;
  flex-grow: 1;

  section {
    display: flex;
    gap: 7em;
    flex-wrap: wrap;
  }
  article {
    width: 47%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    &:nth-child(2) {
      align-items: center;
    }
  }

  h1 {
    font-size: 5.5rem;
    margin-bottom: 0.3em;
  }
  p {
    font-size: 2rem;
    font-weight: 400;
    margin-bottom: 1em;
  }

  article > div > img {
    width: 500px;
    border-radius: 5px;
  }

  button {
    margin-top: auto;
    padding: 0.2em 0.6em;
    text-decoration: none;
    font-family: "Poppins", sans-serif;
    border: none;
    font-size: 2.3rem;
    font-weight: 600;
    background: var(--tertiary-color);
    border-radius: 5px;
    color: var(--primary-color);
    box-shadow: 5px 5px 0 var(--secondary-color);
    transition: 0.3ms;
    cursor: pointer;

    &:hover {
      transition: 0.3s;
      box-shadow: 9px 9px 0 var(--secondary-color);
    }
  }
  section {
    &:nth-child(2) {
      gap: 0rem;
    }
  }

  @media (max-width: 430px) {
    article > div > img {
      display: none;
    }
    h1 {
      font-size: 4.5rem;
    }
  }
  @media (max-width: 375px) {
    h1 {
      font-size: 4rem;
    }
  }
`;
