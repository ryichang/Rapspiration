import React, { Component } from 'react';
import RapDetail from './RapSection';
import Header from './Header';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <RapDetail />
        React simple starter
      </div>
    );
  }
}
