import * as Domain from "@app/domain";
import { GlobalStyle } from "./Styles";
import { PlaygroundContainer } from "./container";

export interface AppProps {
  reducers: Domain.Reducers;
}

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <PlaygroundContainer />
    </>
  );
};
