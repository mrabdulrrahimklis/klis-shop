import { searchActionTypes } from "./search.types";
import { searchItem } from "./search.utils";

const INITIAL_STATE = {
  search: "",
};

const searchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case searchActionTypes.SEARCH_ITEM:
      return {
        search: searchItem(state.search, action.payload),
      };
  }
};
