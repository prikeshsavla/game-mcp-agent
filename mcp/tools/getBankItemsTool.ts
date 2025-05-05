import getBankItems from "../../actions/async/getBankItems.ts";
import { createTool } from "../../utils/toolUtils.ts";

/**
 * A tool for retrieving bank items in the Artifacts MMO game world.
 * 
 * @description
 * This tool provides access to all items stored in a player's bank account
 * from the Artifacts MMO API.
 * 
 * @example
 * // Example usage:
 * const result = await getBankItemsTool.handler({});
 * 
 * @returns An object containing:
 *  - content: Array of content objects with:
 *    - text: JSON string containing the bank items information
 * 
 * @throws Error if the bank items lookup fails or returns an error response
 */
export const getBankItemsTool = createTool(
  "get_bank_items",
  "Retrieves a list of all items stored in the player's bank. \
Use this tool when you need to check what items are available in the bank.",
  {},
  async () => {
    return await getBankItems();
  }
);