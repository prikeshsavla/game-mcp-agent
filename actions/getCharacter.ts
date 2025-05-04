import { log } from "node:console";
import session from "../utils/session.ts";

/**
 * Retrieves detailed information about a character by name.
 * 
 * @param characterName - The name of the character to retrieve information for.
 * @returns A promise that resolves to the character details or an error object.
 */
async function getCharacter(character: string = "Dexter") {
  try {
    const data = await session.getApi(`/characters/${character}`);
    return data;
  } catch (error) {
    return { error };
  }
}

console.log(await getCharacter("Dexter"));


export default getCharacter;