import React, { Component } from 'react';
import { connect } from 'react-redux';

class RapTimeline extends Component {
	render() {
		const image = this.props.image

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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Atque, facilis quo maiores magnam modi ab libero praesentium blanditiis.
            </p>
          </div>
        </div>
      </div>
    );
	}
}

export default RapTimeline;
