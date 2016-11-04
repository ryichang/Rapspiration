import React, { Component } from 'react';
import { connect } from 'react-redux';

class RapTimeline extends Component {
	render() {
		const albums = this.props.albums
		console.log('currentAlbums in RapTimeLine is', albums)

		return (
      <div className="col-md-12">
        {/* <div className="rapImage">
          <img src={image} className="img-fluid"/>
        </div> */}
        <div className="timeline">
					<img src="../img/logo.png" className="img-fluid" />
          <div className="content">
            <h2>About</h2>
            <p>
						{albums.description}
            </p>
          </div>
        </div>
      </div>
    );
	}
}

export default RapTimeline;
