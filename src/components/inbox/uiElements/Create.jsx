import React, { Component } from 'react';

class Create extends Component {
  render() {
      return (
        <div
            className="list-item-create">
            <div
                className="add-icon d-inline-block v-align-middle ml10">
                <i className="material-icons">
                    add
                </i>
            </div>
            <span
                className="inline-block ellipse v-align-middle">
                Add Task
            </span>
        </div>
      
    );
  }
}

export default Create;
