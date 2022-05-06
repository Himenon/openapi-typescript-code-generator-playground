import * as React from "react";
import { App } from "../App";

export const AppRouter = () => {
  return (
    <React.StrictMode>
      <nav>
        <h1 id="site-title">Playground - @himenon/openapi-typescript-code-generator@{process.env.GENERATOR_VERSION}</h1>
      </nav>
      <App />
    </React.StrictMode>
  );
};
