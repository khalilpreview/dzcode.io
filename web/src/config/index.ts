import { fsConfig } from "../_common/config";
import { getEnv } from "src/common/utils";

export const fullstackConfig = fsConfig(getEnv(), {
  hostname: location.hostname,
});
