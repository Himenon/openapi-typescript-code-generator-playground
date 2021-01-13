import * as Domain from "@app/domain";

export const generateStore = (domainStores: Domain.Stores) => ({
  onChangeEditor: (inputCode: string) => {
    domainStores.app.dispatch({ type: "UPDATE_INPUT_CODE", code: inputCode });
  },
  inputCode: domainStores.app.state.code,
});

export type Store = ReturnType<typeof generateStore>;
