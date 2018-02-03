import { fromJS } from 'immutable';
import {
    FETCH_USER_REPO,
    FETCH_USER_REPO_FULFILLED,
    FETCH_USER_REPO_REJECTED
} from './constants';

const initialState = fromJS({
    fieldValue: '',
    rejected: '',
    userRepos: []
});

function userRepoReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_USER_REPO_FULFILLED:
            return state.set('userRepos', fromJS(action.payload));
        case FETCH_USER_REPO:
            console.log('VALUE', action.payload);
            return state.set('fieldValue', action.payload);
        case FETCH_USER_REPO_REJECTED:
            console.log('REJECTED', action.payload, action.error);
            return state.set('rejected', action.payload);
        default:
            return state;
    }
}

export default userRepoReducer;
