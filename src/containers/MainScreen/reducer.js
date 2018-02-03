import { fromJS } from 'immutable';
import { FETCH_USER, FETCH_USER_FULFILLED } from './constants';

const initialState = fromJS({
    isPinging: false,
    users: []
});

function pingReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_USER_FULFILLED:
            return state.set('users', action.payload);

        default:
            return state;
    }
}

export default pingReducer;
