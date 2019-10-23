import React, { Component } from "react";
import SearchGrid from "./searchGrid";

class ImageSearchForm extends Component {
  constructor() {
    super();
    this.state = {
      searchBegun: false,
      searchTerms: "",
      api_key: "",
      search_engine_id: "",
      results_per_term: 10,
      safe_search_level: "high",
      picture_rights: "cc_publicdomain"
    };

    this.triggerSearch = this.triggerSearch.bind(this);
  }

  triggerSearch() {
    this.setState({ searchBegun: true });
  }

  render() {
    let grid = this.state.searchBegun && (
      <SearchGrid
        searchTerms={this.state.searchTerms.split("\n")}
        api_key={this.state.api_key}
        search_engine_id={this.state.search_engine_id}
        results_per_term={this.state.results_per_term}
        safe_search_level={this.state.safe_search_level}
        picture_rights={this.state.picture_rights}
      />
    );

    return (
      <div>
        <p>
          <label>Enter search terms separated by line</label>
          <textarea
            id="searchTerms"
            name="searchTerms"
            value={this.state.searchTerms}
            onChange={e => {
              this.setState({ searchTerms: e.target.value });
            }}
          ></textarea>
        </p>
        <p>
          <label>Google API Key:</label>
          <input
            id="api_key"
            type="text"
            name="api_key"
            value={this.state.api_key}
            onChange={e => {
              this.setState({ api_key: e.target.value });
            }}
          />
        </p>
        <p>
          <label>Search Engine Id:</label>
          <input
            id="search_engine_id"
            type="text"
            name="search_engine_id"
            value={this.state.search_engine_id}
            onChange={e => {
              this.setState({ search_engine_id: e.target.value });
            }}
          />
        </p>
        <p>
          <label>Results per term:</label>
          <input
            id="results_per_term"
            type="text"
            name="results_per_term"
            value={this.state.results_per_term}
            onChange={e => {
              this.setState({ results_per_term: e.target.value });
            }}
          />
        </p>
        <p>
          <label>Safe Search Level:</label>
          <select
            id="safe_search_level"
            name="safe_search_level"
            value={this.state.safe_search_level}
            onChange={e => {
              this.setState({ safe_search_level: e.target.value });
            }}
          >
            <option value="off">Off</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </p>
        <p>
          <label>Picture Rights:</label>
          <select
            id="picture_rights"
            name="picture_rights"
            value={this.state.picture_rights}
            onChange={e => {
              this.setState({ picture_rights: e.target.value });
            }}
          >
            <option value="cc_publicdomain">cc_publicdomain</option>
            <option value="cc_attribute">cc_attribute</option>
            <option value="cc_sharealike">cc_sharealike</option>
            <option value="cc_noncommercial">cc_noncommercial</option>
            <option value="cc_nonderived">cc_nonderived</option>
          </select>
        </p>
        <button onClick={this.triggerSearch}>Search</button>
        {grid}
      </div>
    );
  }
}

export default ImageSearchForm;
