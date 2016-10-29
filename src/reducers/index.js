import { combineReducers } from 'redux';
import RapReducer from './RapReducer';
import SelectionReducer from './SelectionReducer'
import RapDetailReducer from './RapDetailReducer'

const rootReducer = combineReducers({
  rapDetail: RapDetailReducer,
  raps: RapReducer,
  selectedRapId: SelectionReducer
});

export default rootReducer;
