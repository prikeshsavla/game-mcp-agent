import session from "../session.ts";

/**
 * Generic action handler for common API actions in Artifacts MMO
 * 
 * @param action - The action type (move, rest, fight, etc)
 * @param character - The character name to perform the action with
 * @param payload - The action-specific payload data
 * @returns The API response or error object
 */
export async function handleAction<T = unknown>(
  action: string,
  character = "Dexter",
  payload: Record<string, unknown> = {}
): Promise<T | { error: unknown }> {
  const path = `/my/${character}/action/${action}`;

  try {
    const data = await session.postApi(path, payload);
    return data as T;
  } catch (error) {
    return { error };
  }
}

/**
 * Action types supported by the API
 */
export type ActionType = 
  | "move"
  | "rest" 
  | "fight" 
  | "gathering" 
  | "equip" 
  | "unequip" 
  | "crafting";

/**
 * Type definitions for action payloads
 */
export interface ActionPayloads {
  move: { x: number; y: number };
  rest: Record<string, never>;
  fight: Record<string, never>;
  gathering: Record<string, never>;
  equip: { code: string; slot: string };
  unequip: { slot: string };
  crafting: { code: string; quantity: number };
}