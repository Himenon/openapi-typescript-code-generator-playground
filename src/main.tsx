import * as ReactDOM from "react-dom/client";
import { AppRouter } from "./router";

const initialize = () => {
  const container = document.getElementById("root");
  if (!container) {
    throw new Error("Not found #root");
  }
  const root = ReactDOM.createRoot(container);
  root.render(<AppRouter />);
};

initialize();
