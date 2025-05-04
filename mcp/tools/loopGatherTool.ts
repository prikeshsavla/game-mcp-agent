import { z } from "zod";
import loopGather from "../../loopGather.ts";
import { createTool, commonSchemaParams } from "./utils.ts";

/**
 * A tool for performing sequential gathering operations in the Artifacts MMO game world.
 * 
 * @description
 * This tool allows a character to perform multiple gathering operations in sequence.
 * It leverages the Artifacts MMO API to perform sequential gathering and handles
 * potential errors that might occur during the process.
 * 
 * @example
 * // Example usage:
 * const result = await loopGatherTool.handler({
 *   times: 5,
 *   character: "Dexter"
 * });
 * 
 * @returns An object containing:
 *  - content: Array of content objects with:
 *    - text: JSON string containing the loop gathering results
 * 
 * @throws Error if the loop gathering action fails or returns an error response
 */
export const loopGatherTool = createTool(
  "loop_gather",
  "Performs multiple gathering operations in sequence. \
Use this tool when you want a character to gather resources multiple times. \
The tool requires the number of times to gather and accepts an optional character name.",
  {
    times: z.number().min(1).describe("Number of times to perform gathering operations"),
    character: commonSchemaParams.character
  },
  async ({ times, character }) => {
    return await loopGather(times, character);
  }
);