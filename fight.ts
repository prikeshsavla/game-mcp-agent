import { handleAction } from "./utils/actions/actionHandler.ts";

/**
 * Initiates a fight with a target using the Artifacts MMO API.
 *
 * Calls the POST `/my/{name}/action/fight` endpoint as described in the Artifacts MMO OpenAPI spec.
 *
 * @param character - The name of the character initiating the fight (default: "Dexter").
 * @remarks
 * - Initiates combat with the specified target.
 * - Sends the target in the request body as required by the API.
 * - Returns the API response or error.
 * @see {@link https://docs.artifactsmmo.com/}
 */
async function fight(character = "Dexter") {
  return await handleAction("fight", character);
}

export default fight;
