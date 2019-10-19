import React, { Component } from 'react';

class SearchedImage extends Component {
  isHotlinkProtected(imgUrl) {
    //do some tests
    return false;
  }

  getUrlForRendering(imgUrl) {
    if (isHotlinkProtected(imgUrl)) {
      // download image locally
      // return file location
      throw 'whoa';
    } else {
      return imgUrl;
    }
  }

  render() {
    const { imageUrl } = this.props;

    let finalImageUrl = this.getUrlForRendering(imageUrl);

    return (
      <td>
        <img src={finalImageUrl} height={300} width={300} />
      </td>
    );
  }
}

export default SearchedImage;
