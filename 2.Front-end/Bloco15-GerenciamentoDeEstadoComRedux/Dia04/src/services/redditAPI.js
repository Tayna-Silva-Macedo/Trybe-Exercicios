const SUBREDDIT_BASE_API = 'https://www.reddit.com';

const getPostsFromSubreddit = (subreddit) =>
  fetch(`${SUBREDDIT_BASE_API}/r/${subreddit}.json`).then((response) =>
    response
      .json()
      .then((json) =>
        response.ok ? Promise.resolve(json) : Promise.reject(json)
      )
  );

export default getPostsFromSubreddit;