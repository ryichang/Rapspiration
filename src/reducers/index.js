import { combineReducers } from 'redux';
import RapReducer from './RapReducer';
import SelectionReducer from './SelectionReducer'

const rootReducer = combineReducers({
  raps: RapReducer,
  selectedRapId: SelectionReducer
});

export default rootReducer;
