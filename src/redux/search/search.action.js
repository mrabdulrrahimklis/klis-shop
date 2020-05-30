import { searchActionTypes } from "./search.types";

export const searchItem = (item) => ({
  type: searchActionTypes.SEARCH_ITEM,
  payload: item,
});
