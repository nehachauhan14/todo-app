import React, { Component } from 'react';
import './Content.css';

import Create from './Create.jsx';

class Content extends Component {

    renderList(list) {
        let items = list.map((item, idx) => {
            return (
                <div
                    key={idx}
                    className="col-xs-12 clearfix list-item c-pointer">
                    <div
                        className="row">
                        <span
                            className="pull-left ml10 mt2 list-item-status-icon d-inline-block v-align-middle">
                        </span>
                        <div
                            className="col-xs-8 ellipses v-align-middle"
                            title={item.description}>
                            {item.description}
                        </div>
                        <div
                            className="col-xs-2 v-align-middle">
                            {item.createdAt}
                        </div>
                        <div
                            className="col-xs-1 v-align-middle">
                            <i 
                                className="material-icons">
                                more_vert
                            </i>
                        </div>
                    </div>
                    
                </div>
            );
        })

        return items;
    }
  render() {
      return (
      <div className="content">
          <h4
            className="fs18 mb20">
            Inbox
          </h4>
          <div>
              {this.renderList(this.props.list)}
          </div>
          <div>
              <Create />
          </div>

      </div>
    );
  }
}

export default Content;
