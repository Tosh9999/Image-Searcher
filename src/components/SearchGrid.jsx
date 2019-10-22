import React, { Component } from "react";
import SearchRow from "./searchRow";

class SearchGrid extends Component {
  //state = { hey: "You smoke weed?" };
  render() {
    const {
      searchTerms,
      api_key,
      search_engine_id,
      results_per_term,
      safe_search_level,
      picture_rights
    } = this.props;
    if (searchTerms.length === 0) {
      return <div>Ready to search</div>;
    } else {
      return (
        <div>
          <table>
            <tr>
              <th>Here Is a Table</th>
            </tr>

            {searchTerms.map(term => (
              <SearchRow
                searchTerm={term}
                api_key={api_key}
                search_engine_id={search_engine_id}
                results_per_term={results_per_term}
                safe_search_level={safe_search_level}
                picture_rights={picture_rights}
              />
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
