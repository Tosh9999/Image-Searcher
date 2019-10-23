import React, { Component } from "react";
import SearchedImage from "./searchedImage";

class SearchRow extends Component {
  constructor(props) {
    super(props);
    this.state = { isFetching: false, imageUrls: [] };
  }

  fetchSearchData(
    searchTerm,
    api_key,
    search_engine_id,
    results_per_term,
    safe_search_level,
    picture_rights
  ) {
    this.setState({ isFetching: true });
    var queryString = `q=${encodeURIComponent(
      searchTerm
    )}&key=${encodeURIComponent(api_key)}&cx=${encodeURIComponent(
      search_engine_id
    )}&searchType=image&num=${encodeURIComponent(
      results_per_term
    )}&safe=${encodeURIComponent(
      safe_search_level
    )}&rights=${encodeURIComponent(picture_rights)}`;
    var completeSearchURL = `https://www.googleapis.com/customsearch/v1?${queryString}`;
    fetch(completeSearchURL).then(response =>
      response.json().then(this.assignImageUrls.bind(this))
    );
  }

  assignImageUrls(searchDataJson) {
    var urls = searchDataJson.items.map(item => item.link);
    this.setState({ imageUrls: urls, isFetching: false });
  }

  componentDidMount() {
    this.fetchSearchData(
      this.props.searchTerm,
      this.props.api_key,
      this.props.search_engine_id,
      this.props.results_per_term,
      this.props.safe_search_level,
      this.props.picture_rights
    );
  }

  render() {
    return (
      <tr>
        <th>{this.props.searchTerm}</th>
        {this.state.isFetching && (
          <th>
            <h3>Fetching search data...</h3>
          </th>
        )}
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
