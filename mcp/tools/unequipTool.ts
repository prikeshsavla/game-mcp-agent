import { z } from "zod";
import unequip from "../../unequip.ts";

/**
 * A tool for unequipping items from a character in the Artifacts MMO game world.
 * 
 * @description
 * This tool allows a character to unequip an item from a specific equipment slot.
 * It leverages the Artifacts MMO API to perform unequipping and handles
 * potential errors that might occur during the process.
 * 
 * @example
 * // Example usage:
 * const result = await unequipTool.handler({ 
 *   slot: "mainhand",
 *   character: "Dexter" 
 * });
 * 
 * @returns An object containing:
 *  - content: Array of content objects with:
 *    - text: JSON string containing the unequip result
 * 
 * @throws Error if the unequip action fails or returns an error response
 */
export const unequipTool = {
  name: "unequip_item",
  description: "Unequips an item from the specified slot for a character. \
Use this tool when you want a character to remove equipment from a specific slot. \
The tool requires a slot name and accepts an optional character name.",
  schema: {
    slot: z.string().describe("The equipment slot to unequip (e.g., 'mainhand', 'offhand', 'head', etc.)"),
    character: z.string().default("Dexter").describe("The name of the character to unequip from (default: Dexter)")
  },
  handler: async (args: { slot: string; character: string }) => {
    try {
      const { slot, character } = args;
      
      const result = await unequip(slot, character);
      
      return {
        content: [
          {
            type: "text" as const,
            text: JSON.stringify(result, null, 2)
          }
        ]
      };
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred during unequipping';
      throw new Error(errorMessage);
    }
  }
};