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
import { fetchNewLyric, fetchNewArtist, fetchNewTimeline, showInitialLoading } from '../actions/index';


class RapDetail extends Component {
  constructor(props)  {
    super(props);
    this.props.showInitialLoading(true)
    // this.onClick = this.onClick.bind(this);
    // this.state = {
    //   showModal: true
    // }
  }

  componentDidMount() {
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
      // console.log('different')
      // console.log(nextProps.lyrics.currentLyric.artistId)
      this.props.fetchNewArtist(nextProps.lyrics.currentLyric.artistId)
      this.props.fetchNewTimeline(nextProps.lyrics.currentLyric.artistId)
    }

  }


  onClick = () => {
    // console.log("Image Clicked");
    this.props.fetchNewLyric()
  }


  // var Hello = React.createClass({
  // getInitialState() {
  //   return { showModal: true };
  // },
  //
  // close() {
  //   this.setState({ showModal: false });
  // },
  //
  // open() {
  //   this.setState({ showModal: true });
  // },
  //   render: function() {
  //   	return (
  //     <div>
  //       <ReactBootstrap.Modal show={this.state.showModal} onHide={this.close}>
  //         <ReactBootstrap.Modal.Header closeButton>
  //           <ReactBootstrap.Modal.Title>Modal heading</ReactBootstrap.Modal.Title>
  //         </ReactBootstrap.Modal.Header>
  //         <ReactBootstrap.Modal.Body>
  //           <h4>Text in a modal</h4>
  //         </ReactBootstrap.Modal.Body>
  //         <ReactBootstrap.Modal.Footer>
  //           <ReactBootstrap.Button onClick={this.close}>Close</ReactBootstrap.Button>
  //         </ReactBootstrap.Modal.Footer>
  //       </ReactBootstrap.Modal>
  //     </div>
  //     )
  //   }
  // });

	render() {
    // const currentRap = this.props.raps.currentRap;
    const { currentLyric } = this.props.lyrics;
    const { currentArtist } = this.props.artist;
    const { currentTimeline } = this.props.timeline;
    // console.log('currentArtist in rap detail is', currentArtist)
    // console.log('currentTimeline in rap detail is', currentTimeline)
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
      <div className="bgBlack centred-box frontSection">
        <div className="leader-box">
          <div className="leader-section leader-underlined">
                <span className="tighter">R</span>APS
                <div className="leader-box-to">
                    MATTER
                </div>
                <div className="text-right">
                  <div onClick={this.onClick}>
                <RapArtist artist={currentArtist.artist} key={currentArtist.id}/>
                  </div>
                </div>
          </div>
          <RapTimeline
                timeline={currentTimeline}
                artist={currentArtist.artist}
                key={currentArtist.id}
                image={currentArtist.image}
              />
          <div className="col-md-2">
            {/* <div className="col-md-4 col-sm-12">
               <div onClick={this.onClick}>
                 <div className="img-polaroid">
                   <RapImage image={currentArtist.image} />
                 </div>
               </div>
            </div> */}
          </div>
          <div className="leader-section text-right">
            {/* <span className="blocking">
              East<br/>Room
               <div className="col-md-4 col-sm-12"> */}
              <RapLyric
                    lyric={currentLyric.lyric}
                    songName={currentLyric.songName}
                    artist={currentArtist.artist}
                    key={currentLyric.id}
                    image={currentArtist.image}
                  />
              {/* </div>
            </span> */}
            {/* <div className="textLarge leader-subtext text-left ">
                    <p>We are a membership<br/>based co–op<br/>connecting work,<br/>leisure &amp; culture</p>
                </div> */}
          </div>

        </div>
      </div>
    //   <div className="frame">
    //     <div className="gutter-copy">NYC - SF</div>
    //     <div className="gutter-copy numbers">E-3778Q-1</div>
    //   <div className="col-md-12 rapContainer">
    //     <RapTimeline
    //       timeline={currentTimeline}
    //       artist={currentArtist.artist}
    //       key={currentArtist.id}
    //     />
    //
    //     <div className="col-md-4 col-sm-12 polaroid">
    //       <div className="gutter-copy">E-3778Q-1</div>
    //       <div onClick={this.onClick}>
    //         <div className="polaroidPhoto">
    //           <RapImage image={currentArtist.image} />
    //         </div>
    //       </div>
    //       <RapArtist artist={currentArtist.artist} key={currentArtist.id}/>
    //     </div>
    //
    //     <div className="col-md-4 col-sm-12">
    //       {/* <ReactCSSTransitionGroup
    //         transitionName="example"
    //         transitionEnterTimeout={500}
    //       transitionLeaveTimeout={300}> */}
    //
    //       <RapLyric
    //         lyric={currentLyric.lyric}
    //         songName={currentLyric.songName}
    //         artist={currentArtist.artist}
    //         key={currentLyric.id}/>
    //       {/* </ReactCSSTransitionGroup> */}
    //     </div>
    //
    //   </div>
    // </div>
    );
	}
}

function mapStateToProps(state) {
  return {
    rapDetail: state.rapDetail,
    lyrics: state.lyrics,
    timeline: state.timeline,
    artist: state.artist
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchNewLyric: fetchNewLyric, fetchNewArtist: fetchNewArtist, fetchNewTimeline: fetchNewTimeline, showInitialLoading: showInitialLoading }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(RapDetail);
