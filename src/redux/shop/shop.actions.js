import { SEARCH_ITEM, FILTER_ITEM } from "./shop.types";

export const searchItem = (itemName, category) => ({
  type: SEARCH_ITEM,
  payload: { itemName, category: category.replace("/shop/", "") },
});

export const filterItem = (price, category) => ({
  type: FILTER_ITEM,
  payload: { price, category: category.replace("/shop/", "") },
});
