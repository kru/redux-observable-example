import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux-immutable';

import mainScreenReducer from './containers/MainScreen/reducer';
import { fetchUsersEpic } from './containers/MainScreen/actions';

export const rootReducer = combineReducers({
    mainScreen: mainScreenReducer
});

export const rootEpic = combineEpics(fetchUsersEpic);
