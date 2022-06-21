import {
  UPDATE_SUBREDDIT,
  REQUEST_POSTS,
  GET_POSTS,
  FAILED_REQUEST,
} from '../actions';

const INITIAL_POSTS_STATE = {
  shouldUpdateSubreddit: false,
  isFetching: false,
};

const INITIAL_POSTS_FROM_SUBREDDIT_STATE = {
  frontend: { ...INITIAL_POSTS_STATE },
  reactjs: { ...INITIAL_POSTS_STATE },
};

const posts = (state = INITIAL_POSTS_STATE, action) => {
  switch (action.type) {
    case UPDATE_SUBREDDIT:
      return {
        ...state,
        shouldUpdateSubreddit: true,
      };
    case REQUEST_POSTS:
      return {
        ...state,
        shouldUpdateSubreddit: false,
        isFetching: true,
      };
    case GET_POSTS:
      return {
        ...state,
        shouldUpdateSubreddit: false,
        items: action.posts,
        isFetching: false,
        lastUpdated: action.receivedAt,
      };
    case FAILED_REQUEST:
      return {
        ...state,
        shouldUpdateSubreddit: false,
        error: action.error,
        items: [],
        isFetching: false,
      };
    default:
      return state;
  }
};

const postsFromSubreddit = (
  state = INITIAL_POSTS_FROM_SUBREDDIT_STATE,
  action
) => {
  switch (action.type) {
    case UPDATE_SUBREDDIT:
    case GET_POSTS:
    case FAILED_REQUEST:
    case REQUEST_POSTS:
      return {
        ...state,
        [action.payload]: posts(state[action.payload], action),
      };
    default:
      return state;
  }
};

export default postsFromSubreddit;
