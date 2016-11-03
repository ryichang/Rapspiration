import lyric from '../Lyric.json';

const INITAL_STATE = {
  // currentLyric: lyric[Math.floor(Math.random() * lyric.length)],
  currentLyric: {}
}

export default function (state = INITAL_STATE, action) {
  switch(action.type) {
    case 'FETCH_NEW_LYRIC':
      // console.log('action newLyric', action)
      return { ...state, currentLyric: action.newLyric }
    default:
      return state;
  }
}
