import Redux from 'redux';

const viewReducer = (state = '', action) => {
  //action.type === 'CHANGE_VIEW' ? return action.payload : return state;
  if (action.type === 'CHANGE_VIEW') {
    return action.payload
  } else {
    return state
  }
}

export default viewReducer;