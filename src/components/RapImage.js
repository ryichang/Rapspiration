import React, { Component } from 'react';
import { connect } from 'react-redux';

class RapImage extends Component {
	render() {
		return (
      <div>
				<h1>ARTIST IMAGE</h1>
        <img src={''} className="img-responsive"/>
      </div>
    );
	}
}

export default RapImage;
