import session from "./utils/session.ts";

/**
 * Fetches all map entries from the Artifacts MMO API.
 * 
 * Calls the GET `/maps` endpoint as described in the Artifacts MMO OpenAPI spec.
 * 
 * @param options - Optional parameters to filter the maps.
 * @param options.content_type - Type of content on the map. Allowed values: 'monster', 'resource', 'workshop', 'bank', 'grand_exchange', 'tasks_master', 'npc'
 * @param options.content_code - Content code on the map.
 * @returns A promise that resolves to an array of maps data.
 * @remarks
 * - Retrieves details about all available maps in the game.
 * - Maps contain information about locations, resources, NPCs, and more.
 * - Prints the API response or error to the console.
 * @see {@link https://docs.artifactsmmo.com/}
 */
async function getMaps(options?: { 
  content_type?: string,
  content_code?: string
}) {
  const path = "/maps";
  
  // Build query parameters if options are provided
  let queryParams = "";
  if (options) {
    const params = new URLSearchParams();
    if (options.content_type) {
      // Validate content_type value
      const validContentTypes = ['monster', 'resource', 'workshop', 'bank', 'grand_exchange', 'tasks_master', 'npc'];
      if (!validContentTypes.includes(options.content_type)) {
        throw new Error(`Invalid content_type: ${options.content_type}. Must be one of: ${validContentTypes.join(', ')}`);
      }
      params.append("content_type", options.content_type);
    }
    if (options.content_code) {
      params.append("content_code", options.content_code);
    }
    const paramsString = params.toString();
    if (paramsString) {
      queryParams = `?${paramsString}`;
    }
  }

  try {
    const data = await session.getApi(`${path}${queryParams}`);
    if (!data) {
      console.log("Failed to fetch maps data");
      return;
    }
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export default getMaps;