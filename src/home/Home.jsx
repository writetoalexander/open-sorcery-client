import React from 'react';
//import Classes from './Home.css';
//import Logout from './components/Logout';
import NavBar from './components/NavBar';

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: ''
    }
  }


  render() {
    return (
        <NavBar fetchLogout={this.props.fetchLogout}/>
    )
  }
}

export default Home;