import { fromJS } from 'immutable';
import {
    FETCH_USER_REPO,
    FETCH_USER_REPO_FULFILLED,
    FETCH_USER_REPO_REJECTED,
    CLEAR_TEXT_INPUT,
    SORTED_USER_REPO
} from './constants';

const initialState = fromJS({
    username: '',
    rejected: '',
    userRepos: []
});

function userRepoReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_USER_REPO_FULFILLED:
            return state.set('userRepos', fromJS(action.payload));
        case FETCH_USER_REPO:
            return state.set('username', action.payload);
        case CLEAR_TEXT_INPUT:
            return state.set('username', '');
        case FETCH_USER_REPO_REJECTED:
            return state.set('rejected', action.payload);
        case SORTED_USER_REPO:
            return state.setIn(
                ['userRepos', 'items'],
                fromJS(
                    state
                        .getIn(['userRepos', 'items'])
                        .toJS()
                        .reverse()
                )
            );
        default:
            return state;
    }
}

export default userRepoReducer;
