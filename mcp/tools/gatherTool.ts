import gather from "../../actions/gather.ts";
import { commonSchemaParams, createTool } from "../../utils/toolUtils.ts";

/**
 * A tool for harvesting resources in the Artifacts MMO game world.
 *
 * @description
 * This tool allows a character to gather resources at their current location.
 * It leverages the Artifacts MMO API to perform gathering and handles
 * potential errors that might occur during the process.
 *
 * @example
 * // Example usage:
 * const result = await gatherTool.handler({
 *   character: "Dexter"
 * });
 *
 * @returns An object containing:
 *  - content: Array of content objects with:
 *    - text: JSON string containing the gathering result
 *
 * @throws Error if the gathering action fails or returns an error response
 */
export const gatherTool = createTool(
  "gather_resource",
  "Harvests a resource on the character's current map location. \
Use this tool when you want a character to gather resources at their current position. \
The tool accepts an optional character name.",
  {
    character: commonSchemaParams.character,
  },
  async ({ character }) => {
    return await gather(character);
  },
);
