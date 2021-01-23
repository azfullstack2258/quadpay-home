import produce from 'immer';
import {
  FETCH_BREWERY_LIST_INIT,
  FETCH_BREWERY_LIST_SUCCESS,
  FETCH_BREWERY_LIST_FAILED,
  SELECT_BREWERY_ITEM,
  SORT_BREWERY_LIST,
} from '../actionTypes';

const initialState = {
  loading: false,
  data: null,
  error: null,
  selected: null,
  sort: [],
};

const breweryReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case FETCH_BREWERY_LIST_INIT:
        draft.loading = true;
        draft.error = null;
        break;
      case FETCH_BREWERY_LIST_SUCCESS:
        draft.data = action.data;
        draft.loading = false;
        break;
      case FETCH_BREWERY_LIST_FAILED:
        draft.loading = false;
        draft.data = [];
        draft.error = action.error;
        break;
      case SELECT_BREWERY_ITEM:
        draft.selected = action.payload;
        break;
      case SORT_BREWERY_LIST:
        const sortingBy = action.payload;
        const sort = state.sort.slice();
        const existSort = sort.find(({ key }) => key === sortingBy);

        if (existSort) {
          if (existSort.type === '+') {
            draft.sort = sort.filter(({ key }) => key !== sortingBy);
          } else if (existSort.type === '-') {
            existSort.type = '+';
            draft.sort = sort;
          }
        } else {
          sort.push({
            key: sortingBy,
            type: '-',
          });
        }

        break;
      default:
        break;
    }
  });

export default breweryReducer;
