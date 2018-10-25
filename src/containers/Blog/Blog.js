import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
	state = {
		posts: [],
		selectedPostId: null,
	}

	componentDidMount = async () => {
		const dataURL = 'https://jsonplaceholder.typicode.com/posts';
		const results = await axios.get(dataURL);
		const numOfPosts = results.data.slice(0, 4);
		const updatedPosts = numOfPosts.map(post => ({ ...post, author: 'Kiet' }));

		this.setState({ posts: updatedPosts });
	}

	postSelectedHandler = id => {
		this.setState({ selectedPostId: id });
	}

	render() {
		const posts = this.state.posts.map(post => {
			const { title, id, author } = post;
			return <Post
				key={ id }
				titleBlog={ title }
				authorBlog={ author }
				clickedBlog={ () => this.postSelectedHandler(id) }
			/>
		});

		return (
			<div>
				<section className="Posts">
					{ posts }
				</section>

				<section>
					<FullPost idBlog={ this.state.selectedPostId } />
				</section>
				
				<section>
					<NewPost />
				</section>
			</div>
		);
	}
}

export default Blog;
