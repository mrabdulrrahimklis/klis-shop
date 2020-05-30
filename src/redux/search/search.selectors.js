import { createSelector } from 'reselect';

const  selectSearch = state => state.search;

export const selectSearchItems = createSelector(
    [selectSearch],
    search => search.search
)
