import { useState } from 'react';
import { Link } from 'react-router-dom';

const BlogList = ({ blogs, title }) => {
  // const blog = props.blogs;
  return (
    <div>
      <h2>{title}</h2>
      <div className='blog-list'>
        {
          blogs.map((b) => (
            <div className="blog-preview" key={blogs.id}>
              <Link to={`/blogs/${b.id}`}>
                <h2>{b.title}</h2>
                <p>Written by: {b.author}</p>
              </Link>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default BlogList;