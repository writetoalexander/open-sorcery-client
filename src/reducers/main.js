import { combineReducers } from 'redux';
import repoList from './repoListReducer';
import currentRepo from './currentRepoReducer';
import viewReducer from './viewReducer';
import repoListAction from '../actions/repoList';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  repoList: repoList, 
  currentRepo: currentRepo,
  form: formReducer,
  view: viewReducer
});

export default rootReducer;