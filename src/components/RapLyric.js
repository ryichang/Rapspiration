import React, { Component } from 'react';
import { connect } from 'react-redux';

class RapLyric extends Component {
	render() {
    const lyric = this.props.lyric
		const artist = this.props.artist
		console.log('artist in RapLyric', artist)
		// console.log('lyric is ', lyric)
    const lyricContent = lyric.split(' ');
    const lyricString = "";
    const tweet = 'https://twitter.com/intent/tweet?text='+ '"' + lyric + '"' +'-'+ artist +'%20%40Rapspiration&url=http%3A%2F%2Fwww.rapspiration.com%2F&hashtags=rapspiration&related=rxneu'
    // console.log('tweet is', tweet)


		return (
      <div className="col-md-12 rapLyric">
				<div className="quote">
					<h2>{lyric}</h2>
					<a href={tweet} target="_blank">
						<i className="fa fa-twitter twitter" aria-hidden="true"></i>
					</a>
				</div>
      </div>
    );
	}
}
// a href="https://twitter.com/intent/tweet?text=hello"

export default RapLyric;
