import { z } from "zod";
import unequip from "../../actions/unequip.ts";
import { createTool, commonSchemaParams } from "../../utils/toolUtils.ts";

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
export const unequipTool = createTool(
  "unequip_item",
  "Unequips an item from the specified slot for a character. \
Use this tool when you want a character to remove equipment from a specific slot. \
The tool requires a slot name and accepts an optional character name.",
  {
    slot: z.string().describe("The equipment slot to unequip (e.g., 'mainhand', 'offhand', 'head', etc.)"),
    character: commonSchemaParams.character
  },
  async ({ slot, character }) => {
    return await unequip(slot, character);
  }
);