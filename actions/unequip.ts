import { handleAction } from "../utils/actions/actionHandler.ts";

/**
 * Unequips an item from the specified character and slot using the Artifacts MMO API.
 *
 * Calls the POST `/my/{name}/action/unequip` endpoint as described in the Artifacts MMO OpenAPI spec.
 *
 * @param slot - The equipment slot to unequip (e.g., "mainhand", "offhand", "head", etc.).
 * @param character - The name of the character to unequip from (default: "Dexter").
 * @remarks
 * - Initiates an unequip action for the specified character and slot.
 * - Sends a body with the slot as required by the API.
 * - Returns the API response or error.
 * @see {@link https://docs.artifactsmmo.com/}
 */
async function unequip(slot: string, character = "Dexter") {
  return await handleAction("unequip", character, { slot });
}

export default unequip;
