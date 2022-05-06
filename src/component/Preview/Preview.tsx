import { ErrorBoundary } from "../ErrorBoundary/ErrorBoundary";
import MonacoEditor from "@monaco-editor/react";
import { Styles } from "./Styles";

export interface PreviewProps {
  className?: string;
  tsCode: string;
}

export const Preview = ({ tsCode, ...props }: PreviewProps) => {
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
