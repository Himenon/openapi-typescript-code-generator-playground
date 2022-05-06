import * as React from "react";
import { ErrorBoundary } from "../ErrorBoundary/ErrorBoundary";
import MonacoEditor from "@monaco-editor/react";
import { Styles } from "./Styles";

export interface PreviewProps {
  className?: string;
  code: string;
  transformCode: (code: string) => string;
}

export const Preview = ({ code, transformCode, ...props }: PreviewProps) => {
  const [tsCode, updateTsCode] = React.useState("");
  React.useEffect(() => {
    updateTsCode(transformCode(code));
  }, [code]);
  return (
    <Styles {...props}>
      <ErrorBoundary>
        <MonacoEditor
          theme="vs-dark"
          value={tsCode}
          language="typescript"
          options={{
            minimap: {
              enabled: true,
            },
            selectOnLineNumbers: true,
            roundedSelection: false,
            readOnly: true,
            cursorStyle: "line",
          }}
        />
      </ErrorBoundary>
    </Styles>
  );
};
