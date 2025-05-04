import { z } from "zod";
import bankWithdraw from "../../actions/bankWithdraw.ts";
import { createTool, commonSchemaParams } from "../../utils/toolUtils.ts";

/**
 * A tool for withdrawing items from the bank in the Artifacts MMO game world.
 * 
 * @description
 * This tool allows a character to withdraw items from the bank to their inventory.
 * It leverages the Artifacts MMO API to perform bank withdrawals and handles
 * potential errors that might occur during the process.
 * The character must be on a map with a bank to use this action.
 * 
 * @example
 * // Example usage:
 * const result = await bankWithdrawTool.handler({ 
 *   code: "copper_ore",
 *   quantity: 5,
 *   character: "Dexter" 
 * });
 * 
 * @returns An object containing:
 *  - content: Array of content objects with:
 *    - text: JSON string containing the withdrawal result
 * 
 * @throws Error if the withdraw action fails or returns an error response
 */
export const bankWithdrawTool = createTool(
  "bank_withdraw_item",
  "Withdraws items from the bank to a character's inventory. \
Use this tool when you want to retrieve items from the bank. \
The character must be at a bank location. \
The tool requires the item code and accepts optional quantity and character name.",
  {
    code: z.string().describe("The code of the item to withdraw"),
    quantity: z.number().default(1).describe("The quantity to withdraw (default: 1)"),
    character: commonSchemaParams.character
  },
  async ({ code, quantity, character }) => {
    return await bankWithdraw(code, quantity, character);
  }
);