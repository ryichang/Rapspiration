import { combineReducers } from 'redux';
import LyricReducer from './LyricReducer';
import ArtistReducer from './ArtistReducer';
import AlbumReducer from './AlbumReducer';
import RapDetailReducer from './RapDetailReducer';

const rootReducer = combineReducers({
  rapDetail: RapDetailReducer,
  lyrics: LyricReducer,
  artist: ArtistReducer,
  albums: AlbumReducer
});

export default rootReducer;
