
import searchGithub from '../lib/searchGithub';
import changeRepoList from './repoList';

const handleRepoSearch = (q) => {
  console.log('repo search happening q is ', q);
  return (dispatch) => {
    searchGithub(q, changeRepoList);
  };
};

export default handleRepoSearch;