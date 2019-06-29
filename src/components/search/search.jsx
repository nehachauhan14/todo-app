import React, { Component } from 'react';
import './search.css';

class Search extends Component {
    render() {
            return (
                <div className="col-xs-6 search">
                    <i className="material-icons">
                        search
                    </i>
                    <input 
                        type="text"
                        className="search_input" 
                        placeholder="Search..." />
                </div>
            )
    }
}

export default Search;