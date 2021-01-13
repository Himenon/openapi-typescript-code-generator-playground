import * as React from "react";
import MonacoEditor, { MonacoEditorProps } from "react-monaco-editor";
import * as ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

type Element = JSX.IntrinsicElements["div"];

export interface Props extends Element {
  editor: MonacoEditorProps;
}

export const Component = ({ editor, ...props }: Props) => {
  return (
    <ErrorBoundary.Component>
      <div {...props}>
        <MonacoEditor {...editor} />
      </div>
    </ErrorBoundary.Component>
  );
};
