import getCharacterLogs from "../../actions/async/getCharacterLogs.ts";
import { createTool } from "../../utils/toolUtils.ts";

/**
 * A tool for retrieving action logs history for all characters on the account.
 * 
 * @description
 * This tool provides access to the last 100 actions performed across all characters.
 * It leverages the Artifacts MMO API to fetch log data and handles
 * potential errors that might occur during the process.
 * 
 * @example
 * // Example usage:
 * const result = await getCharacterLogsTool.handler({});
 * 
 * @returns An object containing:
 *  - content: Array of content objects with:
 *    - text: JSON string containing the character logs information
 * 
 * @throws Error if the logs lookup fails or returns an error response
 */
export const getCharacterLogsTool = createTool(
  "get_character_logs",
  "Retrieves the action logs history for all characters on the account. \
Returns the last 100 actions across all characters. \
Use this tool when you need to review recent character activities.",
  {},
  async () => {
    return await getCharacterLogs();
  }
);