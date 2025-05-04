import session from "./utils/session.ts";

/**
 * Crafts an item using the specified recipe code for the given character via the Artifacts MMO API.
 *
 * Calls the POST `/my/{name}/action/crafting` endpoint as described in the Artifacts MMO OpenAPI spec.
 *
 * @param code - The crafting recipe code to use.
 * @param character - The name of the character to craft with (default: "Dexter").
 * @remarks
 * - Initiates a crafting action for the specified character and recipe code.
 * - Sends a body with the code as required by the API.
 * - Prints the API response or error to the console.
 * @see {@link https://docs.artifactsmmo.com/}
 */
async function crafting(code: string, quantity = 1, character = "Dexter") {
  const path = `/my/${character}/action/crafting`;
  const body = { code, quantity };

  try {
    const data = await session.postApi(path, body);
    if (!data) {
      console.log("Failed to craft item");
      return;
    }
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

export default crafting;
