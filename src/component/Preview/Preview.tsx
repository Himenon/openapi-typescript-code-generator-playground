import * as React from "react";
import { ErrorBoundary } from "../ErrorBoundary/ErrorBoundary";
import { Styles } from "./Styles";

export interface PreviewProps {
  className?: string;
  code: string;
  transformCode: (code: string) => string;
  scope: {};
}

export const Preview = ({ code, transformCode, scope, ...props }: PreviewProps) => {
  const [tsCode, updateTsCode] = React.useState("");
  React.useEffect(() => {
    updateTsCode(transformCode(code));
  }, [code]);
  return (
    <Styles {...props}>
      <ErrorBoundary>
        <pre>
          {tsCode}
        </pre>
      </ErrorBoundary>
    </Styles>
  );
};
