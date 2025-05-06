import { handleAction } from "../utils/actions/actionHandler.ts";

/**
 * Withdraws gold from the bank into a character's inventory.
 * The character must be on a map with a bank to use this action.
 *
 * @param amount - The amount of gold to withdraw.
 * @param character - The character name to perform the action with (default: "Dexter").
 * @returns A promise that resolves to the gold withdrawal result or an error object.
 */
async function bankWithdrawGold(amount: number, character: string = "Dexter") {
  return await handleAction("bank/withdraw/gold", character, {
    quantity: amount,
  });
}

export default bankWithdrawGold;
