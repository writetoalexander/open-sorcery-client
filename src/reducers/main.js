import { combineReducers } from 'redux';
import repoList from './repoListReducer';
import repoListAction from '../actions/repoList';
import currentRepo from './currentRepoReducer';

const rootReducer = combineReducers({
  repoList: reposlist,
  currentRepo: currentRepo
});

export default rootReducer;