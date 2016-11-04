import _ from 'lodash';
import lyric from '../Lyric.json';
import artist from '../Artist.json';
import albums from '../Album.json';

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
            // console.log('artist id is',artist[id])
            newArtist = artist[id];
            // console.log('newArtist in reducer is', newArtist)
          }
        }
        // console.log('newArtist outside is', newArtist)

    dispatch({ type: 'FETCH_NEW_ARTIST', newArtist: newArtist })
  }
}


export function fetchNewAlbums(lyricArtistId) {
  console.log('hits fetchNewAlbums')
  return dispatch => {
        let newAlbums = [];
        // for (var album in albums) {
        _.each(albums, function(album) {
          console.log('lyricArtistId is', lyricArtistId)
          console.log('album is', album)
          if (album.artistId == lyricArtistId){
            console.log('album id is', album.artistId)
            newAlbums.push(album);
            console.log('newAlbum in action is', newAlbums)
          }
        })
        // }
        // for (var album in albums){
        //   console.log('album in albums', albums[album])
        //   for (var artistId in albums[album]){
        //     if (artistId == lyricArtistId){
        //       newAlbums = albums[artistId]
        //       console.log('newAlbums is', newAlbums)
        //     }
        //   }
        // }
        console.log('newAlbum outside is', newAlbums)

    dispatch({ type: 'FETCH_NEW_ALBUMS', newAlbums: newAlbums })
  }
}
