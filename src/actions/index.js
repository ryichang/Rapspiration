import data from '../RapList.json';

export function fetchNewRap() {
  return dispatch => {
    // give the payload a new rap
    // console.log('data is ', data)
    const newRap = data[Math.floor(Math.random() * data.length)];
    // console.log('new rap is', newRap)
    dispatch({ type: 'FETCH_NEW_RAP', newRap: newRap })
  }
}
