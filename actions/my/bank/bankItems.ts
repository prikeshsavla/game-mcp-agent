import session from "../../../utils/session.ts";

/**
 * Fetches all items in the user's bank.
 *
 * Calls the GET `/my/bank/items` endpoint as described in the Artifacts MMO OpenAPI spec.
 *
 * @param itemCode - (Optional) Item code to search in your bank.
 * @param page - (Optional) Page number for pagination.
 * @param size - (Optional) Page size for pagination.
 * @remarks
 * - Retrieves a list of items in the user's bank, optionally filtered and paginated.
 * - Returns the API response or error.
 * @see {@link https://docs.artifactsmmo.com/}
 */
async function bankItems(
  itemCode?: string,
  page?: number,
  size?: number
) {
  const params = new URLSearchParams();
  if (itemCode) params.append("item_code", itemCode);
  if (page !== undefined) params.append("page", String(page));
  if (size !== undefined) params.append("size", String(size));
  const path = `/my/bank/items${params.toString() ? "?" + params.toString() : ""}`;
  try {
    const data = await session.getApi(path);
    return data;
  } catch (error) {
    return { error };
  }
}

export default bankItems;
