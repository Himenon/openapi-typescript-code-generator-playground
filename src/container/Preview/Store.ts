import { Converter } from "@app/infra";
import * as Domain from "@app/domain";

export const generateStore = (domainStores: Domain.Stores) => {
  return {
    code: domainStores.app.state.code,
    // value: domainStores.app.state.result,
    transformCode: (code: string): string => {
      return Converter.transformCode(code);
    },
    scope: {
      props: {},
    },
  };
};

export type Store = ReturnType<typeof generateStore>;
