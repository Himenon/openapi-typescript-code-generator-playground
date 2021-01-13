import * as React from "react";
import * as Editor from "../Editor/Editor";
import * as Preview from "../Preview/Preview";

export interface ClassNames {
  editor?: string;
  preview?: string;
}

const classNames: ClassNames = require("./playground.scss");

export interface Props {
  editor: Editor.Props;
  preview: Preview.Props;
}

export const Component = ({ editor, preview }: Props) => {
  return (
    <div style={{ display: "flex", flexDirection: "row", borderTop: "1px solid #eee" }}>
      <Editor.Component {...editor} className={classNames.editor} />
      <Preview.Component {...preview} className={classNames.preview} />
    </div>
  );
};
