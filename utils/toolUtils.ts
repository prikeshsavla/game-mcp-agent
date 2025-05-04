import { z } from "zod";

/**
 * A helper function to format tool responses consistently
 * @param result The result object to format in the response
 * @returns Formatted response object with standardized structure
 */
export function formatToolResponse(result: any) {
  return {
    content: [
      {
        type: "text" as const,
        text: JSON.stringify(result, null, 2)
      }
    ]
  };
}

/**
 * A factory function to create tool objects with consistent structure
 * @param name The name of the tool
 * @param description The description of the tool
 * @param schema The Zod schema for tool parameters
 * @param handler The handler function for the tool
 * @returns A structured tool object
 */
export function createTool<T extends Record<string, z.ZodType>, R>(
  name: string,
  description: string,
  schema: T,
  handler: (args: z.infer<z.ZodObject<T>>) => Promise<R>
) {
  return {
    name,
    description,
    schema,
    handler: async (args: z.infer<z.ZodObject<T>>) => {
      const result = await handler(args);
      return formatToolResponse(result);
    }
  };
}

/**
 * Common schema parameters used across multiple tools
 */
export const commonSchemaParams = {
  character: z.string().default("Dexter").describe("The name of the character (default: Dexter)")
};