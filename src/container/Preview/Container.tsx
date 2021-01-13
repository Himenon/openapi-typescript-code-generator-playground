import { Preview } from "@app/component";
import { Store } from "./Store";

export const generateProps = (store: Store): Preview.Props => {
  return {
    code: store.code,
    transformCode: store.transformCode,
    scope: store.scope,
  };
};
