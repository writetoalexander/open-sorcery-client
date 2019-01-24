import { combineReducers } from 'redux';
import repoList from './repoListReducer';
import repoListAction from '../actions/repoList';
import currentRepo from './currentRepoReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  repoList: repoList,
  currentRepo: currentRepo,
  form: formReducer
});

export default rootReducer;