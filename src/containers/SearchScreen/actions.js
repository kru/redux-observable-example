import { ofType } from 'redux-observable';
import { mapTo, mergeMap, debounceTime, delay } from 'rxjs/operators';
import { ajax } from 'rxjs/observable/dom/ajax';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {
    FETCH_USER_REPO,
    FETCH_USER_REPO_FULFILLED,
    FETCH_USER_REPO_REJECTED
} from './constants';

export const fetchUserRepos = username => ({
    type: FETCH_USER_REPO,
    payload: username
});

export const fetchUserReposFullfilled = payload => ({
    type: FETCH_USER_REPO_FULFILLED,
    payload
});

export const fetchUserReposRejected = payload => ({
    type: FETCH_USER_REPO_REJECTED,
    payload,
    error: true
});

export const fetchUserReposEpic = action$ =>
    action$.pipe(
        ofType(FETCH_USER_REPO),
        mergeMap(action =>
            ajax
                .getJSON(`https://api.github.com/users/${action.payload}/repos`)
                .map(response => fetchUserReposFullfilled(response))
                .catch(error =>
                    Observable.of(fetchUserReposRejected(error.xhr._response))
                )
        )
    );
