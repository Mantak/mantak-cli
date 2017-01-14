const defaultState = {
  title: '',
};

function _reducer(state = defaultState, action = {}) {
  switch (action.type) {
    case 'EXAMPLE' :
      return {title: 'example'};
    default:
      return state;
  }
}

export default _reducer;
