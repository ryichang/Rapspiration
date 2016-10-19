import React, { Component } from 'react';
import { connect } from 'react-redux';

class RapImage extends Component {
	render() {
		const image = this.props.image
		console.log('image is ', image)
		return (
      <div className="col-md-12">
        <img src={image} className="img-responsive"/>
      </div>
    );
	}
}

export default RapImage;
