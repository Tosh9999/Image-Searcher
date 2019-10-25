import React, { Component } from "react";

class SearchParameterForm extends Component {
  constructor() {
    super();
    this.state = {
      searchTermsInput: "",
      apiKey: "",
      searchEngineId: "",
      resultsPerTerm: 10,
      safeSearchLevel: "high",
      pictureRights: "cc_publicdomain"
    };
    this.handleSearchTermsInputChange = this.handleSearchTermsInputChange.bind(
      this
    );
    this.handleResultsPerTermChange = this.handleResultsPerTermChange.bind(
      this
    );
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
  }

  handleSearchTermsInputChange(searchTermsInputParam) {
    this.setState({ searchTermsInput: searchTermsInputParam });
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
    let searchTerms = this.state.searchTermsInput.split("\n");
    this.props.onTriggerSearch(
      searchTerms,
      this.state.apiKey,
      this.state.searchEngineId,
      this.state.resultsPerTerm,
      this.state.safeSearchLevel,
      this.state.pictureRights
    );
  }

  render() {
    return (
      <div>
        <p>
          <label>Enter search terms separated by line</label>
          <br />
          <br />
          <textarea
            id="searchTerms"
            name="searchTerms"
            value={this.state.searchTerms}
            onChange={this.handleSearchTermsInputChange}
          ></textarea>
        </p>
        <p>
          <label>Google API Key:</label>
          <input
            id="apiKey"
            type="text"
            name="apiKey"
            value={this.state.apiKey}
            onChange={this.handleApiKeyChange}
          />
        </p>
        <p>
          <label>Search Engine Id:</label>
          <input
            id="searchEngineId"
            type="text"
            name="searchEngineId"
            value={this.state.searchEngineId}
            onChange={this.handleSearchEngineIdChange}
          />
        </p>
        <p>
          <label>Results per term:</label>
          <input
            id="resultsPerTerm"
            type="text"
            name="resultsPerTerm"
            value={this.state.resultsPerTerm}
            onChange={this.handleResultsPerTermChange}
          />
        </p>
        <p>
          <label>Safe Search Level:</label>
          <select
            id="safeSearchLevel"
            name="safeSearchLevel"
            value={this.state.safeSearchLevel}
            onChange={this.handleSafeSearchLevelChange}
          >
            <option value="off">Off</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </p>
        <p>
          <label>Picture Rights:</label>
          <select
            id="pictureRights"
            name="pictureRights"
            value={this.state.pictureRights}
            onChange={this.handlePictureRightsChange}
          >
            <option value="cc_publicdomain">cc_publicdomain</option>
            <option value="cc_attribute">cc_attribute</option>
            <option value="cc_sharealike">cc_sharealike</option>
            <option value="cc_noncommercial">cc_noncommercial</option>
            <option value="cc_nonderived">cc_nonderived</option>
          </select>
        </p>
        <button onClick={this.handleTriggerSearch}>Search</button>
      </div>
    );
  }
}

export default SearchParameterForm;
