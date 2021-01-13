import * as App from "./App";
export { App };

export interface Reducers {
  app: (hooks: App.Hooks) => App.Reducer;
}

export interface Stores {
  app: {
    state: App.State;
    dispatch: App.Dispatch;
  };
}

export const createReducers = (code: string | undefined): Reducers => {
  return {
    app: App.createReducer(code ? { code } : undefined),
  };
};
