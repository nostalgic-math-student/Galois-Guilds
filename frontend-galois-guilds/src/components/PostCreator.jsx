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
    <div>
      <h2>Create a New Post</h2>
      <textarea
        value={postContent}
        onChange={handlePostContentChange}
        placeholder="Enter your post content..."
      />
      <button onClick={handleCreatePost}>Create Post</button>
    </div>
  );
};

export default PostCreator;
