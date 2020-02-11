import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import { makeStyles } from "@material-ui/core/styles";

const safeSearchLevels = [
  { value: "off", label: "Off" },
  { value: "medium", label: "Medium" },
  { value: "high", label: "High" }
];

class SearchParameterForm extends Component {
  constructor() {
    super();
    this.state = {
      searchTermsInput: "",
      apiKey: "",
      searchEngineId: "",
      resultsPerTerm: 10,
      safeSearchLevel: "high",
      pictureRights: {
        cc_publicdomain: { checked: true, label: "Public Domain" },
        cc_attribute: { checked: false, label: "Attribution" },
        cc_sharealike: { checked: false, label: "Share-alike" },
        cc_noncommercial: { checked: false, label: "Non-Commercial" },
        cc_nonderived: { checked: false, label: "Non-Derived" }
      }
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
    this.handleTriggerSearch = this.handleTriggerSearch.bind(this);
  }

  handleSearchTermsInputChange(e) {
    this.setState({ searchTermsInput: e.target.value });
  }

  handleApiKeyChange(e) {
    this.setState({ apiKey: e.target.value });
  }

  handleSearchEngineIdChange(e) {
    this.setState({ searchEngineId: e.target.value });
  }

  handleResultsPerTermChange(e) {
    this.setState({ resultsPerTerm: e.target.value });
  }

  handleSafeSearchLevelChange(e) {
    this.setState({ safeSearchLevel: e.target.value });
  }

  handlePictureRightsChange(e) {
    var newPictureRights = Object.assign({}, this.state.pictureRights);
    newPictureRights[e.target.value].checked = e.target.checked;
    this.setState({
      pictureRights: newPictureRights
    });
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
      <div className="searchValuesForm">
        <div>
          <TextField
            id="searchTerms"
            label="Enter search terms separated by line"
            margin="normal"
            multiline
            rows="5"
            variant="outlined"
            value={this.state.searchTerms}
            onChange={this.handleSearchTermsInputChange}
          />
        </div>
        <div>
          <TextField
            id="apiKey"
            label="Google API Key"
            margin="normal"
            variant="outlined"
            value={this.state.apiKey}
            onChange={this.handleApiKeyChange}
          />
        </div>
        <div>
          <TextField
            id="searchEngineId"
            label="Search Engine Id"
            margin="normal"
            variant="outlined"
            value={this.state.searchEngineId}
            onChange={this.handleSearchEngineIdChange}
          />
        </div>
        <div>
          <TextField
            id="resultsPerTerm"
            label="Results per term"
            margin="normal"
            variant="outlined"
            value={this.state.resultsPerTerm}
            onChange={this.handleResultsPerTermChange}
          />
        </div>
        <div>
          <TextField
            id="safeSearchLevel"
            select
            label="Safe Search Level"
            margin="normal"
            variant="outlined"
            value={this.state.safeSearchLevel}
            onChange={this.handleSafeSearchLevelChange}
          >
            {safeSearchLevels.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div>
          <FormLabel component="legend">Picture Rights:</FormLabel>
          <FormGroup>
            {Object.keys(this.state.pictureRights).map(pr => (
              <FormControlLabel
                key={pr}
                control={
                  <Checkbox
                    checked={this.state.pictureRights[pr].checked}
                    value={pr}
                    onChange={this.handlePictureRightsChange}
                  />
                }
                label={this.state.pictureRights[pr].label}
              />
            ))}
          </FormGroup>
        </div>
        <button onClick={this.handleTriggerSearch}>Search</button>
      </div>
    );
  }
}

export default SearchParameterForm;
