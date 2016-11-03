import _ from 'lodash';
import lyric from '../Lyric.json';
import artist from '../Artist.json';

export function showInitialLoading(shouldShowLoading) {
  return dispatch => {

    dispatch({ type: 'SHOW_INITIAL_LOADING', showLoading: shouldShowLoading})
  }
}

export function fetchNewLyric() {
  return dispatch => {
    // give the payload a new rap
    // console.log('lyric is ', lyric)

    const newLyric = lyric[Math.floor(Math.random() * lyric.length)];
    // console.log('new rap is', newRap)
    // console.log('newLyric artistId', newLyric.artistId)
    dispatch({ type: 'FETCH_NEW_LYRIC', newLyric: newLyric })
  }
}


export function fetchNewArtist(artistId) {
  return dispatch => {
        let newArtist;
        for (var id in artist) {
          // console.log('artist is', artist)
          // console.log('artistId is', artistId)
          //   console.log('id is', id)
          if (id == artistId){
            console.log('artist id is',artist[id])
            newArtist = artist[id];
            console.log('newArtist in reducer is', newArtist)
          }
        }
        console.log('newArtist outside is', newArtist)

    dispatch({ type: 'FETCH_NEW_ARTIST', newArtist: newArtist })
  }
}
// for (var key in artist) {
//       console.log('artistId is', artistId)
//       console.log('artist is', artist)
//   if (artist.id == artistId) {
//     const newArtist = artist[key]
//
//   }

// const newArtist = _.forOwn(artist, function(value, key) {
//   if (value === artistId) {
//   }
// })
