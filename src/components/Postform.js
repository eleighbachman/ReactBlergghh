import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { newPost } from '../actions/postActions';

class Postform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    }
  }

  onTitleChange = title => {
    this.setState({
      title
    })
  }

  onBodyChange = body => {
    this.setState({
      body
    })
  }

  postSubmit = e => {
    e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body
    }

    this.props.newPost(post);

  }

  render() {
    return(
      <div className="totalPostForm">
        <h1>Add a Post</h1>
        <hr />
        <form onSubmit={this.postSubmit}className="addPost">
          <div>
            <label>Title: </label><br />
            <input name="title" type="text" placeholder="I'm a controlled element!" onChange = {event => this.onTitleChange(event.target.value)} value={this.state.title}/>
          </div>
          <br/>
          <div>
            <label>Body: </label><br />
            <textarea name="body" placeholder="I'm a controlled element too!" onChange = {event => this.onBodyChange(event.target.value)} value={this.state.body}/>
          </div>
          <br />
          <button type="submit">Submit</button><br/>
        </form>
      </div>

    )
  }
}

Postform.propTypes = {
  newPost: PropTypes.func.isRequired
}

export default connect(null, { newPost })(Postform);
