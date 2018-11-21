import React from 'react';
import NavBar from './components/navbar/NavBar';
import Search from './components/search/Search';
import axios from 'axios';


class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: '',
      searchInput: '',
      searchResults: []
    }
    this.onChange = this.onChange.bind(this);
    this.searchGithubRepos = this.searchGithubRepos.bind(this);
  }

  onChange(e) {
    this.setState({
      searchInput: e.target.value
    });
    //console.log('state is ', this.state.searchInput);
  }

  async searchGithubRepos () {
   let repoResults = await axios.get(`http://localhost:4500/github/search/:${this.state.searchInput}`);
   repoResults = repoResults.data.splice(0, 4);
   console.log('repoResults ', repoResults);
   this.setState({
     searchResults: repoResults
   });
  };


  render() {
    return (
      <div>
        <NavBar fetchLogout={this.props.fetchLogout}/>
        <Search onChange={this.onChange} searchGithubRepos={this.searchGithubRepos}/>
      </div>
    )
  }
}

export default Home;