import React, { Component } from 'react';
import { connect } from 'react-redux';

class RapImage extends Component {
	render() {
		const image = this.props.image
		// console.log('image is ', image)
		return (
      <div className="rapImage">
        <img src={image} className="img-fluid"/>
      </div>
    );
	}
}

export default RapImage;
