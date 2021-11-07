import { EOL } from "os";
import * as Api from "@himenon/openapi-typescript-code-generator/api";
import * as Templates from "@himenon/openapi-typescript-code-generator/templates";
import type * as Types from "@himenon/openapi-typescript-code-generator/types";
import * as yaml from "js-yaml";

export interface Params {
  schema: any;
  entryPoint: string;
}

const generateTypeScriptCode = ({ schema, entryPoint }: Params): string => {
  const resolvedReferenceDocument = schema;
  const parser = new Api.OpenApiTools.Parser(entryPoint, schema, resolvedReferenceDocument);
  const generatorTemplates: Types.CodeGenerator.CustomGenerator<any>[] = [
    {
      generator: () => parser.getAdditionalTypeStatements(),
    },
    {
      generator: Templates.ApiClient.generator,
      option: {}
    }
  ];
  const create = () => {
    const statements = parser.getOpenApiTypeDefinitionStatements();
    generatorTemplates.forEach(generatorTemplate => {
      const payload = parser.getCodeGeneratorParamsArray();
      const extraStatements = Api.TsGenerator.Utils.convertIntermediateCodes(generatorTemplate.generator(payload, generatorTemplate.option));
      statements.push(...extraStatements);
    });
    return statements;
  };
  return [Api.OpenApiTools.Comment.generateLeading(resolvedReferenceDocument), Api.TsGenerator.generate(create)].join(EOL + EOL + EOL);
};

export const transformCode = (src: string): string => {
  try {
    const schema = yaml.load(src);
    return generateTypeScriptCode({
      schema: schema,
      entryPoint: ".",
    });
  } catch (error) {
    console.error(error);
    return "Build Error";
  }
};
