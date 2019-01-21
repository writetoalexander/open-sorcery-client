import store from './store/store.js';
import changeRepoList from '../actions/repoList';

const searchGithub = async (query, callback) => {
  let repoResults = await axios.get(`http://localhost:4500/github/search/:${query}`);
  repoResults = repoResults.data.splice(0, 4);
  console.log('repoResults ', repoResults);
  if (callback) {
    store.dispatch(callback(repoResults));
  }
};

export default searchGithub;