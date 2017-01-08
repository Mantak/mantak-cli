const defaultState = {
  browserWidth: 3,
  title: '',
  drawerOpen: true,
  drawerMini: false,
  editing: false,
};

function _reducer(state = defaultState, action = {}) {
  switch (action.type) {
    case 'SET_WIDTH' :
      return {...state, browserWidth: action.value};
    case 'SET_TITLE' :
      return {...state, title: action.value};
    case 'TOGGLE_DRAWER' :
      return {...state, drawerOpen: action.value};
    case 'MINI_DRAWER' :
      return {...state, drawerMini: action.value};
    default:
      return state;
  }
}

export default _reducer;
