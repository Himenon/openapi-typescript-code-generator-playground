import { ActionTypes } from "./Action";
import { DEFAULT_STATE, State } from "./State";
// import { LocalStorage } from "@app/infra";
// import * as Constants from "./Constants";
import LzString from "lz-string";
import { useHistory } from "react-router-dom";
import * as querystring from "querystring";

// const repository = LocalStorage.createRepository("Playground");

export interface Hooks {
  history: ReturnType<typeof useHistory>;
}

const appendQueryParams = (query: { code?: string }): string => {
  const searchParams = new URLSearchParams(window.location.search);
  const params = {};
  searchParams.forEach((v, k) => {
    params[k] = v;
  });
  Object.entries(query).forEach(([key, value]) => {
    if (!value || value === "") {
      delete params[key];
    } else {
      params[key] = value;
    }
  });
  return querystring.stringify(params);
};

export const reducer = (hooks: Hooks) => (state: State, action: ActionTypes): State => {
  switch (action.type) {
    case "UPDATE_INPUT_CODE": {
      // repository.saveItem<string>(Constants.INPUT_CODE_KEY, action.code);
      const encodedCode = LzString.compressToEncodedURIComponent(action.code);
      const q = appendQueryParams({ code: encodedCode });
      hooks.history.replace(`?${q}`);
      return { ...state, code: action.code };
    }
    default:
      return state;
  }
};

export type Reducer = [ReturnType<typeof reducer>, State];

export const createReducer = (state: State | undefined = DEFAULT_STATE) => (hooks: Hooks): Reducer => {
  // const code = repository.getItem<string>(Constants.INPUT_CODE_KEY);
  return [reducer(hooks), { ...state, code: state.code }];
};
