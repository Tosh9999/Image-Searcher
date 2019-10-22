import React, { Component } from "react";
import SearchedImage from "./searchedImage";

class SearchRow extends Component {
  constructor(props) {
    super(props);
    this.state = { isFetching: false, imageUrls: [] };
  }

  componentDidMount() {
    this.setState({ isFetching: true });
    const {
      searchTerm,
      api_key,
      search_engine_id,
      results_per_term,
      safe_search_level,
      picture_rights
    } = this.props;
    var searchData = this.performSearch(
      searchTerm,
      api_key,
      search_engine_id,
      results_per_term,
      safe_search_level,
      picture_rights
    );

    var urls = this.parseImageUrls(searchData);
    this.setState({ imageUrls: urls, isFetching: false });
  }

  parseImageUrls(searchData) {
    var urls = searchData.items.map(item => item.link);
    return urls;
  }

  performSearch(
    searchTerm,
    api_key,
    search_engine_id,
    results_per_term,
    safe_search_level,
    picture_rights
  ) {
    return { "hardcode goes": "here" };
  }

  render() {
    return (
      <tr>
        <th>{this.props.searchTerm}</th>
        {this.state.isFetching && <h3>Fetching search data...</h3>}
        {this.state.imageUrls.map(url => (
          <td key={url}>
            <SearchedImage key={url} imageUrl={url} />
          </td>
        ))}
      </tr>
    );
  }
}

export default SearchRow;
