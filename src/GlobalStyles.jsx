import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;

  --primary-color: #F5F5F5;
  --secondary-color: #0F0A0A;
  --tertiary-color: #E5625E;
  -webkit-font-smoothing: antialiased;
}
html {
  font-family: "Poppins", sans-serif;
  font-size: 62.5%;
  background-color: var(--primary-color);
  color: var(--secondary-color);
  font-weight: 300;
}
h1,
h2,
h3,
h4,
h5,
h6,
p
 {
  color: var(--secondary-color);
}
h1 {
    font-family: "Crimson Text";
}

ul {
  list-style: none;
}




`;
export default GlobalStyles;
