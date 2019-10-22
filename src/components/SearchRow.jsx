import React, { Component } from "react";
import SearchedImage from "./searchedImage";

class SearchRow extends Component {
  //state = {};

  constructor() {
    super();
  }
  render() {
    const {
      searchTerm,
      api_key,
      search_engine_id,
      results_per_term,
      safe_search_level,
      picture_rights
    } = this.props;

    return (
      <tr>
        <th>{searchTerm}</th>
        <td>
          {imageUrls.map(url => (
            <SearchedImage imageUrl={url} />
          ))}
        </td>
      </tr>
    );
  }
}

export default SearchRow;
