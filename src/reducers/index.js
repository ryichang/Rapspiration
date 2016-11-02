import { combineReducers } from 'redux';
import RapReducer from './RapReducer';
import RapDetailReducer from './RapDetailReducer'

const rootReducer = combineReducers({
  rapDetail: RapDetailReducer,
  raps: RapReducer
});

export default rootReducer;
