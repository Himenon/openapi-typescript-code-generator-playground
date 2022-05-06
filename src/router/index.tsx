import * as React from "react";
import { App } from "../App";
import * as Meta from "@himenon/openapi-typescript-code-generator/meta";
import { AppProvider } from "@app/context/app";

export const AppRouter = () => {
  return (
    <React.StrictMode>
      <AppProvider>
        <nav>
          <h1 id="site-title">
            Playground - {Meta.Name}@{Meta.Version}
          </h1>
        </nav>
        <App />
      </AppProvider>
    </React.StrictMode>
  );
};
