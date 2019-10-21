class ImageSearcher extends Component {
  state = {
    searchTerms: "",
    api_key: "",
    search_engine_id: "",
    results_per_term: 10,
    safe_search_level: "high",
    picture_rights: "cc_publicdomain"
  };
  render() {
    return (
      <div>
        <p>
          <label for="searchTerms">Enter search terms separated by line</label>
          <textarea
            id="searchTerms"
            name="searchTerms"
            value={this.state.searchTerms}
          ></textarea>
        </p>
        <p>
          <label for="api_key">Google API Key:</label>
          <input
            id="api_key"
            type="text"
            name="api_key"
            value={this.state.api_key}
          />
        </p>
        <p>
          <label for="search_engine_id">Search Engine Id:</label>
          <input
            id="search_engine_id"
            type="text"
            name="search_engine_id"
            value={this.state.search_engine_id}
          />
        </p>
        <p>
          <label for="results_per_term">Results per term:</label>
          <input
            id="results_per_term"
            type="text"
            name="results_per_term"
            value={this.state.results_per_term}
          />
        </p>

        <p>
          <label for="safe_search_level">Safe Search Level:</label>
          <select
            id="safe_search_level"
            name="safe_search_level"
            value={this.state.safe_search_level}
          >
            <option value="off">Off</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </p>

        <p>
          <label for="picture_rights"></label>
          <select
            id="picture_rights"
            name="picture_rights"
            value={this.state.picture_rights}
          >
            <option value="cc_publicdomain">cc_publicdomain</option>
            <option value="cc_attribute">cc_attribute</option>
            <option value="cc_sharealike">cc_sharealike</option>
            <option value="cc_noncommercial">cc_noncommercial</option>
            <option value="cc_nonderived">cc_nonderived</option>
          </select>
        </p>
      </div>
    );
  }
}

export default ImageSearcher;
