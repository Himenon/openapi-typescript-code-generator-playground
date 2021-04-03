import { EOL } from "os";
import {
  Converter,
  TypeScriptCodeGenerator,
  Validator,
  ResolveReference,
  DefaultCodeTemplate,
} from "@himenon/openapi-typescript-code-generator/api";
import * as yaml from "js-yaml";

export interface Params {
  schema: any;
  option?: Partial<Converter.v3.Option>;
  entryPoint: string;
  /** default: true */
  enableValidate?: boolean;
  log?: {
    validator?: Validator.v3.LogOption;
  };
}

const generateTypeScriptCode = ({ schema, entryPoint, option, enableValidate = true, log }: Params): string => {
  const resolvedReferenceDocument = ResolveReference.resolve(entryPoint, entryPoint, JSON.parse(JSON.stringify(schema)));

  if (enableValidate) {
    Validator.v3.validate(resolvedReferenceDocument, log && log.validator);
  }

  const convertOption: Converter.v3.Option = option
    ? {
        rewriteCodeAfterTypeDeclaration: option.rewriteCodeAfterTypeDeclaration || DefaultCodeTemplate.rewriteCodeAfterTypeDeclaration,
        codeGeneratorOption: option.codeGeneratorOption || { sync: false },
      }
    : {
        rewriteCodeAfterTypeDeclaration: DefaultCodeTemplate.rewriteCodeAfterTypeDeclaration,
        codeGeneratorOption: { sync: false },
      };
  const { createFunction, generateLeadingComment } = Converter.v3.create(entryPoint, schema, resolvedReferenceDocument, convertOption);
  return [generateLeadingComment(), TypeScriptCodeGenerator.generate(createFunction)].join(EOL + EOL + EOL);
};

export const transformCode = (src: string): string => {
  try {
    const schema = yaml.load(src);
    return generateTypeScriptCode({
      schema: schema,
      entryPoint: ".",
      enableValidate: false,
    });
  } catch (error) {
    console.error(error);
    return "Build Error";
  }
};
