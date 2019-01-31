import React from 'react';
import { Field, reduxForm } from 'redux-form';
import store from '../../store/store';

const Search = (props) => {
  console.log('state inside search', store.getState())
  return (
    // <div className="repo-search">
    //   <input onChange={props.onChange}></input>
    //   <button id="search-button" onClick={props.searchGithubRepos}>Search Repos</button>
    // </div>
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
        //console.log('store.getState.form yields ', store.getState().form) ; 
        let query = store.getState().form.simple.values.firstName
        //console.log('query is ', query);

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

