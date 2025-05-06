import session from "../../utils/session.ts";

/**
 * Retrieves all items stored in the account's bank.
 *
 * @returns A promise that resolves to the bank items or an error object.
 */
async function getBankItems() {
  try {
    const data = await session.getApi("/my/bank/items");
    return data;
  } catch (error) {
    return { error };
  }
}

export default getBankItems;
