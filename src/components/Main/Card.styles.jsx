import Cards from "./Cards";
import styled from "styled-components";

export const StyledCards = styled(Cards)`
  flex-direction: column;
  margin-top: 5rem;
  h2 {
    font-size: 2.5rem;
    margin-bottom: 1em;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 2.5em;
  }
  li {
    width: 270px;
    height: 410px;
    perspective: 1000px;
    justify-content: space-evenly;

    &:hover > div {
      transform: rotateY(180deg);
    }

    background-color: transparent;
    > div {
      position: relative;
      width: 100%;
      height: 100%;
      transition: transform 0.8s;
      transform-style: preserve-3d;
      cursor: pointer;
      > div {
        display: flex;
        flex-direction: column;
        position: absolute;
        width: 100%;
        height: 100%;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        border-radius: 5px;
        > img {
          border-radius: 5px;
          width: 100%;
          height: 100%;
        }
        > h2 {
          font-size: 1.4rem;
          margin-bottom: 0.2em;
        }
        > h3 {
          font-size: 1.3rem;
        }
        > p {
          font-size: 1.2rem;
        }

        > div {
          display: flex;
          justify-content: space-between;
          margin-top: auto;
          p,
          a {
            font-size: 1.2rem;
          }
          a {
            text-decoration: underline;
            color: var(--secondary-color);
            font-weight: 500;
          }
          span {
            font-weight: 600;
          }
        }
      }
    }
  }
  li > div > div:last-child {
    transform: rotateY(180deg);
    background-color: var(--tertiary-color);
    padding: 1em;
    box-shadow: 7px 7px 0 var(--secondary-color);
  }
  @media (max-width: 425px) {
    margin-top: 0;
  }
`;
