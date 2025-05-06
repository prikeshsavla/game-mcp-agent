import { z } from "zod";
import loopAction from "../../actions/loopAction.ts";
import { commonSchemaParams, createTool } from "../../utils/toolUtils.ts";

/**
 * A tool for performing sequential actions (gathering or fighting) in the Artifacts MMO game world.
 *
 * @description
 * This tool allows a character to perform multiple actions in sequence.
 * It leverages the Artifacts MMO API to perform sequential actions and handles
 * potential errors that might occur during the process.
 *
 * @example
 * // Example usage:
 * const result = await loopActionTool.handler({
 *   times: 5,
 *   action: "fight",
 *   character: "Dexter"
 * });
 *
 * @returns An object containing:
 *  - content: Array of content objects with:
 *    - text: JSON string containing the loop action results
 *
 * @throws Error if the loop action fails or returns an error response
 */
export const loopActionTool = createTool(
  "loop_action",
  "Performs multiple actions (gathering or fighting) in sequence. \
Use this tool when you want a character to perform actions multiple times. \
The tool requires the number of times to perform actions, the type of action, \
and accepts an optional character name.",
  {
    times: z.number().min(1).describe(
      "Number of times to perform actions",
    ),
    action: z.enum(["gathering", "fight"]).describe(
      "Type of action to perform (e.g., 'gathering' or 'fight')",
    ),
    character: commonSchemaParams.character,
  },
  async ({ times, action, character }) => {
    return await loopAction(times, action, character);
  },
);
