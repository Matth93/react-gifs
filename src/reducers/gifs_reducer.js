const gifsReducer = (state, action) => {
  if (state === undefined) {
    return [];
  }

  switch (action.type) {
    case 'SET_GIFS':
      return action.payload;
    default:
      return state;
  }
};

export default gifsReducer;
