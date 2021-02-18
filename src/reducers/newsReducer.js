const initState = {
  topHeadlines: {},
};

const newsReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_TOP_NEWS':
      return { ...state };
    default:
      return { ...state };
  }
};
export default newsReducer;
