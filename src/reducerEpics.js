import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux-immutable';

import mainScreenReducer from './containers/MainScreen/reducer';
import userRepoReducer from './containers/SearchScreen/reducer';

import { fetchUsersEpic } from './containers/MainScreen/actions';
import { fetchUserReposEpic } from './containers/SearchScreen/actions';

export const rootReducer = combineReducers({
    mainScreen: mainScreenReducer,
    userRepository: userRepoReducer
});

export const rootEpic = combineEpics(fetchUsersEpic, fetchUserReposEpic);
