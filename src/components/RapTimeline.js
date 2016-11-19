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

	// timeline(albums){
	// 	return _.map(albums, (album) => {
	// 		return album.albumYear
	// 	})
	// }
	// timeline(timeline){
	// 	return _.map(timeline, (category) => {
	// 		return category.date
	// 		console.log(category.date)
	// 	})
	// }
	date(timeline){
		console.log('hit')
		return _.map(timeline.category, (category) => {
			return category.date
		})
	}



	render() {
		// let albums = this.props.albums
		// // console.log('***', albums)
		// if (!albums){
		// 	return(
		// 		<div>loading...</div>
		// 	)
		// };
		let timeline = this.props.timeline;
		console.log('timeline in RapTimeline is', timeline)
		if (!timeline){
			return(
				<div>loading...</div>
			)
		}
		const artist = this.props.artist
		console.log('artist is', artist)

		let category = timeline.category;

		category.sort(function(a,b){
			return new Date(a.date) - new Date(b.date);
		})


		const test = [{
			date: '01/01/1999',
			content: 'hello',
			component: (
				<div>hi</div>
			)
		}]

		// console.log('album content is', album[this.state.value].content)
		console.log('timeline category is', timeline.category)
		console.log("CURRENT INDEX", this.state.value)
		return(
			<div>
				{/* <div className="gutter-copy numbers">{timeline.category[this.state.value].title}</div> */}
				<div style={{ width: '100%', height: '100px', margin: '0 auto' }} className="col-md-12 RapTimeline">
					<HorizontalTimeline
						index={this.state.value}
						indexClick={(index) => {
							this.setState({ value: index, previous: this.state.value });
						}}
						values = {this.date(timeline)}
						// values={this.date(timeline)}
						styles={this.state.styles}
						styles={{
							background: 'transparent',
							foreground: '#F9BEBD',
							outline:'',
						}}
					/>
				</div>
				{/* </div>
				<div className="col-md-2"></div> */}

				<div className="col-md-4 col-sm-12 RapTimelineContent">
					<SwipeableViews
						index={0}
						onChangeIndex={(value, previous) => {
							console.log('value', value)
							console.log('previous', previous)
							this.setState({ value: value, previous: previous });
						}}
						resistance>
						<div className="RapContent">
							<div className="timelineCategory"><h1>{timeline.category[this.state.value].type}</h1></div>
							{timeline.category[this.state.value].content}
						</div>
				</SwipeableViews>
					<div className="gutter-bottom">{timeline.category[this.state.value].title}</div>
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
