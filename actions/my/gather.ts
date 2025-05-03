import session from "../../utils/session.ts";

/**
 * Harvests a resource on the character's map using the Artifacts MMO API.
 *
 * Calls the POST `/my/{name}/action/gathering` endpoint as described in the Artifacts MMO OpenAPI spec.
 *
 * @param character - The name of the character to gather with (default: "Dexter").
 * @remarks
 * - Initiates a gathering action for the specified character.
 * - Sends an empty body as required by the API.
 * - Prints the API response or error to the console.
 * @see {@link https://docs.artifactsmmo.com/}
 */
async function gather(character = "Dexter") {
  const path = `/my/${character}/action/gathering`;
  const body = {};

  try {
    const data = await session.postApi(path, body);
    if (!data) {
      console.log("Failed to gather resource");
      return;
    }
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

export default gather;
