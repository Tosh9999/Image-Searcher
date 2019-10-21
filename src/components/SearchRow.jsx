import React, { Component } from "react";
import SearchedImage from "./searchedImage";

class SearchRow extends Component {
  //state = {};

  render() {
    const { imageUrls, searchTerm } = this.props;

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
