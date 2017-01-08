const defaultState = {
};

function _reducer(state = defaultState, action = {}) {
  switch (action.type) {
    case 'EXAMPLE' :
      return {};
    default:
      return state;
  }
}

export default _reducer;
