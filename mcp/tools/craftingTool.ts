import { z } from "zod";
import craft from "../../craft.ts";

/**
 * A tool for crafting items in the Artifacts MMO game world.
 *
 * @description
 * This tool allows a character to craft items using recipes.
 * It leverages the Artifacts MMO API to perform crafting and handles
 * potential errors that might occur during the process.
 *
 * @example
 * // Example usage:
 * const result = await craftingTool.handler({
 *   code: "wooden_sword",
 *   quantity: 1,
 *   character: "Dexter"
 * });
 *
 * @returns An object containing:
 *  - content: Array of content objects with:
 *    - text: JSON string containing the crafting result
 *
 * @throws Error if the crafting action fails or returns an error response
 */
export const craftingTool = {
  name: "craft_item",
  description: "Crafts items using recipes in the game. \
Use this tool when you want a character to craft an item using a recipe code. \
The tool requires a recipe code and accepts optional quantity and character name.",
  schema: {
    code: z.string().describe("The crafting recipe code to use"),
    quantity: z.number().default(1).describe(
      "The quantity to craft (default: 1)",
    ),
    character: z.string().default("Dexter").describe(
      "The name of the character to craft with (default: Dexter)",
    ),
  },
  handler: async (
    args: { code: string; quantity: number; character: string },
  ) => {
    const { code, quantity, character } = args;

    const result = await craft(code, quantity, character);
    return {
      content: [
        {
          type: "text" as const,
            text: JSON.stringify(result, null, 2)
        },
      ],
    };
  },
};
