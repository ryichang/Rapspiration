import { combineReducers } from 'redux';
import LyricReducer from './LyricReducer';
import ArtistReducer from './ArtistReducer';
import TimelineReducer from './TimelineReducer';
import RapDetailReducer from './RapDetailReducer';

const rootReducer = combineReducers({
  rapDetail: RapDetailReducer,
  lyrics: LyricReducer,
  artist: ArtistReducer,
  timeline: TimelineReducer
});

export default rootReducer;
