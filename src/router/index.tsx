import * as React from "react";
import { GlobalStyle } from "./Styles";
import { PlaygroundContainer } from "@app/container/Playground";
import * as Meta from "@himenon/openapi-typescript-code-generator/dist/meta";
import { AppProvider } from "@app/context/app";
import { TemplateCodeSelector } from "./TemplateCodeSelector";

export const AppRouter = () => {
  return (
    <React.StrictMode>
      <GlobalStyle />
      <AppProvider>
        <nav style={{ display: "flex", justifyContent: "space-between" }}>
          <h1 id="site-title">
            Playground - {Meta.Name}@{Meta.Version}
          </h1>
          <TemplateCodeSelector />
        </nav>
        <PlaygroundContainer />
      </AppProvider>
    </React.StrictMode>
  );
};
