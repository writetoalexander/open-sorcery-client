import React from 'react';

const Logout = (props) => {
  console.log('props in logout ', props);
  return (
    <button className="logout"onClick={() => {props.fetchLogout()}}>Logout
    </button>
  )
};

export default Logout;