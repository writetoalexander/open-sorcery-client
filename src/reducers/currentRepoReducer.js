import Redux from 'redux';

const currentRepoReducer = (state = null, action) => {
  if (action.type === 'CHANGE_REPO') {
    return action.repo
  } else {
    return state
  }
};

export default currentRepoReducer;