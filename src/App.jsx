import { StyledHeader } from "./components/Header/Header.styles";

import GlobalStyles from "./GlobalStyles";
import { StyledContainer } from "./components/Container/Container.styles";
import { StyledMain } from "./components/Main/Main.styles";
import { StyledFooter } from "./components/Footer/Footer.styles";

function App() {
  return (
    <>
      <StyledContainer>
        <GlobalStyles />
        <StyledHeader />
        <StyledMain />
      </StyledContainer>
      <StyledContainer>
        <StyledFooter />
      </StyledContainer>
    </>
  );
}

export default App;
