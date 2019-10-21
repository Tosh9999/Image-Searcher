import SearchRow from "./searchRow";

class ImagesFetcher extends Component {
  state = {};
  render() {
    return <SearchRow imageResults={this.props.imageResults} />;
  }
}

export default ImagesFetcher;
