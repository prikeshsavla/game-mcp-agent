import { handleAction } from "./utils/actions/actionHandler.ts";

/**
 * Harvests a resource on the character's map using the Artifacts MMO API.
 *
 * Calls the POST `/my/{name}/action/gathering` endpoint as described in the Artifacts MMO OpenAPI spec.
 *
 * @param character - The name of the character to gather with (default: "Dexter").
 * @remarks
 * - Initiates a gathering action for the specified character.
 * - Sends an empty body as required by the API.
 * - Returns the API response or error.
 * @see {@link https://docs.artifactsmmo.com/}
 */
async function gather(character = "Dexter") {
  return await handleAction("gathering", character);
}

export default gather;
