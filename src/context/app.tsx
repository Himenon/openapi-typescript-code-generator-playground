import * as React from "react";
import { SAMPLE_CODE } from "../constants/defaultCode";

export interface AppState {
  code: string;
}

type SetStateAction<S> = React.Dispatch<React.SetStateAction<S>>;

export type ContextValue = {
  state: AppState;
  updateState: SetStateAction<AppState>;
};

export const AppContext = React.createContext<ContextValue>({} as any);

export const useAppContext = () => React.useContext(AppContext);

export interface AppProviderProps {
  children: React.ReactNode;
  defaultCode?: string;
}

export const AppProvider: React.FC<AppProviderProps> = (props) => {
  const [state, updateState] = React.useState<AppState>({
    code: props.defaultCode || SAMPLE_CODE,
  });

  const defaultContextValue: ContextValue = {
    state: state,
    updateState,
  };

  return <AppContext.Provider value={defaultContextValue}>{props.children}</AppContext.Provider>;
};
