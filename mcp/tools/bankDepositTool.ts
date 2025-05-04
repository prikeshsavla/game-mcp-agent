import { z } from "zod";
import bankDeposit from "../../actions/bankDeposit.ts";
import { createTool, commonSchemaParams } from "../../utils/toolUtils.ts";

/**
 * A tool for depositing items into the bank in the Artifacts MMO game world.
 * 
 * @description
 * This tool allows a character to deposit items from their inventory into the bank.
 * It leverages the Artifacts MMO API to perform bank deposits and handles
 * potential errors that might occur during the process.
 * The character must be on a map with a bank to use this action.
 * 
 * @example
 * // Example usage:
 * const result = await bankDepositTool.handler({ 
 *   code: "copper_ore",
 *   quantity: 5,
 *   character: "Dexter" 
 * });
 * 
 * @returns An object containing:
 *  - content: Array of content objects with:
 *    - text: JSON string containing the deposit result
 * 
 * @throws Error if the deposit action fails or returns an error response
 */
export const bankDepositTool = createTool(
  "bank_deposit_item",
  "Deposits items from a character's inventory into the bank. \
Use this tool when you want to store items safely in the bank. \
The character must be at a bank location. \
The tool requires the item code and accepts optional quantity and character name.",
  {
    code: z.string().describe("The code of the item to deposit"),
    quantity: z.number().default(1).describe("The quantity to deposit (default: 1)"),
    character: commonSchemaParams.character
  },
  async ({ code, quantity, character }) => {
    return await bankDeposit(code, quantity, character);
  }
);