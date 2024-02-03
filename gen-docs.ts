import * as Meta from "@himenon/openapi-typescript-code-generator/dist/meta";
import * as fs from "fs-extra";

fs.copySync("dist", `docs/v${Meta.Version}`);
