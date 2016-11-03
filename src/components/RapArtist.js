import React, { Component } from 'react';
import { connect } from 'react-redux';

class RapArtist extends Component {
	render() {
    const artist = this.props.artist
		// console.log('artist is ', artist)
		return (
      <div className="col-md-12 rapArtist">
        <h1>{artist}</h1>
      </div>
    );
	}
}

export default RapArtist;
