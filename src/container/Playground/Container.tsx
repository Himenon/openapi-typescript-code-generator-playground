import { Playground, PlaygroundProps } from "@app/component";
import * as Editor from "../Editor";
import * as Preview from "../Preview";
import LzString from "lz-string";

const usePlaygroundProps = (): PlaygroundProps => {
  return {
    editor: Editor.generateProps(),
    preview: Preview.generateProps(),
  };
};

export const PlaygroundContainer = () => {
  const code = LzString.decompressFromEncodedURIComponent("") || undefined;
  const props = usePlaygroundProps();
  return <Playground {...props} />;
};
