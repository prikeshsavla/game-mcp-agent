import session from "../utils/session.ts";

/**
 * Retrieves details about the account's bank, including gold and storage slots.
 * 
 * @returns A promise that resolves to the bank details or an error object.
 */
async function getBankDetails() {
  try {
    const data = await session.getApi('/my/bank');
    return data;
  } catch (error) {
    return { error };
  }
}

export default getBankDetails;