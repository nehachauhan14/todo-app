import React, {Component} from 'react';
import './Sidebar.css';

export default class Sidebar extends Component {
    render() {
        return (
            <div
                className="left-menu">
                <div>
                    <ul
                        className="top-filters" >
                        <li
                            className="current">
                            <span
                                className="item-icon">
                                <i 
                                    className="material-icons">
                                    inbox
                                </i>
                            </span>
                            <span
                                className="item-content">
                                Inbox
                                <small
                                    className="item-count">5</small>
                            </span>
                        </li>
                        <li>
                            <span
                                className="item-icon">
                                <i 
                                    className="material-icons">
                                    calendar_today
                                </i>
                            </span>
                            <span
                                className="item-content">
                                Today
                                <small
                                    className="item-count">5</small>
                            </span>
                        </li>
                        <li>
                            <span
                                className="item-icon">
                                <i 
                                    className="material-icons">
                                    calendar_today
                                </i>
                            </span>
                            <span
                                className="item-content">
                                Next 7 Days
                                <small
                                    className="item-count">5</small>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}