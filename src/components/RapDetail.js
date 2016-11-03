import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import RapImage from './RapImage';
import RapArtist from './RapArtist';
import RapLyric from './RapLyric';
import RapTimeline from './RapTimeline';

// import RapCard from './RapCard';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { fetchNewLyric, fetchNewArtist, showInitialLoading } from '../actions/index';


class RapDetail extends Component {
  constructor(props)  {
    super(props);
  this.props.showInitialLoading(true)
    // this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    console.log('componentDidMount isInitialLoading', this.props.rapDetail.isInitialLoading)
    // if (this.props.rapDetail.isInitialLoading) {
      this.props.fetchNewLyric()
      setTimeout(() => {
        // alert('Hello')
        // console.log('change')
        this.props.showInitialLoading(false)
      }, 3000);
    // }
  }

  componentWillReceiveProps(nextProps) {
    // console.log('current props', this.props);
    // console.log('nextProps', nextProps);
    // everytime lyrics is chanaged
    // call action to update album and artist

    if(!_.isEqual(this.props.lyrics.currentLyric, nextProps.lyrics.currentLyric)){
      console.log('different')
      console.log(nextProps.lyrics.currentLyric.artistId)
      this.props.fetchNewArtist(nextProps.lyrics.currentLyric.artistId)
    }


  }

  onClick = () => {
    console.log("Image Clicked");
    this.props.fetchNewLyric()
  }

	render() {
    // const currentRap = this.props.raps.currentRap;
    const { currentLyric } = this.props.lyrics;
    const { currentArtist } = this.props.artist;
    console.log('currentArtist in rap detail is', currentArtist)
    // console.log('currentLyric in rap detail is', currentLyric)

    if (this.props.rapDetail.isInitialLoading) {
      return (
        <div className="col-md-12 LoadingContainer">
          <img src={"../img/intro.png"} className="LoadingIcon"></img>

        </div>
      )
    }

    if (_.isEmpty(this.props.lyrics.currentLyric)) {
      return <div>loading...</div>
    }
    //
    // console.log('lyrics', this.props.lyrics.currentLyric)
    // console.log('Lyric artistId', currentLyric.artistId)
    // console.log('RapDetail is loading', this.props.rapDetail.isInitialLoading)

		return (
      <div className="col-md-12 rapContainer">
        <div className="col-md-3 col-sm-12">
          <RapTimeline />
        </div>
        <div className="col-md-5 col-sm-12 polaroid">
          <div onClick={this.onClick}>
            <div className="polaroidPhoto">
            <RapImage image={currentArtist.image} />
            </div>
            </div>
            <RapArtist artist={currentArtist.artist} key={currentArtist.id}/>
        </div>
        <div className="col-md-4 col-sm-12">
        <ReactCSSTransitionGroup
            transitionName="example"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>

        <RapLyric lyric={currentLyric.lyric} key={currentLyric.id}/>
        </ReactCSSTransitionGroup>
        </div>
        {/* <div className="col-md-1">

        </div> */}
      </div>
    );
	}
}

function mapStateToProps(state) {
  return {
    rapDetail: state.rapDetail,
    lyrics: state.lyrics,
    artist: state.artist
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchNewLyric: fetchNewLyric, fetchNewArtist: fetchNewArtist, showInitialLoading: showInitialLoading }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(RapDetail);
