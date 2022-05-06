import { ActionTypes } from "./Action";
import { DEFAULT_STATE, State } from "./State";
import LzString from "lz-string";

const appendQueryParams = (query: { code?: string }): string => {
  const searchParams = new URLSearchParams(window.location.search);
  const params: Record<string, string> = {};
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
  return JSON.stringify(params);
};

export const reducer =
  () =>
  (state: State, action: ActionTypes): State => {
    switch (action.type) {
      case "UPDATE_INPUT_CODE": {
        // repository.saveItem<string>(Constants.INPUT_CODE_KEY, action.code);
        const encodedCode = LzString.compressToEncodedURIComponent(action.code);
        const killoBytes = new Blob([encodedCode]).size / 1000; // KB
        // 12KB以下のテキストのみクエリパラメーターに付与を許可する
        if (killoBytes <= 12) {
          const q = appendQueryParams({ code: encodedCode });
          // console.log(`${q}`)
        }
        return { ...state, code: action.code };
      }
      default:
        return state;
    }
  };

export type Reducer = [ReturnType<typeof reducer>, State];

export const createReducer =
  (state: State | undefined = DEFAULT_STATE) =>
  (): Reducer => {
    // const code = repository.getItem<string>(Constants.INPUT_CODE_KEY);
    return [reducer(), { ...state, code: state.code }];
  };
