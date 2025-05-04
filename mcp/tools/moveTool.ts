import { z } from "zod";
import move from "../../move.ts";
import { createTool, commonSchemaParams } from "./utils.ts";

/**
 * A tool for moving a character in the Artifacts MMO game world.
 * 
 * @description
 * This tool moves a character to specified X and Y coordinates on the game map.
 * It leverages the Artifacts MMO API to perform character movement and handles
 * potential errors that might occur during the process.
 * LLMs can use this tool when they need to navigate characters around the
 * game world or position characters at specific locations.
 * 
 * @example
 * // Example usage:
 * const result = await moveCharacterTool.handler({ 
 *   x: 10, 
 *   y: 20, 
 *   character: "Dexter" 
 * });
 * 
 * @returns An object containing:
 *  - content: Array of content objects with:
 *    - text: JSON string containing the movement result, including success status and cooldown information
 * 
 * @throws Error if the movement action fails or returns an error response
 */
export const moveCharacterTool = createTool(
  "move_character",
  "Moves a character to specified X and Y coordinates on the game map. \
Use this tool when you need to navigate a character to a new position in the game world. \
The tool accepts X and Y coordinates and an optional character name.",
  {
    x: z.number().describe("The X coordinate to move to"),
    y: z.number().describe("The Y coordinate to move to"),
    character: commonSchemaParams.character
  },
  async ({ x, y, character }) => {
    return await move(x, y, character);
  }
);
