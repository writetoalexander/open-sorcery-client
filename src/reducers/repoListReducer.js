import Redux from 'redux';
import data from '../data/exampleRepoData';

const repoListReducer = (state = data, action) => {
  console.log('repo list reducer called');
  if (action.type === 'CHANGE_REPO_LIST') {
    console.log('actions ')
    return action.repos
  } else {
    console.log('state is ', state)
    return state
  }
};

export default repoListReducer;