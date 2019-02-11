import React from 'react';
import { Field, reduxForm } from 'redux-form';
import store from '../../store/store';

const Search = (props) => {
  console.log('state inside search', store.getState());
  return (
    <form >
      <div>
        <div>
          <Field
            name="firstName"
            component="input"
            type="text"
            placeholder="Search"
          />
        </div>
      </div>
      <button  type="button" onClick={
        () => {
          let query = store.getState().form.simple.values.firstName;
          props.handleActionSearch(query);
        }
      }>submit
      </button>
    </form>      
  )
};

export default reduxForm({
  form: 'simple'
})(Search);

