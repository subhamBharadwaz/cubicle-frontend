const initState = {
  weatherInfo: {},
};

const weatherReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_DATA':
      return { ...state };
    default:
      return { ...state };
  }
};

export default weatherReducer;
