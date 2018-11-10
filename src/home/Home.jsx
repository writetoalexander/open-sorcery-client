import React from 'react';
//import Classes from './Home.css';
import axios from 'axios';
import Logout from './components/Logout';

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: ''
    }
  }
  // fetchLogout() {
  //   console.log('logout clicking');
  //   axios.get('http://localhost:4500/logout').then((response) => {
  //     console.log('response is ', response);
  //   })
  //   .catch((err) => {
  //     console.log('err logging out ', err);
  //   })
  // }

  render() {
    console.log('props in home ', this.props);
    return (
      <Logout fetchLogout={this.props.fetchLogout}/>
    )
  }
}

export default Home;