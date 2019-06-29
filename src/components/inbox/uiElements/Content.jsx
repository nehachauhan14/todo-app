import React, { Component } from 'react';
import './Content.css';

import Create from './Create.jsx';

class Content extends Component {

    renderList(list) {
        let items = list.map((item, idx) => {
            return (
                <div
                    key={idx}
                    className="list-item">
                    <div
                        className="list-item-status-icon d-inline-block v-align-middle">
                    </div>
                    <span
                        className="inline-block ellipse v-align-middle">
                            {item.description}
                    </span>

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
