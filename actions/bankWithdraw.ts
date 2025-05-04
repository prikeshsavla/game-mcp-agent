import { handleAction } from "../utils/actions/actionHandler.ts";

/**
 * Withdraws an item from the bank into a character's inventory.
 * The character must be on a map with a bank to use this action.
 * 
 * @param itemCode - The code of the item to withdraw.
 * @param quantity - The quantity of items to withdraw (default: 1).
 * @param character - The character name to perform the action with (default: "Dexter").
 * @returns A promise that resolves to the withdrawal result or an error object.
 */
async function bankWithdraw(itemCode: string, quantity: number = 1, character: string = "Dexter") {
  return await handleAction("bank/withdraw", character, { 
    code: itemCode,
    quantity
  });
}

export default bankWithdraw;