import React, { Component } from 'react';

class Create extends Component {
  render() {
      return (
        <div
            className="col-xs-12 list-item add-task c-pointer mb5 mt5">
            <div
                className="row"
                onMouseEnter={(e) => this.props.handleAddHover(e)}
                onMouseLeave={(e) => this.props.handleAddHover(e)}>
                <div
                    className="pull-left add-icon fs16 d-inline-block v-align-middle ml10">
                    <i className="material-icons">
                        {!this.props.AddIconHover ? 'add' : 'add_circle'}
                    </i>
                </div>
                <div
                    className="col-xs-8 ellipses v-align-middle">
                    Add Task
                </div>
            </div>
        </div>
    );
  }
}

export default Create;
