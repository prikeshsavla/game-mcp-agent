import { z } from "zod";
import equip from "../../actions/equip.ts";
import { commonSchemaParams, createTool } from "../../utils/toolUtils.ts";

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
export const equipTool = createTool(
  "equip_item",
  "Equips an item to the specified slot for a character. \
Use this tool when you want a character to equip an item to a specific equipment slot. \
The tool requires the item code, slot name, and accepts an optional character name.",
  {
    code: z.string().describe("The code of the item to equip"),
    slot: z.string().describe(
      "The equipment slot to equip the item to (e.g., 'mainhand', 'offhand', 'head', etc.)",
    ),
    character: commonSchemaParams.character,
  },
  async ({ code, slot, character }) => {
    return await equip(code, slot, character);
  },
);
