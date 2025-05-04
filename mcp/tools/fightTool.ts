import { z } from "zod";
import fight from "../../fight.ts";

/**
 * A tool for initiating combat with a target in the Artifacts MMO game world.
 *
 * @description
 * This tool initiates a fight action for a character.
 * It leverages the Artifacts MMO API to perform combat and handles
 * potential errors that might occur during the process.
 *
 * @example
 * // Example usage:
 * const result = await fightTool.handler({
 *   character: "Dexter"
 * });
 *
 * @returns An object containing:
 *  - content: Array of content objects with:
 *    - text: JSON string containing the fight result, including success status and details
 *
 * @throws Error if the fight action fails or returns an error response
 */
export const fightTool = {
  name: "fight",
  description: "Initiates combat for the character in the game. \
Use this tool when a character needs to fight nearby enemies. \
The tool accepts an optional character name.",
  schema: {
    character: z.string().default("Dexter").describe(
      "The name of the character who will fight (default: Dexter)",
    ),
  },
  handler: async (args: { character: string }) => {
    const { character } = args;

    const result = await fight(character);

    return {
      content: [
        {
          type: "text" as const,
            text: JSON.stringify(result, null, 2)
        },
      ],
    };
  },
};
