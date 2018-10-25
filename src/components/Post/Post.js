import React from 'react';

import './Post.css';

const post = ({ titleBlog, authorBlog, clickedBlog }) => (
	<article className="Post" onClick={ clickedBlog }>
		<h1>{ titleBlog }</h1>
		<div className="Info">
			<div className="Author">{ authorBlog }</div>
		</div>
	</article>
);

export default post;