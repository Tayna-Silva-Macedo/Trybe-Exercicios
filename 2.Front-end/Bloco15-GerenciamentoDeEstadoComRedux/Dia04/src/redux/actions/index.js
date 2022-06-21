import getPostsFromSubreddit from '../../services/redditAPI';

export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT';
export const UPDATE_SUBREDDIT = 'UPDATE_SUBREDDIT';
export const REQUEST_POSTS = 'REQUEST_POSTS';
export const GET_POSTS = 'GET_POSTS';
export const FAILED_REQUEST = 'FAILED_REQUEST';

export const updateSubreddit = (payload) => ({
  type: UPDATE_SUBREDDIT,
  payload,
});

export const requestPosts = (payload) => ({
  type: REQUEST_POSTS,
  payload,
});

export const selectSubreddit = (payload) => ({
  type: SELECT_SUBREDDIT,
  payload,
});

const getPosts = (payload, json) => ({
  type: GET_POSTS,
  posts: json.data.children.map((child) => child.data),
  receivedAt: Date.now(),
  payload,
});

const failedRequest = (payload, error) => ({
  type: FAILED_REQUEST,
  error,
  payload,
});

const fetchPosts = (payload) => {
  return (dispatch) => {
    dispatch(requestPosts(payload));

    return getPostsFromSubreddit(payload).then(
      (posts) => dispatch(getPosts(payload, posts)),
      (error) => dispatch(failedRequest(payload, error.message))
    );
  };
};

const shouldFetchPosts = (state, payload) => {
  const posts = state.postsFromSubreddit[payload];

  if (!posts.items) return true;
  if (posts.isFetching) return false;
  return posts.shouldUpdateSubreddit;
};

export const fetchPostsIfNeeded = (payload) => {
  return (dispatch, getState) =>
    shouldFetchPosts(getState(), payload) && dispatch(fetchPosts(payload));
};
