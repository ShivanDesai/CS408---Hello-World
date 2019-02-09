import React, { Component } from 'react';
import './Header.css'
import Navbar from './Navbar';
import LoginHeader from './LoginHeader';

class Header extends Component {  
  render() {
    let headerContent;
    //user is logged in Use proper navbar
    if(0){
      headerContent = <Navbar/>;
    }
    //else use login bar
    else{
      headerContent= <LoginHeader/>;
    }
    return (
      <nav id="pageHeader" className="navbar navbar-expand-lg navbar-dark justify-content-between">
        <a className="navbar-brand" href="\">HƐ>lo World</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {headerContent}
        </div>
      </nav>
    );
  }
}

export default Header;
