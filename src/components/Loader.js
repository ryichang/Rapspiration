import React, { Component } from 'react';


class Loader extends Component {

  constructor(props) {
    super(props);

    this.state = {
      character: ""
    }

  }

  // componentDidMount() {
  //   const newCharacter = this.randomCharacter()
  //   this.setState({character: newCharacter})
  // }

  componentDidMount() {
    this.loop()
  }

  loop = () => {
    var that = this;
    const refreshIntervalId = setInterval(function() {
      const newCharacter = that.randomCharacter()
      that.setState({character: newCharacter})
    }, 50)

    setTimeout(() => {
      clearInterval(refreshIntervalId);
    }, 3000);

    // setTimeout(() => {
    //   console.log('hit')
    //   const newCharacter = this.randomCharacter()
    //   this.setState({character: newCharacter})
    //   this.loop()
    // }, 100);
  }

  randomCharacter = () => {
    // const characters = ['9786']
    // const characters = ['9786', '9786', '9787', '9785', '9788', '9730', '9731', '9883', '9990', '63743', '8984', '8679', '10017', '9773', '9756', '9758', '9757', '9759', '9996', '10004', '9733', '9850', '9992', 'hearts', '9834', '9835', '9836', '9792', '9794', '9890', '9891', '10006', 'infin', 'yen', 'euro', '36', 'cent', 'pound', 'copy', 'reg', '64']
    const characters = ['9786', '9786', '9787', '9785', '9788', '9730', '9731', '9990', '63743','8984','8679','10017','9773','9756','9758','9759','10004','9733','9850','9992','9834','9835','9836','9792','9794','9890','9891','10006','63','64']
    var character = characters[Math.floor(Math.random() * characters.length)]
    // return character
    return String.fromCharCode(character);

  }


  render() {
    console.log("state", this.state)
  		return (
  			<div className="loading">
  				 {this.state.character}
  			</div>
  		)
  	}

}

export default Loader;
