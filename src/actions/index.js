const setGIFS = (input) => {
  // const giphy = require('giphy-api')('YjCqU6J509Pc41dP3d6bVbgZypu5pgSr');
  let gifs = [];

  switch (input.charAt(0)) {
    case 'a':
      gifs = [
        {
          id: "TnDoEoXfT7YoE"
        },
        {
          id: "TnDoEoXfT7YoE"
        }
      ];
      break;
    default:
      gifs = [
        {
          id: "WzLDljBpplUvm"
        },
        {
          id: "WzLDljBpplUvm"
        }
      ];
  }

  // giphy.search({
  //   q: query,
  //   rating: 'r',
  //   limit: 15
  // }, (err, res) => {
  //   gifs = res;
  //   console.log(gifs);
  // });

  return {
    type: 'SET_GIFS',
    payload: gifs
  };
};

const selectGIF = (gifID) => {
  return {
    type: 'SELECT_GIF',
    payload: gifID
  };
};

export { setGIFS, selectGIF };
