import * as Editor from "../Editor/Editor";
import * as Preview from "../Preview/Preview";
import { Styles } from "./Styles";

export interface ClassNames {
  editor?: string;
  preview?: string;
}

export interface Props {
  editor: Editor.Props;
  preview: Preview.Props;
}

export const Component = ({ editor, preview }: Props) => {
  return (
    <Styles>
      <Editor.Component {...editor} className="editor" />
      <Preview.Component {...preview} className="preview" />
    </Styles>
  );
};
