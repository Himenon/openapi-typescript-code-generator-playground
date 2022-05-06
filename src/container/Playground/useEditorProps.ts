import { EditorProps } from "@app/component/Editor/Editor";
import { useAppContext } from "@app/context/app";

export const useEditorProps = (): EditorProps => {
  const { state, updateState } = useAppContext();
  return {
    editor: {
      width: "100%",
      height: "98vh",
      language: "yaml",
      defaultLanguage: "yaml",
      value: state.code,
      theme: "vs-dark",
      options: {
        minimap: {
          enabled: true,
        },
        selectOnLineNumbers: true,
        roundedSelection: false,
        readOnly: false,
        cursorStyle: "line",
      },
      onChange: (newValue: string | undefined) => {
        if (!newValue) {
          return;
        }
        updateState((prev) => ({ ...prev, code: newValue }));
      },
      beforeMount: (monaco) => {
        // https://github.com/microsoft/monaco-editor/issues/264#issuecomment-286226099
        monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
          noSemanticValidation: false,
          noSyntaxValidation: false, // This line disables errors in jsx tags like <div>, etc.
          noSuggestionDiagnostics: false,
        });
        monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
          // jsx: 'react',
          jsx: monaco.languages.typescript.JsxEmit.React,
          jsxFactory: "React.createElement",
          reactNamespace: "React",
          allowNonTsExtensions: true,
          allowJs: true,
          strict: true,
          noLib: false,
          preserveConstEnums: true,
          target: monaco.languages.typescript.ScriptTarget.Latest,
        });
        // https://stackoverflow.com/questions/43058191/how-to-use-addextralib-in-monaco-with-an-external-type-definition
        // https://github.com/Microsoft/monaco-editor/blob/017c5028090b0eb571c9c47c4cf5a1d6f0a0fdc3/website/playground/new-samples/extending-language-services/configure-javascript-defaults/sample.js#L19
        monaco.languages.typescript.typescriptDefaults.addExtraLib(
          process.env.TYPE_DEF_REACT_GLOBAL || "",
          "node_modules/@types/react/global.d.ts",
        );
      },
    },
  };
};
