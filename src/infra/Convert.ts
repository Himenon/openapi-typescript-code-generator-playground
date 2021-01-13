import { EOL } from "os";
import * as TypeScriptCodeGenerator from "@himenon/openapi-typescript-code-generator/$cjs/CodeGenerator";
import * as Converter from "@himenon/openapi-typescript-code-generator/$cjs/Converter";
import * as DefaultCodeTemplate from "@himenon/openapi-typescript-code-generator/$cjs/DefaultCodeTemplate";
import * as ResolveReference from "@himenon/openapi-typescript-code-generator/$cjs/ResolveReference";
import * as Validator from "@himenon/openapi-typescript-code-generator/$cjs/Validator";
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
    ? { makeApiClient: option.makeApiClient || DefaultCodeTemplate.makeClientApiClient }
    : { makeApiClient: DefaultCodeTemplate.makeClientApiClient };
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
