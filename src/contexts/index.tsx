import React from "react";
import LanguageProvider from "./language";
import ThemeProvider from "./theme";

type AppProp = {
  children: React.ReactNode;
};

const AppContext: React.FC<AppProp> = (props) => {
  const { children } = props;

  return (
    <ThemeProvider>
      <LanguageProvider>{children}</LanguageProvider>
    </ThemeProvider>
  );
};

export default AppContext;
