import chainMethods from "../utils/chainMethods.ts";
import { handleAction } from "../utils/actions/actionHandler.ts";

/**
 * Loops gather calls for a character using chainMethods.
 *
 * Performs gathering operations multiple times in sequence, with each operation
 * handled as a separate API call.
 *
 * @param times - Number of gather calls to make in sequence.
 * @param action - Action to perform (default: "gathering"), e.g. gathering, fight
 * @param character - The character name to gather with (default: "Dexter").
 * @returns A promise that resolves to an array containing the results of all gather operations.
 * @remarks
 * - Uses chainMethods to manage sequential API calls with proper timing.
 * - Each gathering operation is executed after the previous one completes.
 * - Returns all results in an array when all operations are complete.
 */
async function loopAction(
  times: number,
  action: string = "gathering",
  character: string = "Dexter",
) {
  // Validate that the action is either "gathering" or "fight"
  const validActions = ["gathering", "fight"];
  if (!validActions.includes(action)) {
    throw new Error(
      `Invalid action: ${action}. Allowed actions are: ${
        validActions.join(", ")
      }`,
    );
  }
  const calls = Array.from({ length: times }, (_, i) => ({
    description: `${action} call #${i + 1}/${times} for ${character}`,
    method: () => handleAction(action, character),
  }));

  return await chainMethods(calls);
}

export default loopAction;
