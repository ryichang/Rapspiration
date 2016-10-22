import React, { Component } from 'react';
import RapDetail from './RapDetail';
import Header from './Header';



export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <RapDetail />
      </div>
    );
  }
}
