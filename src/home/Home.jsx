import React from 'react';
//import Classes from './Home.css';
import Logout from './components/Logout';

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: ''
    }
  }


  render() {
    console.log('props in home ', this.props);
    return (
      <Logout fetchLogout={this.props.fetchLogout}/>
    )
  }
}

export default Home;