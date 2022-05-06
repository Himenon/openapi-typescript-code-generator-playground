import * as React from "react";
import { LiveProvider, LiveEditor } from "react-live";
import * as ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import dracula from 'prism-react-renderer/themes/dracula';
import { Styles } from "./Styles";

export interface Props {
  className?: string;
  code: string;
  transformCode: (code: string) => string;
  scope: {};
}

export const Component = ({ code, transformCode, scope, ...props }: Props) => {
  const [tsCode, updateTsCode] = React.useState("");
  React.useEffect(() => {
    updateTsCode(transformCode(code));
  }, [code]);
  return (
    <Styles {...props}>
      <ErrorBoundary.Component>
        <LiveProvider code={code} scope={scope} noInline={true} theme={dracula} >
          <div className="live-editor">
            <LiveEditor readOnly={false} code={tsCode} language="typescript" />
          </div>
        </LiveProvider>
      </ErrorBoundary.Component>
    </Styles>
  );
};
