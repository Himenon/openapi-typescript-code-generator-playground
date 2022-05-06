import * as React from "react";
import * as Domain from "@app/domain";
import { GlobalStyle } from "./Styles";
import { Playground } from "./container";

export interface AppProps {
  reducers: Domain.Reducers;
}

export const App = () => {
  return (
    <React.StrictMode>
      <GlobalStyle />
      <Playground.Container />
    </React.StrictMode>
  );
};
