import MonacoEditor, { EditorProps as MonacoEditorProps } from "@monaco-editor/react";
import { ErrorBoundary } from "../ErrorBoundary/ErrorBoundary";

type Element = JSX.IntrinsicElements["div"];

export interface EditorProps extends Element {
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
