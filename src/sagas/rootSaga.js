import { all } from 'redux-saga/effects';
import { watchFetchGithubData } from './repoSaga';

export default function* rootSaga() {
    yield all([
        watchFetchGithubData()
    ])
}