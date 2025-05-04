import { z } from "zod";
import useItem from "../../actions/useItem.ts";
import { createTool, commonSchemaParams } from "../../utils/toolUtils.ts";

/**
 * A tool for using consumable items in the Artifacts MMO game world.
 * 
 * @description
 * This tool allows a character to use consumable items like potions, food, etc.
 * It leverages the Artifacts MMO API to apply the item's effect and handles
 * potential errors that might occur during the process.
 * 
 * @example
 * // Example usage:
 * const result = await useItemTool.handler({ 
 *   code: "health_potion",
 *   character: "Dexter" 
 * });
 * 
 * @returns An object containing:
 *  - content: Array of content objects with:
 *    - text: JSON string containing the use item result
 * 
 * @throws Error if the use item action fails or returns an error response
 */
export const useItemTool = createTool(
  "use_item",
  "Uses a consumable item from the character's inventory. \
Use this tool when you want a character to consume an item for its effects like healing potions or food. \
The tool requires the item code and accepts an optional character name.",
  {
    code: z.string().describe("The code of the item to use"),
    character: commonSchemaParams.character
  },
  async ({ code, character }) => {
    return await useItem(code, character);
  }
);