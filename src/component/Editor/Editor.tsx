import React from "react";
import MonacoEditor, { EditorProps as MonacoEditorProps } from "@monaco-editor/react";
import { ErrorBoundary } from "../ErrorBoundary/ErrorBoundary";

export interface EditorProps extends React.ComponentPropsWithoutRef<"div"> {
  editor: MonacoEditorProps;
}

export const Editor = ({ editor, ...props }: EditorProps) => {
  return (
    <ErrorBoundary>
      <div {...props}>
        <MonacoEditor {...editor} />
      </div>
    </ErrorBoundary>
  );
};
