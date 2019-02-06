import React from 'react';
import NavBar from '../components/navbar/NavBar';
import Search from '../containers/SearchContainer';
import RepoListContainer from '../containers/RepoListContainer';
import axios from 'axios';


class Home extends React.Component {
  
  render() {
    return (
      <div>
        <NavBar fetchLogout={this.props.fetchLogout}/>
        <Search />
        <RepoListContainer />
      </div>
    )
  }
}

export default Home;