import React, { Component } from 'react';
import './inbox.css';

import Content from './uiElements/Content.jsx';
import Sidebar from './uiElements/Sidebar.jsx';
class Inbox extends Component {
  constructor() {
    super();

    this.state = {
      edit: true,
      mainFilters: [{
        name: 'Inbox',
        code: 'inbox'
      }, {
        name: 'Today',
        code: 'today'
      }, {
        name: 'Last 7 Days',
        code: 'today'
      }],
      taskList: [{
        id: 1,
        description: 'Test 1 Taskddd dddddv dddddddddddddd dddddddddd ddddddddddddd ddddddddd ddddddd dd',
        priority: 1,
        createdAt: '20 Jun'
      }, {
        id: 2,
        description: 'Test 2 Task',
        priority: 2,
        createdAt: '1 Jul'
      }, {
        id: 3,
        description: 'Test 3 Task',
        priority: 3,
        createdAt: '1 Aug'
      }],
      AddIconHover: false
    }
  }

  handleAddHover = (e) => {
    this.setState({
      AddIconHover: !this.state.AddIconHover 
    })
  };

  render() {
      return (
        <div className="col-xs-offset-1 col-xs-10 container inbox">
            <div
              className="row wrapper">
              <div
                className="col-xs-4 side-bar">
                <Sidebar/>
              </div>
              <div
                className="col-xs-8 main-content">
                <Content
                  list={this.state.taskList}
                  handleAddHover={this.handleAddHover}
                  AddIconHover={this.state.AddIconHover} />
              </div>
            </div>
        </div>
    );
  }
}

export default Inbox;
