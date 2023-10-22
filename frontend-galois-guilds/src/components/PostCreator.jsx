import React, { useState } from 'react';

const PostCreator = ({ onCreatePost }) => {
  const [postContent, setPostContent] = useState('');

  const handlePostContentChange = (e) => {
    setPostContent(e.target.value);
  };

  const handleCreatePost = () => {
    // Call the callback function to create the post with the entered content
    onCreatePost(postContent);

    // Clear the input field
    setPostContent('');
  };

  return (
    <div className='card'>
        <div className='card-title mx-auto text-center'>
      <h2>Create a New Post</h2>
        </div>
        <div className='card-body'>
      <textarea
        value={postContent}
        onChange={handlePostContentChange}
        placeholder="Enter your post content..."
      />
        </div>
      <button onClick={handleCreatePost} className='btn btn-accent w-36 mx-auto'>Create Post</button>
    </div>
  );
};

export default PostCreator;
