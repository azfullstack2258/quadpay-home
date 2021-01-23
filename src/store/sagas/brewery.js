import { call, put, takeLatest, select } from 'redux-saga/effects';
import { FETCH_BREWERY_LIST_INIT, FETCH_BREWERY_LIST_SUCCESS, FETCH_BREWERY_LIST_FAILED } from '../actionTypes';
import { makeSelectBreweryListSort } from '../selectors';
import { fetchList as fetchListRequest } from '../../services/brewery';

function* fetchList() {
  try {
    const sort = yield select(makeSelectBreweryListSort());
    const res = yield call(
      fetchListRequest,
      {
        sort: sort.reduce((prev, cur) => prev + `${cur.type}${cur.key},`, ''),
      }
    );

    console.log('[FETCH RESP]', res);
    yield put({ type: FETCH_BREWERY_LIST_SUCCESS, data: res });
  } catch (err) {
    yield put({ type: FETCH_BREWERY_LIST_FAILED, error: 'Something went wrong.' });
  }
}

export function* watchBrewery() {
  yield takeLatest(FETCH_BREWERY_LIST_INIT, fetchList);
}
