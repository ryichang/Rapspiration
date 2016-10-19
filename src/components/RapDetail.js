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
		return (
      <div className="col-md-12">
        <h1>RAP DETAIL CONTAINER</h1>
        <RapImage />
        <button onClick={this.onClick}>
          CLICKBAIT
        </button>
        <RapArtist />
        <RapLyric />
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
