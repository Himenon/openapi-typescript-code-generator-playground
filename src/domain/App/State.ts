const SAMPLE_CODE = `openapi: 3.1.0-rc
info:
  version: 1.0.0
  title: Demo Project
  description: Library test schema
  license:
    name: MIT

components:
  schemas:
   StringType:
    type: string
    description: String Literal
`;

export interface State {
  code: string;
}

export const DEFAULT_STATE: State = {
  code: SAMPLE_CODE,
};
