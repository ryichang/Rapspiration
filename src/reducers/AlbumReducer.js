import album from '../Album.json';

const INITAL_STATE = {
  currentAlbumt: {}
}

export default function (state = INITAL_STATE, action) {
  switch(action.type) {
    case 'FETCH_NEW_ALBUM':
      console.log('action newAlbum', action)
      return { ...state, currentAlbum: action.newAlbum }
    default:
      return state;
  }
}
