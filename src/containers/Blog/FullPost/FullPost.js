import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
	state = {
		loadedPost: null,
	}

	componentDidUpdate = async () => {
		if (this.props.idBlog) {
			// Prevent infinite loop
			if (!this.state.loadedPost || (this.state.loadedPost.id !== this.props.idBlog)) {
				const results = await axios.get('/posts/' + this.props.idBlog);
				this.setState({ loadedPost: results.data });
			}
		}
	}

	deletePostHandler = async () => {
		const removedPost = await axios.delete('/posts/' + this.props.idBlog);
		console.log('removedPost', removedPost);
	}

	render () {
		let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
		if (this.props.idBlog) {
			post = <p style={{ textAlign: 'center' }}>Loading...</p>;
		}
		if (this.state.loadedPost) {
			post = (
				<div className="FullPost">
					<h1>{ this.state.loadedPost.title }</h1>
					<p>{ this.state.loadedPost.body }</p>
					<div className="Edit">
						<button className="Delete" onClick={ this.deletePostHandler }>Delete</button>
					</div>
				</div>
			);
		}
		return post;
	}
}

export default FullPost;