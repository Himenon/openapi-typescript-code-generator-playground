import * as Domain from "@app/domain";
import * as React from "react";
import { generateStore, Store } from "./Store";
import { Playground } from "@app/component";
import * as Editor from "../Editor";
import * as Preview from "../Preview";
import { useLocation, useHistory } from "react-router-dom";
import LzString from "lz-string";

const generateProps = (stores: Domain.Stores, store: Store): Playground.Props => {
  return {
    editor: Editor.generateProps(store.editor),
    preview: Preview.generateProps(store.preview),
  };
};

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

export const Container = () => {
  const query = useQuery();
  const history = useHistory();
  const code = LzString.decompressFromEncodedURIComponent(query.get("code") || "") || undefined;

  const reducers = Domain.createReducers(code);

  const createReducer = <T, S>([state, dispatch]: [T, S]): { state: T; dispatch: S } => ({ state, dispatch });
  const domainStores: Domain.Stores = {
    app: createReducer(React.useReducer(...reducers.app({ history }))),
  };
  const viewStore = generateStore(domainStores);
  return <Playground.Component {...generateProps(domainStores, viewStore)} />;
};
