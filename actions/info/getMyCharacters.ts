import session from "../../utils/session.ts";

/**
 * Retrieves a list of all characters associated with the authenticated account.
 * 
 * @returns A promise that resolves to an array of character details or an error object.
 */
async function getMyCharacters() {
  try {
    const data = await session.getApi('/my/characters');
    return data;
  } catch (error) {
    return { error };
  }
}

export default getMyCharacters;