import React, { Component } from "react";
import SearchRow from "./searchRow";

class SearchGrid extends Component {
  //state = { hey: "You smoke weed?" };
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
              <SearchRow searchTerm={row.searchTerm} />
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
