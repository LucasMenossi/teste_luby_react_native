import { all, fork, call, takeLatest, put } from 'redux-saga/effects';
import { Creators as GitActions, Types as GitTypes } from '../../ducks/git';
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.github.com',
})

function* getUser({ payload }) {
    try {
        const response = yield call(api.get, `/users/${payload}`);

        if (response.status === 200) {
            yield put(GitActions.getUserSuccess(response.data))
        } else {
            yield put(GitActions.getUserFail())
        }
    } catch (e) {
        yield put(GitActions.getUserFail())
    }
}

function* getRepos({ payload }) {
    try {
        const response = yield call(api.get, `/users/${payload}/repos`);

        if (response.status === 200) {
            yield put(GitActions.getReposSuccess(response.data))
        } else {
            yield put(GitActions.getReposFail())
        }
    } catch (e) {
        yield put(GitActions.getReposFail())
    }
}

function* getFollowers({ payload }) {
    try {
        const response = yield call(api.get, `/users/${payload}/followers`);

        if (response.status === 200) {
            yield put(GitActions.getFollowersSuccess(response.data))
        } else {
            yield put(GitActions.getFollowersFail())
        }
    } catch (e) {
        yield put(GitActions.getFollowersFail())
    }
}

function* getCheckUser({ payload }) {
    try {
        const response = yield call(api.get, `/users/${payload}`);

        if (response.status === 200) {
            yield put(GitActions.getCheckUserSuccess(response.data))
        } else {
            yield put(GitActions.getCheckUserFail())
        }
    } catch (e) {
        yield put(GitActions.getCheckUserFail())
    }
}

function* getFollowing({ payload }) {
    try {
        const response = yield call(api.get, `/users/${payload}/following`);

        if (response.status === 200) {
            yield put(GitActions.getFollowingSuccess(response.data))
        } else {
            yield put(GitActions.getFollowingFail())
        }
    } catch (e) {
        yield put(GitActions.getFollowingFail())
    }
}

function* getUserWatcher() {
    yield takeLatest(GitTypes.GET_USER_REQUEST, getUser)
}

function* getReposWatcher() {
    yield takeLatest(GitTypes.GET_REPOS_REQUEST, getRepos)
}

function* getFollowersWatcher() {
    yield takeLatest(GitTypes.GET_FOLLOWERS_REQUEST, getFollowers)
}

function* getFollowingsWatcher() {
    yield takeLatest(GitTypes.GET_FOLLOWING_REQUEST, getFollowing)
}

function* getCheckUserWatcher() {
    yield takeLatest(GitTypes.GET_CHECKUSER_REQUEST, getCheckUser)
}

export default function* rootSaga() {
    return yield all([
        fork(getUserWatcher),
        fork(getReposWatcher),
        fork(getFollowersWatcher),
        fork(getFollowingsWatcher),
        fork(getCheckUserWatcher),
    ])
}
