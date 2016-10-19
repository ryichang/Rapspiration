import React, { Component } from 'react';
import { connect } from 'react-redux';

class RapLyric extends Component {
	render() {
    const lyric = this.props.lyric
		console.log('lyric is ', lyric)
    const lyricContent = lyric.split(' ');
    const lyricString = "";
    const tweet = 'https://twitter.com/intent/tweet?text='+lyric+'%20%40RapInspiration&url=http%3A%2F%2Fwww.rapinspiration.com%2F&hashtags=rapinspiration&related=rxneu'
    console.log('tweet is', tweet)


		return (
      <div className="col-md-12 rapLyric">
        <h1>{lyric}</h1>
        <a href={tweet} target="_blank">
        <i className="fa fa-twitter twitter" aria-hidden="true"></i>
        </a>
      </div>
    );
	}
}
// a href="https://twitter.com/intent/tweet?text=hello"

export default RapLyric;
