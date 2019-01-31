import React from 'react';
import Search from '../components/search/Search.jsx';
import { connect } from 'react-redux';
import handleActionSearch from '../actions/search.js';

const SearchContainer = (props) => (
  <Search handleActionSearch={props.handleActionSearch}/> 
);

const mapDispatchToProps = {
  handleActionSearch  
}

export default connect(null, mapDispatchToProps)(SearchContainer);