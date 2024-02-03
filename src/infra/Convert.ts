import { EOL } from "os";
import * as Api from "@himenon/openapi-typescript-code-generator/dist/api";
import * as Templates from "@himenon/openapi-typescript-code-generator/dist/templates";
import type * as Types from "@himenon/openapi-typescript-code-generator/dist/types";
import * as yaml from "js-yaml";

export const TemplateCodeType = {
  CLASS_BASED: Templates.ClassApiClient.generator,
  FUNCTION_BASED: Templates.FunctionalApiClient.generator,
  CURRY_FUNCTION_BASED: Templates.CurryingFunctionalApiClient.generator,
};

type CodeGeneratorKind = keyof typeof TemplateCodeType;

export interface Params {
  schema: any;
  entryPoint: string;
  codeGeneratorKind: CodeGeneratorKind;
}

const generateTypeScriptCode = ({ schema, entryPoint, codeGeneratorKind }: Params): string => {
  const resolvedReferenceDocument = schema;
  const parser = new Api.OpenApiTools.Parser(entryPoint, schema, resolvedReferenceDocument);
  const generatorTemplates: Types.CodeGenerator.CustomGenerator<any>[] = [
    {
      generator: () => parser.getAdditionalTypeStatements(),
    },
    {
      generator: TemplateCodeType[codeGeneratorKind],
      option: {},
    },
  ];
  const create = () => {
    const statements = parser.getOpenApiTypeDefinitionStatements();
    generatorTemplates.forEach((generatorTemplate) => {
      const payload = parser.getCodeGeneratorParamsArray();
      const extraStatements = Api.TsGenerator.Utils.convertIntermediateCodes(generatorTemplate.generator(payload, generatorTemplate.option));
      statements.push(...extraStatements);
    });
    return statements;
  };
  return [Api.OpenApiTools.Comment.generateLeading(resolvedReferenceDocument), Api.TsGenerator.generate(create)].join(EOL + EOL + EOL);
};

export const transformCode = (src: string, codeGeneratorKind: CodeGeneratorKind): string => {
  try {
    const schema = yaml.load(src);
    return generateTypeScriptCode({
      schema: schema,
      entryPoint: ".",
      codeGeneratorKind,
    });
  } catch (error) {
    console.error(error);
    return "Build Error";
  }
};
