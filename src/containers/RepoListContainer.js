import React from 'react';
import { connect } from 'react-redux';
import RepoList from '../components/repoList/List';
import changeRepoList from '../actions/repoList';

const RepoListContainer = (props) => (
  <RepoList repos={props.repos}/>

);

const mapDispatchToProps = {
  changeRepoList  
}

const mapStateToProps = state => {
  return { repos: state.repoList }
}

export default connect(mapStateToProps, mapDispatchToProps)(RepoListContainer);