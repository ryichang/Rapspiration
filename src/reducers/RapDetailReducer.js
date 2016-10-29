const INITIAL_STATE = {
  isInitialLoading: false
}

export default function (state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'SHOW_INITIAL_LOADING':
      return { ...state, isInitialLoading: action.showLoading };
    default:
      return state;
  }
}
