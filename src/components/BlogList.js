import React from 'react';
import { Link } from 'react-router-dom';


const BlogList = ({blog}) => (
    <>
    {blog.map((article, key) => (
        <Link key={key} to ={`/blog-list/${article.name}`}>
            <div class="container">
                <div class="row about-content justify-content-center">
                    <div class="col-12 col-md-6 col-lg-4">
                        <div class="about-us-content mb-100">
                        <img src={article.image} alt=""/>
                        <div class="about-text">
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4">
                  <div class="about-us-content mb-100">
                  <h3>{article.title}</h3>
                  <h5>{article.content[0].substring(0, 280)}...</h5>
                  </div>
              </div>
          </div>
          </div>
        </Link>
    ))}
    </>
);

export default BlogList;