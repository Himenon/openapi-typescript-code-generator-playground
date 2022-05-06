import MonacoEditor, { EditorProps } from "@monaco-editor/react";
import * as ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

type Element = JSX.IntrinsicElements["div"];

export interface Props extends Element {
  editor: EditorProps;
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
