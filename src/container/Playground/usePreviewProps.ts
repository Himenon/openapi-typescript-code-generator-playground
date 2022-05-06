import * as React from "react";
import { Preview } from "@app/component";
import { Converter } from "@app/infra";
import { useAppContext } from "@app/context/app";

export const usePreviewProps = (): Preview.PreviewProps => {
  const { state } = useAppContext();

  const [tsCode, updateTsCode] = React.useState("");
  React.useEffect(() => {
    const newTsCode = Converter.transformCode(state.code);
    updateTsCode(newTsCode);
  }, [state.code]);
  return {
    tsCode: tsCode,
  };
};
