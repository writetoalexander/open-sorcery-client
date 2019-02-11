import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import queryString from 'query-string';
import Home from './home/Home';
import Tester from './home/components/Tester/Tester.jsx';
import GitHubLogo from './assets/github.png';
import store from './store/store';
import changeView from './actions/view';

class App extends Component {
  constructor(props) {
    super(props);
    this.fetchLogout = this.fetchLogout.bind(this);
  }
  componentWillMount() {
    let query = queryString.parse(this.props.location.search);
    if (query.token) {
      window.localStorage.setItem('jwt', query.token);
      this.props.history.push('/');
      store.dispatch(changeView('logged in'));
    } else if (localStorage.getItem('jwt')) {
      store.dispatch(changeView('logged in'));   
    } else {
      store.dispatch(changeView('logged out'))
    }
  }

  fetchLogout() {
    axios.get('http://localhost:4500/logout').then((response) => {
      console.log('response is ', response);
    })
    .catch((err) => {
      console.log('err logging out ', err);
      return;
    })
    store.dispatch(changeView('logged out'));
  }

  render() {  
    if (store.getState().view === 'logged out') {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <a href="http://localhost:4500/auth/github">
            <img className="Git-logo"src={GitHubLogo} alt="GitHubLogo"></img>
          </a>
        </div>
      )
    } else {
      return (
        <Home fetchLogout={this.fetchLogout}/>
      )
    }
  }
}

export default App;
