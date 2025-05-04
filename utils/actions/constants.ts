/**
 * API endpoint constants for Artifacts MMO
 */

/**
 * Base action path creator
 */
export const createActionPath = (character: string, action: string): string => 
  `/my/${character}/action/${action}`;

/**
 * API endpoints for character actions
 */
export const API_ENDPOINTS = {
  MOVE: (character: string) => createActionPath(character, "move"),
  REST: (character: string) => createActionPath(character, "rest"),
  FIGHT: (character: string) => createActionPath(character, "fight"),
  GATHERING: (character: string) => createActionPath(character, "gathering"),
  EQUIP: (character: string) => createActionPath(character, "equip"),
  UNEQUIP: (character: string) => createActionPath(character, "unequip"),
  CRAFTING: (character: string) => createActionPath(character, "crafting"),
  POSITION: (character: string) => `/my/${character}/position`,
  MAPS: "/maps",
};

/**
 * Valid content types for map filtering
 */
export const VALID_MAP_CONTENT_TYPES = [
  'monster', 
  'resource', 
  'workshop', 
  'bank', 
  'grand_exchange', 
  'tasks_master', 
  'npc'
] as const;

export type MapContentType = typeof VALID_MAP_CONTENT_TYPES[number];