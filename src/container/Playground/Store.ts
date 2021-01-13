import * as Domain from "@app/domain";
import * as Editor from "../Editor";
import * as Preview from "../Preview";

export const generateStore = (stores: Domain.Stores) => {
  return {
    editor: Editor.generateStore(stores),
    preview: Preview.generateStore(stores),
  };
};

export type Store = ReturnType<typeof generateStore>;
