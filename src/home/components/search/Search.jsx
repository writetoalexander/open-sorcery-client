import React from 'react';
import { Field } from 'redux-form';

const Search = (props) => {
  return (
    <div className="repo-search">
     
      <input onChange={props.onChange}></input>
      <button id="search-button" onClick={props.searchGithubRepos}>Search Repos</button>
    </div>
  )
};

export default Search;

