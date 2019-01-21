import React from 'react';
import RepoListItem from './RepoListItem';

const RepoList = (props) => (
  <div className="repo-list">
      <ul>
        {
          props.repos.map(repo => (      
            <li key={repo.id}>
              <RepoListItem repo={repo}/>
            </li>
          ))
        }
      </ul>
  </div>
);

export default RepoList;