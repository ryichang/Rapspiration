import React, { Component } from 'react';
import { connect } from 'react-redux';

class RapLyric extends Component {
	render() {
    const lyric = this.props.lyric
		console.log('lyric is ', lyric)
		return (
      <div className="col-md-12 rapLyric">
        <h1>{lyric}</h1>
      </div>
    );
	}
}


export default RapLyric;
