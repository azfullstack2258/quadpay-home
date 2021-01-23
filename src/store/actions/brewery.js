import { createAction } from 'redux-actions';
import {
  FETCH_BREWERY_LIST_INIT,
  SELECT_BREWERY_ITEM,
  SORT_BREWERY_LIST,
} from '../actionTypes';

const fetchBreweryListInit = createAction(FETCH_BREWERY_LIST_INIT);
const selectBreweryListItem = createAction(SELECT_BREWERY_ITEM);
const sortBreweryList = createAction(SORT_BREWERY_LIST);

export {
  fetchBreweryListInit,
  selectBreweryListItem,
  sortBreweryList,
};
