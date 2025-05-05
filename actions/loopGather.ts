import chainMethods from "../utils/chainMethods.ts";
import { handleAction } from "../utils/actions/actionHandler.ts";

/**
 * Loops gather calls for a character using chainMethods.
 * 
 * Performs gathering operations multiple times in sequence, with each operation
 * handled as a separate API call.
 * 
 * @param times - Number of gather calls to make in sequence.
 * @param character - The character name to gather with (default: "Dexter").
 * @returns A promise that resolves to an array containing the results of all gather operations.
 * @remarks
 * - Uses chainMethods to manage sequential API calls with proper timing.
 * - Each gathering operation is executed after the previous one completes.
 * - Returns all results in an array when all operations are complete.
 */
async function loopGather(times: number, action: string = "gathering", character: string = "Dexter") {
  const calls = Array.from({ length: times }, (_, i) => ({
    description: `${action} call #${i + 1}/${times} for ${character}`,
    method: () => handleAction(action, character),
  }));

  return await chainMethods(calls);
}

export default loopGather;
