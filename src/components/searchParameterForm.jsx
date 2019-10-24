import React, { Component } from "react";

class SearchParameterForm extends Component {
  constructor() {
    super();
    this.handleSearchTermsChange = this.handleSearchTermsChange.bind(this);
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

  handleSearchTermsChange(e) {
    this.props.onSearchTermsChange(e.target.value);
  }

  handleApiKeyChange(e) {
    this.props.onApiKeyChange(e.target.value);
  }

  handleSearchEngineIdChange(e) {
    this.props.onSearchEngineIdChange(e.target.value);
  }

  handleResultsPerTermChange(e) {
    this.props.onResultsPerTermChange(e.target.value);
  }

  handleSafeSearchLevelChange(e) {
    this.props.onSafeSearchLevelChange(e.target.value);
  }

  handlePictureRightsChange(e) {
    this.props.onPictureRightsChange(e.target.value);
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
            value={this.props.searchTerms}
            onChange={this.handleSearchTermsChange}
          ></textarea>
        </p>
        <p>
          <label>Google API Key:</label>
          <input
            id="apiKey"
            type="text"
            name="apiKey"
            value={this.props.apiKey}
            onChange={this.handleApiKeyChange}
          />
        </p>
        <p>
          <label>Search Engine Id:</label>
          <input
            id="searchEngineId"
            type="text"
            name="searchEngineId"
            value={this.props.searchEngineId}
            onChange={this.handleSearchEngineIdChange}
          />
        </p>
        <p>
          <label>Results per term:</label>
          <input
            id="resultsPerTerm"
            type="text"
            name="resultsPerTerm"
            value={this.props.resultsPerTerm}
            onChange={this.handleResultsPerTermChange}
          />
        </p>
        <p>
          <label>Safe Search Level:</label>
          <select
            id="safeSearchLevel"
            name="safeSearchLevel"
            value={this.props.safeSearchLevel}
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
            value={this.props.pictureRights}
            onChange={this.handlePictureRightsChange}
          >
            <option value="cc_publicdomain">cc_publicdomain</option>
            <option value="cc_attribute">cc_attribute</option>
            <option value="cc_sharealike">cc_sharealike</option>
            <option value="cc_noncommercial">cc_noncommercial</option>
            <option value="cc_nonderived">cc_nonderived</option>
          </select>
        </p>
        <button onClick={this.props.onTriggerSearch}>Search</button>
      </div>
    );
  }
}

export default SearchParameterForm;
