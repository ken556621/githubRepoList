import { takeLatest, put, call } from 'redux-saga/effects';

function* fetchGithubData(action){
    const baseURL = "https://api.github.com/users/";
    const userName = "ken556621";
    const data = yield call(
        () => fetch(`${baseURL}${userName}/repos?page=${action.payload.currentPage}&per_page=${action.payload.pageItems}`)
        .then(response => response.json())
    );
    yield put({ type: "UPDATE_REPO_DATA", payload: { data } });
}

export function* watchFetchGithubData(){
    yield takeLatest("FETCH_GITGUB_DATA", fetchGithubData)
}