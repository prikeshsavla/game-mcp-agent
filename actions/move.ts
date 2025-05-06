import { handleAction } from "../utils/actions/actionHandler.ts";

/**
 * Moves your character to a new map position using the Artifacts MMO API.
 *
 * Calls the POST `/my/{name}/action/move` endpoint as described in the Artifacts MMO OpenAPI spec.
 *
 * @param x - The X coordinate to move to (default: 0).
 * @param y - The Y coordinate to move to (default: 0).
 * @param character - The name of the character to move (default: "Dexter").
 * @remarks
 * - Moves a character on the map using the map's X and Y position.
 * - Sends the coordinates in the request body as required by the API.
 * - Returns the API response or error.
 * @see {@link https://docs.artifactsmmo.com/}
 */
async function move(x = 0, y = 0, character = "Dexter") {
  return await handleAction("move", character, { x, y });
}

export default move;
