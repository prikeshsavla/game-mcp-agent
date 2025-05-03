import session from "../../../utils/session.ts";

/**
 * Fetches bank details for the authenticated account.
 *
 * Calls the GET `/my/bank` endpoint as described in the Artifacts MMO OpenAPI spec.
 *
 * @remarks
 * - Retrieves details about the user's bank.
 * - Returns the API response or error.
 * @see {@link https://docs.artifactsmmo.com/}
 */
async function bankDetails() {
  const path = `/my/bank`;
  try {
    const data = await session.getApi(path);
    return data;
  } catch (error) {
    return { error };
  }
}

export default bankDetails;
