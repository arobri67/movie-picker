import { StyledCards } from "./Card.styles";
import { useState } from "react";

const Main = ({ className }) => {
  const [trendToggle, setTrendToggle] = useState(false);
  const [randomNumber, setRandomNumber] = useState(1);
  const toggleHandle = () => {
    setTrendToggle(!trendToggle);
    const newRandomNumber = Math.floor(Math.random() * 10) + 1;
    setRandomNumber(newRandomNumber);
  };

  return (
    <main className={className}>
      <section>
        <article>
          <h1>Discover Trending Films Instantly.</h1>
          <p>
            Movie Night, Reimagined: Say Goodbye to Decision Fatigue and Hello
            to Effortless Discoveries.
          </p>
          <button onClick={() => toggleHandle()}>See What's Trending</button>
        </article>
        <article>
          <div>
            <img src="/hero3.webp" alt="hero image" />
          </div>
        </article>
      </section>
      <StyledCards toggle={trendToggle} page={randomNumber} />
    </main>
  );
};

export default Main;
