import React, { Component } from "react";
import Gallery from "react-grid-gallery";

class SearchResultRow extends Component {
  constructor(props) {
    super(props);
    this.state = { isFetching: false, images: [] };
  }

  assignImages(responseData) {
    this.setState({
      images: responseData.items.map(item => ({
        src: item.link,
        thumbnailLink: item.image.thumbnailLink,
        thumbnailWidth: item.image.thumbnailWidth,
        thumbnailHeight: item.image.thumbnailHeight
      })),
      isFetching: false
    });
  }

  componentDidMount() {
    this.setState({ isFetching: true });
    this.props.fetchDataFunction(
      this.props.searchTerm,
      this.props.apiKey,
      this.props.searchEngineId,
      this.props.resultsNum,
      this.props.pictureRights,
      this.assignImages
    );
  }
  render() {
    return (
      <div>
        {this.state.isFetching && <h3>Fetching Data...</h3>}
        <Gallery images={this.state.images} />
      </div>
    );
  }
}

export default SearchResultRow;
