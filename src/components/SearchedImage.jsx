import React, { Component } from "react";

class SearchedImage extends Component {
  render() {
    const { imageUrl, imageHeight, imageWidth } = this.props;

    return <img src={imageUrl} height={imageHeight} width={imageWidth} />;
  }
}

SearchedImage.defaultProps = {
  imageUrl: "",
  imageHeight: 300,
  imageWidth: 300
};

export default SearchedImage;
