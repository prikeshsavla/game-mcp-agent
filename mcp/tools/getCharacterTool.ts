import { z } from "zod";
import getCharacter from "../../actions/getCharacter.ts";
import { createTool, commonSchemaParams } from "../../utils/toolUtils.ts";

/**
 * A tool for retrieving character information in the Artifacts MMO game world.
 * 
 * @description
 * This tool provides access to detailed character information including stats, 
 * inventory, equipment, and other character-specific data from the Artifacts MMO API.
 * 
 * @example
 * // Example usage:
 * const result = await getCharacterTool.handler({ 
 *   character: "Dexter" 
 * });
 * 
 * @returns An object containing:
 *  - content: Array of content objects with:
 *    - text: JSON string containing the character information
 * 
 * @throws Error if the character lookup fails or returns an error response
 */
export const getCharacterTool = createTool(
  "get_character_info",
  "Retrieves detailed information about a character in the game. \
Use this tool when you need to know a character's stats, inventory, equipment, or other details. \
The tool accepts an optional character name.",
  {
    character: commonSchemaParams.character
  },
  async ({ character }) => {
    return await getCharacter(character);
  }
);