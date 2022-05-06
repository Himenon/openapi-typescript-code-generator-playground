import { Editor, EditorProps } from "../Editor/Editor";
import { Preview, PreviewProps } from "../Preview/Preview";
import { Styles } from "./Styles";

export interface ClassNames {
  editor?: string;
  preview?: string;
}

export interface PlaygroundProps {
  editor: EditorProps;
  preview: PreviewProps;
}

export const Playground = ({ editor, preview }: PlaygroundProps) => {
  return (
    <Styles>
      <Editor {...editor} className="editor" />
      <Preview {...preview} className="preview" />
    </Styles>
  );
};
