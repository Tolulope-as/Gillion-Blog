import React from 'react';
import { useParams } from 'react-router-dom';
import postsData from '../posts.json';

function PostDetails() {
  const { id } = useParams(); // Get the id from the URL
  const post = postsData.find((p) => p.id === parseInt(id));

  if (!post) {
    return <p>Post not found</p>;
  }

 

  return (
    <>
<section className='blog-detail-flexbox'>
    <div className='post-details-section'>
      <h1 className='mt-5'>{post.title}</h1>
      <p>By {post.author}</p>
      <img src={post.image} class="blog-image"/>

      {post.content.map((paragraph, index) => (
        <p className="paragraph-one" key={index}>{paragraph} </p>
      ))}
    </div>
    <div className="comment-section">
      <p>Comments</p>
     <input 
     type="text" 
     className='post-comment'
     placeholder='Add a comment..'/>
     <button className='post-button btn btn-secondary'>Post</button>

      <div className='d-flex comment-post'>
      </div>

    </div>
    </section>
    </>
  );
}

export default PostDetails;
