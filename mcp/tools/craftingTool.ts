import { z } from "zod";
import crafting from "../../crafting.ts";

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
    quantity: z.number().default(1).describe("The quantity to craft (default: 1)"),
    character: z.string().default("Dexter").describe("The name of the character to craft with (default: Dexter)")
  },
  handler: async (args: { code: string; quantity: number; character: string }) => {
    try {
      const { code, quantity, character } = args;
      
      // Store console.log output
      const originalConsoleLog = console.log;
      let response: any = null;
      
      console.log = (data: any) => {
        response = data;
        originalConsoleLog(data);
      };
      
      await crafting(code, quantity, character);
      
      // Restore original console.log
      console.log = originalConsoleLog;
      
      if (!response || response === "Failed to craft item") {
        throw new Error("Failed to craft item");
      }
      
      return {
        content: [
          {
            type: "text" as const,
            text: JSON.stringify({
              success: true,
              message: `Successfully crafted ${quantity} of ${code}`,
              details: response
            }, null, 2)
          }
        ]
      };
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred during crafting';
      throw new Error(errorMessage);
    }
  }
};