import React, { useState, useEffect } from "react";
import axios from "axios";

const Posts = (props) => {
  const userId = props.userId;
  const PostsApi = "https://jsonplaceholder.typicode.com/posts";

  const [posts, setPosts] = useState();

  useEffect(() => {
    axios
      .get(PostsApi)
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="posts-wrapper">
      {posts &&
        posts.map((el) =>
          el.userId === userId ? (
            <div key={el.id} className="post-container">
              <p className="title">{el.title}</p>
              <p className="post-body">{el.body}</p>
            </div>
          ) : (
            ""
          )
        )}
    </div>
  );
};

export default Posts;
