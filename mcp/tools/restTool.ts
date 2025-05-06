import rest from "../../actions/rest.ts";
import { commonSchemaParams, createTool } from "../../utils/toolUtils.ts";

/**
 * A tool for resting a character in the Artifacts MMO game world.
 *
 * @description
 * This tool makes a character rest to recover hit points.
 * It leverages the Artifacts MMO API to perform character resting and handles
 * potential errors that might occur during the process.
 *
 * @example
 * // Example usage:
 * const result = await restCharacterTool.handler({
 *   character: "Dexter"
 * });
 *
 * @returns An object containing:
 *  - content: Array of content objects with:
 *    - text: JSON string containing the rest result, including success status and cooldown information
 *
 * @throws Error if the rest action fails or returns an error response
 */
export const restCharacterTool = createTool(
  "rest_character",
  "Makes a character rest to recover hit points in the game. \
Use this tool when a character needs to heal. \
The tool accepts an optional character name.",
  {
    character: commonSchemaParams.character,
  },
  async ({ character }) => {
    return await rest(character);
  },
);
