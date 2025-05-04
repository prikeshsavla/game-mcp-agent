import { z } from "zod";
import getMaps from "../../getMaps.ts";
import { MapContentType } from "../../utils/actions/constants.ts";
import { createTool } from "./utils.ts";

/**
 * A tool for retrieving information about maps in the Artifacts MMO game world.
 * 
 * @description
 * This tool provides access to map data from the Artifacts MMO API.
 * It can be filtered by content type (monster, resource, workshop, etc.)
 * and specific content codes.
 * 
 * @example
 * // Example usage:
 * const result = await getMapsInfoTool.handler({
 *   content_type: "resource",
 *   content_code: "copper_rocks"
 * });
 * 
 * @returns An object containing:
 *  - content: Array of content objects with:
 *    - text: JSON string containing the map data results
 * 
 * @throws Error if the map data fetch fails or returns an error response
 */
export const getMapsInfoTool = createTool(
  "get_maps_info",
  "Retrieves information about all available maps in the game world. Use this tool when you need details about game locations, available resources, NPCs, and other map-related information.",
  {
    content_type: z.enum([
      "monster", 
      "resource", 
      "workshop", 
      "bank", 
      "grand_exchange", 
      "tasks_master", 
      "npc"
    ]).optional().describe("Type of content on the map. Allowed values: 'monster', 'resource', 'workshop', 'bank', 'grand_exchange', 'tasks_master', 'npc'"),
    content_code: z.string().optional().describe("Specific content code to filter maps by")
  },
  async (args) => {
    return await getMaps(args);
  }
);