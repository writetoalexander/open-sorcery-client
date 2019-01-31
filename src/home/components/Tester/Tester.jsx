import React from 'react';

import axios from 'axios';


class Tester extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: '',

    }

  }




  render() {
    return (
      <div className="world-container">
        <div>
          Hello World
        </div>
      </div>
    )
  }
}

export default Tester;