import React, { Component } from 'react';
import Header from './Header';

class UserProfile extends Component {
  render() {
    return (
      <div id="UserProfilePage">
        <Header/>
        <h1>Profile Page</h1>
      </div>
    );
  }
}

export default UserProfile;