
import searchGithub from '../lib/searchGithub';
import changeRepoList from './repoList';

const handleRepoSearch = (q) => {
  return (dispatch) => {
    searchGithub(q, changeRepolist);
  };
};

export default handleRepoSearch;