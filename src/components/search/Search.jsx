import React from 'react';
import { Field, reduxForm } from 'redux-form';

const Search = (props) => {
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
      </form>
  )
};

export default reduxForm({
  form: 'simple'
})(Search);

