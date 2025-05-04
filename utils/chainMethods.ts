import crafting from "../craft.ts";
import loopGather from "../loopGather.ts";
import move from "../move.ts";

type MethodCall = {
  description: string;
  // deno-lint-ignore no-explicit-any
  method: () => Promise<any>;
};

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Chains method calls, printing their description and waiting for the returned waitSeconds before each next call.
 * @param calls - Array of objects with description and async method to call in order.
 */
async function chainMethods(calls: MethodCall[]) {
  for (let i = 0; i < calls.length; i++) {
    const { description, method } = calls[i];
    console.log(`Calling #${i + 1}: ${description}`);
    const result = await method();
    console.log("Result:", result);

    const waitSeconds = result?.cooldown?.total_seconds ?? 0;
    if (i < calls.length - 1) {
      console.log(
        `Next method will be called in ${waitSeconds} seconds.`,
      );
      if (waitSeconds > 0) {
        await sleep(waitSeconds * 1000);
      }
    } else {
      return result;
    }
  }
}

export default chainMethods;
