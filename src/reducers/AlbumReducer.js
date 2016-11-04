import album from '../Album.json';

const INITAL_STATE = {
  currentAlbums: {}
}

export default function (state = INITAL_STATE, action) {
  switch(action.type) {
    case 'FETCH_NEW_ALBUMS':
      console.log('action newAlbums', action)
      return { ...state, currentAlbums: action.newAlbums }
    default:
      return state;
  }
}
