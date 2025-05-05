import session from "../../utils/session.ts";
import { API_ENDPOINTS, VALID_MAP_CONTENT_TYPES, MapContentType } from "../../utils/actions/constants.ts";

/**
 * Fetches all map entries from the Artifacts MMO API.
 * 
 * Calls the GET `/maps` endpoint as described in the Artifacts MMO OpenAPI spec.
 * 
 * @param options - Optional parameters to filter the maps.
 * @param options.content_type - Type of content on the map.
 * @param options.content_code - Content code on the map.
 * @returns A promise that resolves to an array of maps data.
 * @remarks
 * - Retrieves details about all available maps in the game.
 * - Maps contain information about locations, resources, NPCs, and more.
 * @see {@link https://docs.artifactsmmo.com/}
 */
async function getMaps(options?: { 
  content_type?: MapContentType,
  content_code?: string
}) {
  // Build query parameters if options are provided
  let queryParams = "";
  
  if (options) {
    const params = new URLSearchParams();
    
    if (options.content_type) {
      // Validate content_type value using our constants
      if (!VALID_MAP_CONTENT_TYPES.includes(options.content_type as MapContentType)) {
        throw new Error(
          `Invalid content_type: ${options.content_type}. Must be one of: ${VALID_MAP_CONTENT_TYPES.join(', ')}`
        );
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
    const data = await session.getApi(`${API_ENDPOINTS.MAPS}${queryParams}`);
    return data;
  } catch (error) {
    return { error };
  }
}

export default getMaps;