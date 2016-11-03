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


export function fetchNewArtist(lyricArtistId) {
  return dispatch => {
        let newArtist;
        for (var id in artist) {
          // console.log('artist is', artist)
          // console.log('artistId is', artistId)
          //   console.log('id is', id)
          if (id == lyricArtistId){
            console.log('artist id is',artist[id])
            newArtist = artist[id];
            console.log('newArtist in reducer is', newArtist)
          }
        }
        console.log('newArtist outside is', newArtist)

    dispatch({ type: 'FETCH_NEW_ARTIST', newArtist: newArtist })
  }
}


export function fetchNewArtist(lyricArtistId) {
  return dispatch => {
        let newAlbum;
        for (var artistId in album) {
          // console.log('artist is', artist)
          // console.log('artistId is', artistId)
          //   console.log('id is', id)
          if (artistId == lyricArtistId){
            console.log('album id is',album[id])
            newAlbum = artist[id];
            console.log('newAlbum in action is', newAlbum)
          }
        }
        console.log('newAlbum outside is', newAlbum)

    dispatch({ type: 'FETCH_NEW_ALBUM', newAlbum: newAlbum })
  }
}
