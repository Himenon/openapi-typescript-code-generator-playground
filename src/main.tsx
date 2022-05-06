import * as ReactDOM from "react-dom";
import { AppRouter } from "./router";

const initialize = () => {
  const container = document.getElementById("root");
  if (!container) {
    throw new Error("Not found #root");
  }
  ReactDOM.render(<AppRouter />, container);
  // const root = ReactDOM.createRoot(container);
  // root.render(<AppRouter />);
};

initialize();
