//Search component is responsible for search input and button rendering

import React from 'react';
import './Search.css';

class Search extends React.Component {
  render() {
    return (
      <div className="searcharea">
        <span title="ScreenName:www.twitter.com/ScreenName">
          ScreenName: <i className="fas fa-question-circle" />
        </span>
        <input
          type="text"
          className="searchinput"
          ref={ref => (this.search_content = ref)}
        />{' '}
        <button
          className="searchbtn"
          onClick={() => {
            this.props.menuBarContr_search(this.search_content.value);
          }}
        >
          SEARCH
        </button>
      </div>
    );
  }
}

export default Search;
