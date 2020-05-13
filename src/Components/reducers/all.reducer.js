import { combineReducers } from 'redux';
import repoReducer from './repo.reducer';

const allReducers = combineReducers({
    repo: repoReducer
})

export default allReducers;