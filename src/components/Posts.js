import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

class Posts extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }
  render() {
    const postItems = this.props.posts.map(post => {
      return (
        <div className="post" key={post.id}>
          <h3>&raquo; {post.title}</h3>
          <p>{post.body}</p>
        </div>
      )
    })
    return(
      <div className="totalPostBody">
        <h1>Posts</h1>
        <hr/>
        <p className="postCount"> total posts</p>
        {postItems}
      </div>
    )
  }
}

Posts.propTypes = {
  fetchPosts : PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  posts: state.posts.items
})

export default connect(mapStateToProps, { fetchPosts })(Posts);
