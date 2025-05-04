import { z } from "zod";
import move from "../../move.ts";

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
export const moveCharacterTool = {
  name: "move_character",
  description: "Moves a character to specified X and Y coordinates on the game map. \
Use this tool when you need to navigate a character to a new position in the game world. \
The tool accepts X and Y coordinates and an optional character name.",
  schema: {
    x: z.number().describe("The X coordinate to move to"),
    y: z.number().describe("The Y coordinate to move to"),
    character: z.string().default("Dexter").describe("The name of the character to move (default: Dexter)")
  },
  handler: async (args: { x: number; y: number; character: string }) => {
    try {
      const { x, y, character } = args;
      
      const result = await move(x, y, character);
      

      
      return {
        content: [
          {
            type: "text" as const,
            text: JSON.stringify({
              success: result.success,
              message: result.message || "Character moved successfully",
              cooldown: result.cooldown,
              destination: { x, y }
            }, null, 2)
          }
        ]
      };
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred during movement';
      throw new Error(errorMessage);
    }
  }
};
