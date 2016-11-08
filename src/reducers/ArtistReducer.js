import artist from '../Artist.json';

const INITAL_STATE = {
  // currentLyric: lyric[Math.floor(Math.random() * lyric.length)],
  currentArtist: {}
}

export default function (state = INITAL_STATE, action) {
  switch(action.type) {
    case 'FETCH_NEW_ARTIST':
      // console.log('action newArtist', action)
      return { ...state, currentArtist: action.newArtist }
    default:
      return state;
  }
}
