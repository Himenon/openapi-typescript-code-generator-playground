import * as React from "react";
import { App } from "../App";
import * as Meta from "@himenon/openapi-typescript-code-generator/meta";

export const AppRouter = () => {
  return (
    <React.StrictMode>
      <nav>
        <h1 id="site-title">
          Playground - {Meta.Name}@{Meta.Version}
        </h1>
      </nav>
      <App />
    </React.StrictMode>
  );
};
