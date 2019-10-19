import React, { Component } from 'react';
import SearchRow from './SearchRow';

class SearchGrid extends Component {
  state = {};
  render() {
    const { rows } = this.props;
    if (rows.length === 0) {
      return <div>Ready to search</div>;
    } else {
      return (
        <div>
          <table>
            <tr>
              <th>Here Is a Table</th>
            </tr>
            {rows.map(row => (
              <SearchRow />
            ))}
          </table>
        </div>
      );
    }
  }
}

SearchGrid.defaultProps = {
  rows: []
};

export default SearchGrid;
