import { all } from 'redux-saga/effects';
import { watchBrewery } from './brewery';

export default function* rootSaga() {
  yield all([watchBrewery()]);
}
