import React, { Component } from "react";
import SearchParameterForm from "./components/searchParameterForm";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      searchTerms: [],
      apiKey: "",
      searchEngineId: "",
      resultsPerTerm: 10,
      safeSearchLevel: "high",
      pictureRights: "cc_publicdomain"
    };

    this.handleSearchTermsChange = this.handleSearchTermsChange.bind(this);
    this.handleApiKeyChange = this.handleApiKeyChange.bind(this);
    this.handleSearchEngineIdChange = this.handleSearchEngineIdChange.bind(
      this
    );
    this.handleResultsPerTermChange = this.handleResultsPerTermChange.bind(
      this
    );
    this.handleSafeSearchLevelChange = this.handleSafeSearchLevelChange.bind(
      this
    );
    this.handlePictureRightsChange = this.handlePictureRightsChange.bind(this);
    this.handleTriggerSearch = this.handleTriggerSearch.bind(this);
  }

  handleSearchTermsChange(searchTermsStringParam) {
    this.setState({ searchTerms: searchTermsStringParam.split("\n") });
  }

  handleApiKeyChange(apiKeyParam) {
    this.setState({ apiKey: apiKeyParam });
  }

  handleSearchEngineIdChange(searchEngineIdParam) {
    this.setState({ searchEngineId: searchEngineIdParam });
  }

  handleResultsPerTermChange(resultsPerTermParam) {
    this.setState({ resultsPerTerm: resultsPerTermParam });
  }

  handleSafeSearchLevelChange(safeSearchLevelParam) {
    this.setState({ safeSearchLevel: safeSearchLevelParam });
  }

  handlePictureRightsChange(pictureRightsParam) {
    this.setState({ pictureRights: pictureRightsParam });
  }

  handleTriggerSearch() {
    //alert(this.state.searchTerms.join("\n"));
  }

  fetchSearchData(
    searchTerm,
    apiKey,
    searchEngineId,
    resultsPerTerm,
    safeSearchLevel,
    pictureRights
  ) {
    this.setState({ isFetching: true });
    var queryString = `q=${encodeURIComponent(
      searchTerm
    )}&key=${encodeURIComponent(apiKey)}&cx=${encodeURIComponent(
      searchEngineId
    )}&searchType=image&num=${encodeURIComponent(
      resultsPerTerm
    )}&safe=${encodeURIComponent(safeSearchLevel)}&rights=${encodeURIComponent(
      pictureRights
    )}`;
    var completeSearchURL = `https://www.googleapis.com/customsearch/v1?${queryString}`;
    fetch(completeSearchURL).then(response =>
      response.json().then(this.assignImageUrls.bind(this))
    );
  }

  render() {
    return (
      <div className="container">
        <h1 className="title">Enter Search Items</h1>

        <SearchParameterForm
          searchTerms={this.state.searchTerms.join("\n")}
          apiKey={this.state.apiKey}
          searchEngineId={this.state.searchEngineId}
          resultsPerTerm={this.state.resultsPerTerm}
          safeSearchLevel={this.state.safeSearchLevel}
          pictureRights={this.state.pictureRights}
          onSearchTermsChange={this.handleSearchTermsChange}
          onApiKeyChange={this.handleApiKeyChange}
          onSearchEngineIdChange={this.handleSearchEngineIdChange}
          onResultsPerTermChange={this.handleResultsPerTermChange}
          onSafeSearchLevelChange={this.handleSafeSearchLevelChange}
          onPictureRightsChange={this.handlePictureRightsChange}
          onTriggerSearch={this.handleTriggerSearch}
        />
      </div>
    );
  }
}
