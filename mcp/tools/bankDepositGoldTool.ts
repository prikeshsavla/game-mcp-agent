import { z } from "zod";
import bankDepositGold from "../../actions/bankDepositGold.ts";
import { createTool, commonSchemaParams } from "../../utils/toolUtils.ts";

/**
 * A tool for depositing gold into a character's bank in the Artifacts MMO game world.
 * 
 * @description
 * This tool allows a character to deposit gold into their bank account.
 * It leverages the Artifacts MMO API to perform bank gold deposits and handles
 * potential errors that might occur during the process.
 * The character must be on a map with a bank to use this action.
 * 
 * @example
 * // Example usage:
 * const result = await bankDepositGoldTool.handler({ 
 *   amount: 100,
 *   character: "Dexter" 
 * });
 * 
 * @returns An object containing:
 *  - content: Array of content objects with:
 *    - text: JSON string containing the gold deposit result
 * 
 * @throws Error if the gold deposit action fails or returns an error response
 */
export const bankDepositGoldTool = createTool(
  "bank_deposit_gold",
  "Deposits gold into the character's bank. \
Use this tool when you want to store gold safely in the bank. \
The character must be on a map with a bank to use this action. \
The tool requires the amount of gold to deposit and accepts an optional character name.",
  {
    amount: z.number().positive().describe("The amount of gold to deposit"),
    character: commonSchemaParams.character
  },
  async ({ amount, character }) => {
    return await bankDepositGold(amount, character);
  }
);