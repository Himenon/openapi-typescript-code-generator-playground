import * as Domain from "@app/domain";
import * as React from "react";
import { generateStore, Store } from "./Store";
import { Playground, PlaygroundProps } from "@app/component";
import * as Editor from "../Editor";
import * as Preview from "../Preview";
import LzString from "lz-string";

const generateProps = (stores: Domain.Stores, store: Store): PlaygroundProps => {
  return {
    editor: Editor.generateProps(store.editor),
    preview: Preview.generateProps(store.preview),
  };
};

export const PlaygroundContainer = () => {
  const code = LzString.decompressFromEncodedURIComponent("") || undefined;

  const reducers = Domain.createReducers(code);

  const createReducer = <T, S>([state, dispatch]: [T, S]): { state: T; dispatch: S } => ({ state, dispatch });
  const domainStores: Domain.Stores = {
    app: createReducer(React.useReducer(...reducers.app({}))),
  };
  const viewStore = generateStore(domainStores);
  return <Playground {...generateProps(domainStores, viewStore)} />;
};
