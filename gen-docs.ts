import * as Meta from "@himenon/openapi-typescript-code-generator/meta";
import * as cpy from "cpy";

cpy("dist", `docs/v${Meta.Version}`).catch(error => {
  console.error(error);
  process.exit(1);
})
