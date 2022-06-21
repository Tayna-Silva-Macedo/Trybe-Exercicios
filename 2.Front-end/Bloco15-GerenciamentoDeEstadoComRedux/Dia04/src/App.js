import React from 'react';
import { connect } from 'react-redux';
import {
  updateSubreddit,
  selectSubreddit,
  fetchPostsIfNeeded,
} from './redux/actions';
import Posts from './components/Posts';
import Selector from './components/Selector';

import './App.css';

class App extends React.Component {
  componentDidMount() {
    const { dispatch, selectSubreddit } = this.props;
    dispatch(fetchPostsIfNeeded(selectSubreddit));
  }

  componentDidUpdate(prevProps) {
    const { props } = this;

    if (prevProps.selectSubreddit !== props.selectSubreddit) {
      const { dispatch, selectSubreddit } = props;
      dispatch(fetchPostsIfNeeded(selectSubreddit));
    }
  }

  selectSubreddit = (nextSubreddit) => {
    const { dispatch } = this.props;
    dispatch(selectSubreddit(nextSubreddit));
  };

  handleUpdateClick = (event) => {
    event.preventDefault();

    const { dispatch, selectSubreddit } = this.props;
    dispatch(updateSubreddit(selectSubreddit));
    dispatch(fetchPostsIfNeeded(selectSubreddit));
  };

  renderLastUpdatedAt = () => {
    const { lastUpdated } = this.props;

    return (
      <span>
        {`Last updated at ${new Date(lastUpdated).toLocaleTimeString()}.`}
      </span>
    );
  };

  renderUpdateButton = () => {
    const { isFetching } = this.props;

    return (
      <button
        type='button'
        onClick={(event) => this.handleUpdateClick(event)}
        disabled={isFetching}
      >
        Update
      </button>
    );
  };

  render() {
    const {
      availableSubreddits,
      selectSubreddit,
      posts = [],
      isFetching,
      lastUpdated,
    } = this.props;

    const isEmpty = posts.length === 0;

    return (
      <div>
        <Selector
          value={selectSubreddit}
          onChange={(nextSubreddit) => this.selectSubreddit(nextSubreddit)}
          options={availableSubreddits}
        />
        <div>
          {lastUpdated && this.renderLastUpdatedAt()}
          {this.renderUpdateButton()}
        </div>
        {isFetching && <h2>Loading...</h2>}
        {!isFetching && isEmpty && <h2>Empty.</h2>}
        {!isFetching && !isEmpty && <Posts posts={posts} />}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { selectSubreddit, postsFromSubreddit } = state;
  const {
    isFetching,
    lastUpdated,
    items: posts,
  } = postsFromSubreddit[selectSubreddit];

  return {
    selectSubreddit,
    posts,
    isFetching,
    lastUpdated,
    availableSubreddits: Object.keys(postsFromSubreddit),
  };
};

export default connect(mapStateToProps)(App);
