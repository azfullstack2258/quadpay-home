import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import brewery from './brewery';

const breweryConfig = {
  key: 'brewery',
  storage,
  blacklist: ['loading', 'error'],
};

const rootReducer = combineReducers({
  brewery: persistReducer(breweryConfig, brewery),
  router: connectRouter(history),
});

export default rootReducer;
