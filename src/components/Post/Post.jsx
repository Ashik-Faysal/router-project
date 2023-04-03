import React from 'react';
import "./Post.css"
import { Link, useNavigate} from 'react-router-dom';

const Post = ({ post }) => {
    const { id, title, body } = post;
    const navigate = useNavigate();

    const handleButton = () => {
        navigate(`/post/${id}`);
    }
    return (
      <div className="post-container">
        <h1>id: {id}</h1>
        <h2>Title: {title}</h2>

        <Link to={`/post/${id}`}>Details</Link>
        <Link to={`/post/${id}`}>
          <button>Show Post Details</button>
            </Link>
            <button onClick={handleButton}>With Button Handler</button>
      </div>
    );
};

export default Post;