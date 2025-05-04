import { handleAction } from "../utils/actions/actionHandler.ts";

/**
 * Rests your character to recover hit points using the Artifacts MMO API.
 *
 * Calls the POST `/my/{name}/action/rest` endpoint as described in the Artifacts MMO OpenAPI spec.
 *
 * @param character - The name of the character to rest (defaults to "Dexter").
 * @remarks
 * - Recovers hit points by resting (1 second per 5 HP, minimum 3 seconds).
 * - Sends an empty body as required by the API.
 * - Returns the API response or error.
 * @see {@link https://docs.artifactsmmo.com/}
 */
async function rest(character = "Dexter") {
  return await handleAction("rest", character);
}

export default rest;
