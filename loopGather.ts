
import gather from "./gather.ts";
import chainMethods from "./utils/chainMethods.ts";


/**
 * Executes the gather function repeatedly with a fixed delay between iterations.
 * 
 * This function recursively calls itself to perform gathering operations multiple times.
 * Each gathering operation is followed by a 25-second delay before the next iteration.
 * The function will stop once the maximum number of iterations is reached.
 * 
 * @param currentIteration - The current iteration count, starting at 0
 * @param maxIterations - The maximum number of iterations to perform, defaults to 10
 * @returns void
 * 
 * @example
 * // Gather resources 5 times with 25 seconds between each attempt
 * loopGather(0, 5);
 */


/**
 * Loops gather calls for a character using chainMethods.
 * @param character - The character name to gather with.
 * @param times - Number of gather calls to make in sequence.
 */
async function loopGather(times: number, character: string = "Dexter") {
  const calls = Array.from({ length: times }, (_, i) => ({
    description: `Gather call #${i + 1} for ${character}`,
    method: () => gather(character),
  }));

  return await chainMethods(calls);
}

export default loopGather;
