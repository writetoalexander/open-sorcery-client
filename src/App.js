import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import queryString from 'query-string';
import Home from './home/Home';
import Tester from './home/components/Tester/Tester.jsx';
import GitHubLogo from './assets/github.png';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: ''
    };

  }
  componentWillMount() {
    var query = queryString.parse(this.props.location.search);
    if (query.token) {
      console.log('query ', query)
      window.localStorage.setItem('jwt', query.token);
      this.props.history.push('/');
    } else {
      this.setState({
        view: 'logged in'
      })
    }

  }

  fetchLogout() {
    console.log('logout clicking');
    axios.get('http://localhost:4500/logout').then((response) => {
      console.log('response is ', response);
    })
    .catch((err) => {
      console.log('err logging out ', err);
    })
    this.setState({
      view: 'logged out'
    });
  }

  render() {
  
    if (this.state.view === 'logged out') {
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
        <Home fetchLogout={this.fetchLogout.bind(this)}/>
      )
    }

  }
}

export default App;
