import * as React from "react";
import { PreviewProps } from "@app/component/Preview/Preview";
import { Converter } from "@app/infra";
import { useAppContext } from "@app/context/app";

export const usePreviewProps = (): PreviewProps => {
  const { state, templateCodeKind } = useAppContext();

  const [tsCode, updateTsCode] = React.useState("");
  React.useEffect(() => {
    const newTsCode = Converter.transformCode(state.code, templateCodeKind);
    updateTsCode(newTsCode);
  }, [state.code, templateCodeKind]);
  return {
    tsCode: tsCode,
  };
};
