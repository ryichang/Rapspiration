import data from '../RapList.json';

const INITAL_STATE = {
  currentRap: data[Math.floor(Math.random() * data.length)],
}

export default function (state = INITAL_STATE, action) {
  switch(action.type) {
    case 'FETCH_NEW_RAP':
      // console.log('action newRap', action)
      return {...state, currentRap: action.newRap }
    default:
      return state;
  }
}
