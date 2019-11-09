import React from 'react';
import blogContent from '../database/blog-content';
import BlogList from '../components/BlogList';
import Header from '../components/Header';


const BlogListPage = () => (
    <>
    <Header/>
    <h1>Blogs</h1>
    <BlogList blog={blogContent} />
    </>
);

export default BlogListPage;