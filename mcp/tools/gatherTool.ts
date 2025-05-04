import { z } from "zod";
import gather from "../../gather.ts";

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
export const gatherTool = {
  name: "gather_resource",
  description: "Harvests a resource on the character's current map location. \
Use this tool when you want a character to gather resources at their current position. \
The tool accepts an optional character name.",
  schema: {
    character: z.string().default("Dexter").describe("The name of the character to gather with (default: Dexter)")
  },
  handler: async (args: { character: string }) => {
    try {
      const { character } = args;
      
      const result = await gather(character);
      
      return {
        content: [
          {
            type: "text" as const,
            text: JSON.stringify(result, null, 2)
          }
        ]
      };
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred during gathering';
      throw new Error(errorMessage);
    }
  }
};