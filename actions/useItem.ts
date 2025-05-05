import { handleAction } from "../utils/actions/actionHandler.ts";

/**
 * Uses an item as a consumable.
 * This action applies the item's effect for consumable items like potions, food, etc.
 * 
 * @param itemCode - The code of the item to use.
 * @param character - The character name to use the item with (default: "Dexter").
 * @returns A promise that resolves to the use item result or an error object.
 */
async function useItem(itemCode: string, quantity = 1 ,character: string = "Dexter") {
  return await handleAction("use", character, { code: itemCode,quantity });
}

export default useItem;