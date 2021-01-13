import * as Domain from "@app/domain";
import * as React from "react";
import { Playground } from "./container";

interface AppProps {
  reducers: Domain.Reducers;
}

export const App = () => {
  return <Playground.Container />;
};

export { AppProps as Props, App as Container };
