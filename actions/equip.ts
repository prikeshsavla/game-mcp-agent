import { handleAction } from "../utils/actions/actionHandler.ts";

/**
 * Equips an item to a specified slot for the given character using the Artifacts MMO API.
 *
 * Calls the POST `/my/{name}/action/equip` endpoint as described in the Artifacts MMO OpenAPI spec.
 *
 * @param code - The code of the item to equip.
 * @param slot - The equipment slot to equip the item to (e.g., "mainhand", "offhand", "head", etc.).
 * @param character - The name of the character to equip (default: "Dexter").
 * @remarks
 * - Initiates an equip action for the specified character, item code, and slot.
 * - Sends a body with the code and slot as required by the API.
 * - Returns the API response or error.
 * @see {@link https://docs.artifactsmmo.com/}
 */
async function equip(code: string, slot: string, character = "Dexter") {
  return await handleAction("equip", character, { code, slot });
}

export default equip;
