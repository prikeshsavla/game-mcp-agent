import session from "../../utils/session.ts";

/**
 * Retrieves the action logs history for all characters on the account.
 * Returns the last 100 actions across all characters.
 * 
 * @returns A promise that resolves to the logs data or an error object.
 */
async function getCharacterLogs() {
  try {
    const data = await session.getApi('/my/logs');
    return data;
  } catch (error) {
    return { error };
  }
}

export default getCharacterLogs;