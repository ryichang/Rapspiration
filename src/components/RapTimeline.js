import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import HorizontalTimeline from 'react-horizontal-timeline';
import SwipeableViews from 'react-swipeable-views';


class RapTimeline extends Component {
	constructor(props) {
		super(props);
		this.state = {
      value: 0,
      previous: 0,
			// timelineConfig
		minEventPadding: 20,
		maxEventPadding: 120,
		linePadding: 100,
		labelWidth: 100,
		fillingMotionStiffness: 150,
		fillingMotionDamping: 25,
		slidingMotionStiffness: 150,
		slidingMotionDamping: 25,
		// stylesBackground: 'transparent',
		// stylesForeground: '#fffff',
		// stylesOutline: 'transparent',
		isTouchEnabled: true,
		isKeyboardEnabled: true,
		isOpenEnding: true,
		isOpenBeginning: true,
    };
	}
	componentWillReceiveProps(nextProps){
		if(nextProps.artist != this.props.artist){
			this.state={
				value: 0,
				previous: 0
			}
		}

	}
	render() {
		const albums = this.props.albums
		// console.log('***', albums)
		if (!albums){
			return(
				<div>loading...</div>
			)
		};
		const artist = this.props.artist
		console.log('artist is', artist)
		const album = albums.map((album, index) => {
			// console.log('date is', album.albumYear)
			// console.log('album is', album.albumName)
			return ({
        date: album.albumYear,
				content: album.content,
        component: (
          <div className='container' key={index}>
            <h1>{ `Albums ${index + 1}:`}</h1>
            <h2>{ album.albumName }</h2>
            <hr />
            <p>{ album.content }</p>
            <hr />
          </div>
        )
      })

			// return(
			//
			// 	<div key={index}>
			// 		<h1>{ album.albumName }</h1>
			// 		<p>{ album.albumDescription }</p>
			// 	</div>
			// )
		})
		// console.log('END', album)

		const test = [{
			date: '01/01/1999',
			content: 'hello',
			component: (
				<div>hi</div>
			)
		}]

		// const test2 = ['10/10/1999']
		// console.log('album content is', album[this.state.value].content)
		console.log("CURRENT INDEX", this.state.value)
		return(
			<div>

				<div style={{ width: '100%', height: '100px', margin: '0 auto' }} className="col-md-12 RapTimeline">

					<HorizontalTimeline
						index={this.state.value}
						indexClick={(index) => {
							this.setState({ value: index, previous: this.state.value });
						}}
						values={ _.map(albums, (album) => {
							return album.albumYear
						}) }
						styles={{
							background: 'transparent',
							foreground: '#F9BEBD',
							outline:'',
	            }}

				/>
				</div>
				<div className="col-md-3 RapTimelineContent">
				<SwipeableViews
					index={0}
					onChangeIndex={(value, previous) => {
						console.log('value', value)
						console.log('previous', previous)
						this.setState({ value: value, previous: previous });
					}}
					resistance>
					<div>
					{album[this.state.value].content}
					</div>
				</SwipeableViews>
				</div>
			</div>
		);
			// albums.map((album, index) => {
			// 	console.log('albums in map are', albums)
			// 	console.log('album in map is', album)
			// 	return(
			// 		<div>loading</div>
			// 	)
			// })


	}
}

export default RapTimeline;
//
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { value: 0, previous: 0 };
//   }
//
//   componentWillMount() {
//     this.data = GameInfo.map((game, index) => {
//       return ({
//         date: game.date,
//         component: (
//           <div className='container' key={index}>
//             <h1>{ `The Elder Scrolls ${index + 1}:`}</h1>
//             <h2>{ game.subtitle }</h2>
//             <hr />
//             <p>{ game.content}</p>
//             <hr />
//           </div>
//         )
//       });
//     });
//   }
//
//   render() {
//     return (
//       <HorizontalTimeline
//         content={this.data} />
//     );
//   }
// }
//
// ReactDOM.render(<App />, document.getElementById('content'));
