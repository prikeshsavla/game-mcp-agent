import { handleAction } from "../utils/actions/actionHandler.ts";

/**
 * Deposits gold into the character's bank.
 * The character must be on a map with a bank to use this action.
 *
 * @param amount - The amount of gold to deposit.
 * @param character - The character name to perform the action with (default: "Dexter").
 * @returns A promise that resolves to the gold deposit result or an error object.
 */
async function bankDepositGold(amount: number, character: string = "Dexter") {
  return await handleAction("bank/deposit/gold", character, {
    quantity: amount,
  });
}

export default bankDepositGold;
