import timelines from '../Timeline.json';

const INITAL_STATE = {
  currentTimeline: {}
}

export default function (state = INITAL_STATE, action) {
  switch(action.type) {
    case 'FETCH_NEW_TIMELINE':
      // console.log('action newTimeline', action)
      return { ...state, currentTimeline: action.newTimeline }
    default:
      return state;
  }
}
