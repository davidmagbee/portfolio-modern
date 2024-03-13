/**
 * This configuration file lets you run `$ sanity [command]` in this folder
 * Go to https://www.sanity.io/docs/cli to learn more.
 **/
import * as dotenv from "dotenv";

import { defineCliConfig } from "sanity/cli";

const projectId = process.env.SANITY_STUDIO_PROJECT_ID!;
const dataset = process.env.SANITY_STUDIO_DATASET!;

if (!projectId || !dataset) {
  dotenv.config();
  throw new Error("Missing projectId or dataset. Check your sanity!!!");
}

export default projectId && dataset && defineCliConfig({ api: { projectId, dataset } });
