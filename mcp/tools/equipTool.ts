import { z } from "zod";
import equip from "../../equip.ts";

/**
 * A tool for equipping items on a character in the Artifacts MMO game world.
 * 
 * @description
 * This tool allows a character to equip an item to a specific equipment slot.
 * It leverages the Artifacts MMO API to perform equipping and handles
 * potential errors that might occur during the process.
 * 
 * @example
 * // Example usage:
 * const result = await equipTool.handler({ 
 *   code: "wooden_sword",
 *   slot: "mainhand",
 *   character: "Dexter" 
 * });
 * 
 * @returns An object containing:
 *  - content: Array of content objects with:
 *    - text: JSON string containing the equip result
 * 
 * @throws Error if the equip action fails or returns an error response
 */
export const equipTool = {
  name: "equip_item",
  description: "Equips an item to the specified slot for a character. \
Use this tool when you want a character to equip an item to a specific equipment slot. \
The tool requires the item code, slot name, and accepts an optional character name.",
  schema: {
    code: z.string().describe("The code of the item to equip"),
    slot: z.string().describe("The equipment slot to equip the item to (e.g., 'mainhand', 'offhand', 'head', etc.)"),
    character: z.string().default("Dexter").describe("The name of the character to equip (default: Dexter)")
  },
  handler: async (args: { code: string; slot: string; character: string }) => {
    try {
      const { code, slot, character } = args;
      
      const result = await equip(code, slot, character);
   
      return {
        content: [
          {
            type: "text" as const,
             text: JSON.stringify(result, null, 2)
          }
        ]
      };
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred during equipping';
      throw new Error(errorMessage);
    }
  }
};