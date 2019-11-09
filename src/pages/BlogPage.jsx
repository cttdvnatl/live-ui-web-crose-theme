import React from 'react';

import blogContent from '../database/blog-content';

const BlogPage = ({match}) => {
    const id = match.params.id;
    const blog = blogContent.find(blog => blog.name === id);
    if (!blog) return <h1>Blog does not exist!</h1>

    return (
    <div class="events-text">
    <h1>{blog.title}</h1>
    <img src={blog.image} alt=""/>
    <h3>By: {blog.author} post on {blog.date}</h3>
    <div class="upcoming-events-content d-flex flex-wrap align-items-center">
    <h4>{blog.content[0]}</h4>
    <h4>{blog.content[1]}</h4>
    </div>
    </div>
    
    );
}
export default BlogPage;