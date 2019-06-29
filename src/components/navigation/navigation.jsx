import React, { Component } from 'react';
import './navigation.css';

class Navigation extends Component {
  render() {
      return (
      <div className="nav-bar">
        <div className="nav-bar-inner">
          <div id="logo">
            <a href="/">Todoist</a>
          </div>
          <div className="links">
            <a href="/inbox">Inbox</a>
            <a href="">Log in</a>
            <a href="">Sign up</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Navigation;
