import SHOP_DATA from "../../redux/shop/shop.data";
import { SEARCH_ITEM, FILTER_ITEM } from "./shop.types";
import _ from "lodash";

const INITIAL_STATE = {
  collections: SHOP_DATA,
  filteredItems: [],
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH_ITEM:
      return {
        ...state,
        filteredItems: state.collections[action.payload.category].items.filter(
          (item) => {
            const { name } = item;
            return _.startsWith(
              _.toLower(name),
              _.toLower(action.payload.itemName)
            );
          }
        ),
      };
    case FILTER_ITEM:
      return {
        ...state,
        filteredItems: state.collections[action.payload.category].items.filter(
          (item) => parseInt(item.price) < parseInt(action.payload.price)
        ),
      };
    default:
      return state;
  }
};

export default shopReducer;
