import React, { Component } from 'react';
import logo from './logo.png';
import SearchGrid from './components/SearchGrid';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      searchRows: []
    };
  }

  render() {
    return (
      <div className='container'>
        <img className='logo' src={logo} />
        <h1 className='title'>React Starter</h1>
        <h2>RAHH</h2>
        <SearchGrid rows={this.state.searchRows} />
      </div>
    );
  }
}
