import React, { Component } from 'react';
import axios from '../../../axios';
import { Link } from 'react-router-dom';

import Post from '../../../components/Post/Post';
import './Posts.css';

class Posts extends Component {
  state = {
    posts: []
  }

  componentDidMount = async () => {
    try {
      const results = await axios.get('/posts');
      const numOfPosts = results.data.slice(0, 4);
      const updatedPosts = numOfPosts.map(post => ({ ...post, author: 'Kiet' }));

      this.setState({ posts: updatedPosts });
    } catch (error) {
      console.log(error);
    }
  }

  postSelectedHandler = id => {
    this.setState({ selectedPostId: id });
  }

  render() {
    let posts = <p>Something went wrong!</p>;
    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        const { title, id, author } = post;
        return (
          <Link to={'/' + id } key={id}>
            <Post
              titleBlog={title}
              authorBlog={author}
              clickedBlog={() => this.postSelectedHandler(id)}
            />
          </Link>
        )
      });
    }

    return (
      <section className="Posts">
        {posts}
      </section>
    );
  }
}

export default Posts;
