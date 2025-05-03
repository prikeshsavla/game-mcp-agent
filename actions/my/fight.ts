import session from "../../utils/session.ts";

/**
 * Initiates a fight with a target using the Artifacts MMO API.
 *
 * Calls the POST `/my/{name}/action/fight` endpoint as described in the Artifacts MMO OpenAPI spec.
 *
 * @param character - The name of the character initiating the fight (default: "Dexter").
 * @remarks
 * - Initiates combat with the specified target.
 * - Sends the target in the request body as required by the API.
 * - Prints the API response or error to the console.
 * @see {@link https://docs.artifactsmmo.com/}
 */
async function fight(character = "Dexter") {
  const path = `/my/${character}/action/fight`;
  const body = { };

  try {
    const data = await session.postApi(path, body);
    if (!data) {
      console.log("Failed to initiate fight");
      return;
    }
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

export default fight;
