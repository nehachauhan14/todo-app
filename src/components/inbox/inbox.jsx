import React, { Component } from 'react';
import './inbox.css';

import Content from './uiElements/Content.jsx';

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
        description: 'Test 1 Task',
        priority: 1
      }, {
        id: 2,
        description: 'Test 2 Task',
        priority: 2
      }, {
        id: 3,
        description: 'Test 3 Task',
        priority: 3
      },]
    }
  }
  render() {
      return (
      <div className="container inbox">
          <div
            className="col-xs-12 ml5 bold fs18">
              <h4>Inbox</h4>
          </div>
          <div
              className="col-xs-4 side-bar">
              {/* <SideBar /> */}
          </div>
          <div
            className="col-xs-8 main-content">
            <Content
              list={this.state.taskList} />
          </div>

      </div>
    );
  }
}

export default Inbox;
