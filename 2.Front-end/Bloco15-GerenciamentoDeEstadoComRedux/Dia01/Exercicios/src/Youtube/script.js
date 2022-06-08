const TWEETAR = 'TWEETAR';
const DELETE_TWEET = 'DELETE_TWEET';

const actCreatorNewTweet = (payload) => {
  return {
    type: TWEETAR,
    payload,
  };
};

const action = {
  type: TWEETAR,
  payload: {
    name: '@murillowolf',
    message: 'Meu segundo Tweet',
  },
};

const initialState = {
  tweets: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TWEETAR:
      return {
        tweets: [
          ...state.tweets,
          { name: action.payload.name, message: action.payload.message },
        ],
      };

    case DELETE_TWEET:
      return {};
    default:
      return { ...state };
  }
};

//SETUP
const { createStore, combineReducers } = Redux;
const rootReducer = combineReducers({ reducer });
const store = createStore(rootReducer);

store.dispatch(
  actCreatorNewTweet({
    name: '@wolf',
    message: 'Eu amo Redux',
  })
);

store.dispatch(
  actCreatorNewTweet({
    name: '@murillowolf',
    message: 'Eu odeio Redux',
  })
);
