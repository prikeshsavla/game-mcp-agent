import { handleAction } from "../utils/actions/actionHandler.ts";

/**
 * Deposits an item into the character's bank.
 * The character must be on a map with a bank to use this action.
 *
 * @param itemCode - The code of the item to deposit.
 * @param quantity - The quantity of items to deposit (default: 1).
 * @param character - The character name to perform the action with (default: "Dexter").
 * @returns A promise that resolves to the deposit result or an error object.
 */
async function bankDeposit(
  itemCode: string,
  quantity: number = 1,
  character: string = "Dexter",
) {
  return await handleAction("bank/deposit", character, {
    code: itemCode,
    quantity,
  });
}

export default bankDeposit;
