import { Playground, PlaygroundProps } from "@app/component/Playground/Playground";
import { useEditorProps } from "./useEditorProps";
import { usePreviewProps } from "./usePreviewProps";
// import LzString from "lz-string";

const usePlaygroundProps = (): PlaygroundProps => {
  return {
    editor: useEditorProps(),
    preview: usePreviewProps(),
  };
};

export const PlaygroundContainer = () => {
  // const code = LzString.decompressFromEncodedURIComponent("") || undefined;
  const props = usePlaygroundProps();
  return <Playground {...props} />;
};