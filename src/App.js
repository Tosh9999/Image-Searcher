import React, { Component } from "react";
import SearchParameterForm from "./components/searchParameterForm";
import SearchResultsRow from "./components/searchResultsRow";

export default class App extends Component {
  constructor() {
    super();
    this.state = { searchRows: [] };
    this.handleTriggerSearch = this.handleTriggerSearch.bind(this);
  }

  handleTriggerSearch(
    searchTerms,
    apiKey,
    searchEngineId,
    resultsPerTerm,
    safeSearchLevel,
    pictureRights
  ) {
    this.setState({
      searchRows: searchTerms.map((term, index) => (
        <SearchResultsRow
          key={`${term}${index}`}
          searchTerm={term}
          apiKey={apiKey}
          searchEngineId={searchEngineId}
          resultsNum={resultsPerTerm}
          safeSearchLevel={safeSearchLevel}
          pictureRights={pictureRights}
          fetchDataFunction={this.fetchSearchData}
        />
      ))
    });
  }

  fetchSearchData(
    searchTerm,
    apiKey,
    searchEngineId,
    resultsPerTerm,
    safeSearchLevel,
    pictureRights,
    assignImagesFunction
  ) {
    var queryString =
      `q=${encodeURIComponent(searchTerm)}` +
      `&key=${encodeURIComponent(apiKey)}` +
      `&cx=${encodeURIComponent(searchEngineId)}` +
      `&searchType=image` +
      `&num=${encodeURIComponent(resultsPerTerm)}` +
      `&safe=${encodeURIComponent(safeSearchLevel)}` +
      `&rights=${encodeURIComponent(pictureRights)}`;
    var completeSearchURL = `https://www.googleapis.com/customsearch/v1?${queryString}`;
    fetch(completeSearchURL).then(response =>
      response.json().then(assignImagesFunction)
    );
  }

  render() {
    return (
      <div className="container">
        <h1 className="title">Enter Search Items</h1>

        <SearchParameterForm onTriggerSearch={this.handleTriggerSearch} />
        <div>{this.state.searchRows}</div>
      </div>
    );
  }
}
