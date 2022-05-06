import * as React from "react";
import { GlobalStyle } from "./Styles";
import { PlaygroundContainer } from "@app/container/Playground";
import * as Meta from "@himenon/openapi-typescript-code-generator/meta";
import { AppProvider } from "@app/context/app";

export const AppRouter = () => {
  return (
    <React.StrictMode>
      <GlobalStyle />
      <AppProvider>
        <nav>
          <h1 id="site-title">
            Playground - {Meta.Name}@{Meta.Version}
          </h1>
        </nav>
        <PlaygroundContainer />
      </AppProvider>
    </React.StrictMode>
  );
};
