import { combineReducers } from 'redux';
import LyricReducer from './LyricReducer';
import ArtistReducer from './ArtistReducer';
import RapDetailReducer from './RapDetailReducer';

const rootReducer = combineReducers({
  rapDetail: RapDetailReducer,
  lyrics: LyricReducer,
  artist: ArtistReducer
});

export default rootReducer;
