import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./infrastructure/assets/styles/global";
import styledDefault from "./infrastructure/assets/styles/themes/default";
import AppRoutes from "./infrastructure/routes";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={styledDefault}>
      <GlobalStyle />
      <AppRoutes />
    </ThemeProvider>
  );
};

export default App;
