import Redux from 'redux';

const repoListReducer = (state = null, action) => {
  if (action.type === 'CHANGE_REPO_LIST') {
    return action.repos
  } else {
    return state
  }
};

export default repoListReducer;