import React, { Component } from 'react';
import { connect } from 'react-redux';

class RapLyric extends Component {
	render() {
    const lyric = this.props.lyric
		const artist = this.props.artist
		const songName = this.props.songName
		console.log('artist in RapLyric', artist)
		// console.log('lyric is ', lyric)
    const lyricContent = lyric.split(' ');
    const lyricString = "";
    const tweet = 'https://twitter.com/intent/tweet?text='+ '"' + lyric + '"' +'-'+ artist +'%20%40Rapsmatter&url=http%3A%2F%2Fwww.rapsmatter.com%2F&hashtags=rapsmatter&related=rxneu'
    // console.log('tweet is', tweet)


		return (
		  <div className="col-md-6 rapLyric">
				<div className="quoteContainer">
					<div className="quote">
						<div className="gutter-lyric">{songName}</div>
							<h2>{lyric}</h2>
						<div className="rapTweet hidden-xs">
							<a href={tweet} target="_blank">
							<i className="fa fa-twitter twitter" aria-hidden="true"></i>
							</a>
						</div>
						</div>
				</div>
		  </div>
    );
	}
}
// a href="https://twitter.com/intent/tweet?text=hello"

export default RapLyric;
