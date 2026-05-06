import * as Meta from "@himenon/openapi-typescript-code-generator/meta";
import fs from "fs-extra";

fs.copySync("dist", `docs/v${Meta.Version}`);
