import { handleAction } from "../utils/actions/actionHandler.ts";

/**
 * Crafts an item using the specified recipe code for the given character via the Artifacts MMO API.
 *
 * Calls the POST `/my/{name}/action/crafting` endpoint as described in the Artifacts MMO OpenAPI spec.
 *
 * @param code - The crafting recipe code to use.
 * @param quantity - The quantity to craft (default: 1).
 * @param character - The name of the character to craft with (default: "Dexter").
 * @remarks
 * - Initiates a crafting action for the specified character and recipe code.
 * - Sends a body with the code as required by the API.
 * - Returns the API response or error.
 * @see {@link https://docs.artifactsmmo.com/}
 */
async function craft(code: string, quantity = 1, character = "Dexter") {
  return await handleAction("crafting", character, { code, quantity });
}

export default craft;
