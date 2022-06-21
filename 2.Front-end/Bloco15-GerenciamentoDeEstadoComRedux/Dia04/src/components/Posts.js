import React from 'react';

class Posts extends React.Component {
  render() {
    const { posts } = this.props;
    return (
      <ul>
        {posts.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    );
  }
}

export default Posts;
