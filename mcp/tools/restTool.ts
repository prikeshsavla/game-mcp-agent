import { z } from "zod";
import rest from "../../rest.ts";

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
export const restCharacterTool = {
  name: "rest_character",
  description: "Makes a character rest to recover hit points in the game. \
Use this tool when a character needs to heal. \
The tool accepts an optional character name.",
  schema: {
    character: z.string().default("Dexter").describe("The name of the character to rest (default: Dexter)")
  },
  handler: async (args: { character: string }) => {
    try {
      const { character } = args;
      
      const result = await rest(character);

      return {
        content: [
          {
            type: "text" as const,
            text: JSON.stringify(result, null, 2)
          }
        ]
      };
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred during rest';
      throw new Error(errorMessage);
    }
  }
};