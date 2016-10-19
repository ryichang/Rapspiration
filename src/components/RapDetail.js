import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RapImage from './RapImage';
import RapArtist from './RapArtist';
import RapLyric from './RapLyric';
import { fetchNewRap } from '../actions/index';


class RapDetail extends Component {
  constructor(props)  {
    super(props);

    // this.onClick = this.onClick.bind(this);
  }

  onClick = () => {
    console.log("Image Clicked");
    this.props.fetchNewRap()
  }

	render() {
    // const currentRap = this.props.raps.currentRap;
    const { currentRap } = this.props.raps;

    console.log('raps', this.props.raps.currentRap)
    console.log('rap', currentRap)
		return (
      <div className="col-md-12 rapCard">
        <div onClick={this.onClick}>
        <RapImage image={currentRap.image} />
        </div>
        <RapArtist artist={currentRap.artist}/>
        <RapLyric lyric={currentRap.lyric}/>
      </div>
    );
	}
}

function mapStateToProps(state) {
  return {
    raps: state.raps
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchNewRap: fetchNewRap }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(RapDetail);
