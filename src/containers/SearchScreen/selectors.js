import { createSelector } from 'reselect';

export const selectUserRepoReducer = () => state => state.get('userRepository');

export const getUserRepos = () =>
    createSelector(selectUserRepoReducer(), state =>
        state.get('userRepos').toJS()
    );

export const getInputValue = () =>
    createSelector(selectUserRepoReducer(), state => state.get('fieldValue'));

export const getUserReposRejected = () =>
    createSelector(selectUserRepoReducer(), state => state.get('rejected'));
