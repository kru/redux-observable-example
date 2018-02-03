import { createSelector } from 'reselect';

export const selectPingReducer = () => state => state.get('mainScreen');

export const getUserFetchFulfilled = () =>
    createSelector(selectPingReducer(), state => state.get('users'));
