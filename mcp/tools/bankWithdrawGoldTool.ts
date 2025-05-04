import { z } from "zod";
import bankWithdrawGold from "../../actions/bankWithdrawGold.ts";
import { createTool, commonSchemaParams } from "../../utils/toolUtils.ts";

/**
 * A tool for withdrawing gold from a character's bank in the Artifacts MMO game world.
 * 
 * @description
 * This tool allows a character to withdraw gold from their bank account into their inventory.
 * It leverages the Artifacts MMO API to perform bank gold withdrawals and handles
 * potential errors that might occur during the process.
 * The character must be on a map with a bank to use this action.
 * 
 * @example
 * // Example usage:
 * const result = await bankWithdrawGoldTool.handler({ 
 *   amount: 100,
 *   character: "Dexter" 
 * });
 * 
 * @returns An object containing:
 *  - content: Array of content objects with:
 *    - text: JSON string containing the gold withdrawal result
 * 
 * @throws Error if the gold withdrawal action fails or returns an error response
 */
export const bankWithdrawGoldTool = createTool(
  "bank_withdraw_gold",
  "Withdraws gold from the bank into a character's inventory. \
Use this tool when you want to retrieve gold from the bank. \
The character must be on a map with a bank to use this action. \
The tool requires the amount of gold to withdraw and accepts an optional character name.",
  {
    amount: z.number().positive().describe("The amount of gold to withdraw"),
    character: commonSchemaParams.character
  },
  async ({ amount, character }) => {
    return await bankWithdrawGold(amount, character);
  }
);